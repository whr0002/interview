import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const qaDir = path.join(root, "QAs");
const outputDir = path.join(root, "flashcards");
const dataOutputFile = path.join(outputDir, "qa-data.js");
const legacyDataFiles = ["qa-data.json", "cards-data.json", "cards-data.js"].map((fileName) =>
  path.join(outputDir, fileName),
);

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMarkdownFiles(fullPath)));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) files.push(fullPath);
  }

  return files;
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return {};

  return Object.fromEntries(
    match[1]
      .split("\n")
      .map((line) => line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/))
      .filter(Boolean)
      .map(([, key, rawValue]) => [key, parseFrontmatterValue(rawValue)]),
  );
}

function parseFrontmatterValue(value) {
  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => parseFrontmatterValue(item))
      .filter(Boolean);
  }

  return trimmed.replace(/^["']|["']$/g, "");
}

function titleFromMarkdown(markdown, fallback) {
  return parseFrontmatter(markdown).title || markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || fallback.replace(/\.md$/i, "");
}

function cardId(source, question, answer) {
  return createHash("sha1")
    .update(`${source}\n${question}\n${answer}`)
    .digest("hex")
    .slice(0, 12);
}

function findFlashcardLines(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((line) => /^##\s+Flashcards\s*$/i.test(line));
  return start === -1 ? [] : lines.slice(start + 1);
}

function cleanInlineMarker(line, marker) {
  const pattern = new RegExp(`^\\s*(?:\\*\\*)?${marker}:\\s*(?:\\*\\*)?\\s*(.*?)(?:\\*\\*)?\\s*$`, "i");
  return line.match(pattern)?.[1]?.trim();
}

function parseFlashcards(markdown, sourcePath) {
  const lines = findFlashcardLines(markdown);
  const cards = [];
  let topic = "General";
  let current = null;

  function flush() {
    if (!current) return;
    const answer = current.answerLines.join("\n").trim();
    if (current.question && answer) {
      cards.push({
        id: cardId(sourcePath, current.question, answer),
        topic,
        question: current.question,
        answer,
      });
    }
    current = null;
  }

  for (const line of lines) {
    const heading = line.match(/^###\s+(.+)$/);
    if (heading) {
      flush();
      topic = heading[1].trim();
      continue;
    }

    const question = cleanInlineMarker(line, "Q");
    if (question !== undefined) {
      flush();
      current = { question, answerLines: [] };
      continue;
    }

    const answer = cleanInlineMarker(line, "A");
    if (answer !== undefined) {
      if (!current) current = { question: "", answerLines: [] };
      current.answerLines.push(answer);
      continue;
    }

    if (current) current.answerLines.push(line);
  }

  flush();
  return cards;
}

const files = (await listMarkdownFiles(qaDir)).sort((a, b) => a.localeCompare(b));
const groupedSources = [];

for (const file of files) {
  const markdown = await readFile(file, "utf8");
  const sourcePath = path.relative(qaDir, file).replaceAll("\\", "/");
  const questions = parseFlashcards(markdown, sourcePath);

  groupedSources.push({
    fileName: path.basename(file),
    sourcePath,
    title: titleFromMarkdown(markdown, path.basename(file)),
    category: parseFrontmatter(markdown).category || "general",
    tags: parseFrontmatter(markdown).tags || [],
    language: parseFrontmatter(markdown).language || "en",
    count: questions.length,
    questions,
  });
}

const totalCards = groupedSources.reduce((total, source) => total + source.count, 0);

await mkdir(outputDir, { recursive: true });
await writeFile(dataOutputFile, `window.QA_DATA = ${JSON.stringify(groupedSources, null, 2)};\n`, "utf8");
await Promise.all(legacyDataFiles.map((file) => rm(file, { force: true })));

console.log(`Generated ${totalCards} cards from ${groupedSources.length} files at ${path.relative(root, dataOutputFile)}`);
