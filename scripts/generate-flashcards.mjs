import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

const root = path.resolve(import.meta.dirname, "..");
const qaDir = path.join(root, "QAs");
const outputDir = path.join(root, "flashcards");
const groupedJsonOutputFile = path.join(outputDir, "qa-data.json");
const groupedJsOutputFile = path.join(outputDir, "qa-data.js");
const jsonOutputFile = path.join(outputDir, "cards-data.json");
const jsOutputFile = path.join(outputDir, "cards-data.js");
const readableFileNames = new Map([
  ["01_鍓嶇_React闈㈣瘯闂瓟.md", "01_前端_React面试问答.md"],
  ["02_鍓嶇_TypeScript澶嶄範.md", "02_前端_TypeScript复习.md"],
  ["06_DotNet_Entity_Framework姒傝.md", "06_DotNet_Entity_Framework概览.md"],
  ["07_鏁版嵁搴揰鍩虹闈㈣瘯闂瓟.md", "07_数据库_基础面试问答.md"],
]);

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function cleanMarkdown(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\*\*(Q|A):\*\*/gi, "$1:")
    .replace(/^\s*> ?/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeQuestion(text) {
  return String(text || "")
    .replace(/^#+\s*/, "")
    .replace(/^Q\s*\d*[.)]?\s*/i, "")
    .replace(/^\d+(?:\.\d+)*[.)]?\s*/, "")
    .replace(/\*\*/g, "")
    .trim();
}

function compactAnswer(text) {
  return cleanMarkdown(text)
    .replace(/^A:\s*/i, "")
    .replace(/^Answer:\s*/i, "")
    .replace(/^Reference answer:\s*/i, "")
    .replace(/^[-*]\s+/gm, "- ")
    .trim();
}

function normalizeMarkerLine(line) {
  return String(line || "")
    .replace(/^\s*\*\*([QA]):\s*(.*?)\*\*\s*$/i, "$1: $2")
    .replace(/^\s*\*\*([QA]):\*\*\s*/i, "$1: ")
    .trimEnd();
}

function detectTitle(markdown, fallback) {
  const title = markdown.split(/\r?\n/).find((line) => /^#\s+/.test(line));
  return title ? normalizeQuestion(title) : fallback.replace(/\.md$/i, "");
}

function detectTopic(lines, lineIndex) {
  for (let i = lineIndex; i >= 0; i -= 1) {
    const match = lines[i].match(/^#{2,3}\s+(.+)/);
    if (match) return normalizeQuestion(match[1]);
  }
  return "Interview Practice";
}

function cardId(source, question, answer) {
  return createHash("sha1")
    .update(`${source}\n${question}\n${answer}`)
    .digest("hex")
    .slice(0, 12);
}

function isHeadingQuestion(text) {
  const normalized = normalizeQuestion(text);
  return (
    /\?$/.test(normalized) ||
    /^(what|why|how|when|where|which|who|does|do|is|are|can|should|explain|describe|difference|common|the three)\b/i.test(
      normalized,
    )
  );
}

function parseExplicitQa(markdown, source) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const cards = [];

  for (let i = 0; i < lines.length; i += 1) {
    const questionMatch = normalizeMarkerLine(lines[i]).match(/^\s*Q:\s*(.*?)\s*$/i);
    if (!questionMatch) continue;

    const question = normalizeQuestion(questionMatch[1]);
    const answerLines = [];
    let j = i + 1;

    if (j < lines.length) {
      const answerMatch = normalizeMarkerLine(lines[j]).match(/^\s*A:\s*(.*?)\s*$/i);
      if (answerMatch) {
        answerLines.push(answerMatch[1]);
        j += 1;
      }
    }

    while (
      j < lines.length &&
      !/^\s*Q:\s*/i.test(normalizeMarkerLine(lines[j])) &&
      !/^#{2,4}\s+/.test(lines[j])
    ) {
      answerLines.push(lines[j]);
      j += 1;
    }

    const answer = compactAnswer(answerLines.join("\n"));
    if (question && answer) {
      cards.push({ source, topic: detectTopic(lines, i), question, answer });
    }
    i = j - 1;
  }

  return cards;
}

function parseAnswerHeadingQa(markdown, source) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const cards = [];

  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^###\s+Q\d+[.)]?\s+(.+)/i);
    if (!match) continue;

    const question = normalizeQuestion(match[1]);
    const answerLines = [];
    let j = i + 1;
    while (j < lines.length && !/^###\s+Q\d+[.)]?\s+/i.test(lines[j]) && !/^##\s+/.test(lines[j])) {
      answerLines.push(lines[j]);
      j += 1;
    }

    const answer = compactAnswer(answerLines.join("\n"));
    if (question && answer) {
      cards.push({ source, topic: detectTopic(lines, i), question, answer });
    }
    i = j - 1;
  }

  return cards;
}

function parseQuestionHeadings(markdown, source) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const cards = [];

  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^(#{2,3})\s+(.+)/);
    if (!match || !isHeadingQuestion(match[2])) continue;

    const level = match[1].length;
    const question = normalizeQuestion(match[2]);
    const answerLines = [];
    let j = i + 1;

    while (j < lines.length) {
      const nextHeading = lines[j].match(/^(#{2,3})\s+(.+)/);
      if (nextHeading && nextHeading[1].length <= level) break;
      if (!/^---+\s*$/.test(lines[j])) answerLines.push(lines[j]);
      j += 1;
    }

    const answer = compactAnswer(answerLines.join("\n"));
    if (question && answer) {
      cards.push({ source, topic: detectTopic(lines, i - 1), question, answer });
    }
    i = j - 1;
  }

  return cards;
}

function dedupeCards(cards) {
  const seen = new Set();
  return cards.filter((card) => {
    const key = `${card.question.toLowerCase()}\n${card.answer.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function withIds(cards) {
  return dedupeCards(cards).map((card) => ({
    id: cardId(card.source, card.question, card.answer),
    ...card,
  }));
}

const files = (await listMarkdownFiles(qaDir)).sort((a, b) => a.localeCompare(b));
const groupedSources = [];

for (const file of files) {
  const markdown = await readFile(file, "utf8");
  const source = path.relative(qaDir, file).replaceAll("\\", "/");
  const displayFileName = readableFileNames.get(source) || source;
  const sourceTitle = detectTitle(markdown, path.basename(source));
  const parsed = withIds([
    ...parseExplicitQa(markdown, source),
    ...parseAnswerHeadingQa(markdown, source),
    ...parseQuestionHeadings(markdown, source),
  ]).map((card) => ({ ...card, sourceTitle }));

  groupedSources.push({
    fileName: displayFileName,
    sourcePath: source,
    title: sourceTitle,
    count: parsed.length,
    questions: parsed.map(({ id, topic, question, answer }) => ({ id, topic, question, answer })),
  });
}

const flatCards = groupedSources.flatMap((source) =>
  source.questions.map((card) => ({
    id: card.id,
    source: source.sourcePath,
    fileName: source.fileName,
    topic: card.topic,
    question: card.question,
    answer: card.answer,
    sourceTitle: source.title,
  })),
);

await mkdir(outputDir, { recursive: true });
await writeFile(groupedJsonOutputFile, `${JSON.stringify(groupedSources, null, 2)}\n`, "utf8");
await writeFile(groupedJsOutputFile, `window.QA_DATA = ${JSON.stringify(groupedSources, null, 2)};\n`, "utf8");
await writeFile(jsonOutputFile, `${JSON.stringify(flatCards, null, 2)}\n`, "utf8");
await writeFile(jsOutputFile, `window.FLASHCARD_DATA = ${JSON.stringify(flatCards, null, 2)};\n`, "utf8");

console.log(
  `Generated ${flatCards.length} cards from ${groupedSources.length} files at ${path.relative(
    root,
    groupedJsonOutputFile,
  )} and ${path.relative(root, jsonOutputFile)}`,
);
