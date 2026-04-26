# Interview Flashcards Agent Guide

This project stores interview study material as Markdown and generates a browser-based flashcard dataset.

## Project Layout

- `QAs/`: source Markdown files. Edit these files when adding or changing study material.
- `scripts/generate-flashcards.mjs`: reads `QAs/**/*.md` and generates `flashcards/qa-data.js`.
- `flashcards/`: static browser app. Do not hand-edit generated data files.
- `flashcards/qa-data.js`: generated output. Regenerate it instead of editing it directly.

## Markdown Source Format

Every Markdown file in `QAs/` should use this structure:

```md
---
title: "React Interview Q&A"
category: "frontend"
tags: ["react", "javascript", "interview"]
language: "en"
source_type: "interview-notes"
---

# React Interview Q&A

## Knowledge Notes

Use this section for systematic knowledge, summaries, examples, command snippets, diagrams, checklists, and longer explanations.

This section is for human reading. The generator does not create cards from it.

## Flashcards

### React Basics
**Q:** What is React?
**A:** React is a JavaScript library for building user interfaces. It is component-based and uses declarative rendering.

### Hooks
**Q:** What does `useEffect` do?
**A:** It handles side effects such as data fetching, subscriptions, timers, and DOM interactions.
```

## Content Rules

- Put durable explanations in `## Knowledge Notes`.
- Put reviewable questions in `## Flashcards`.
- The generator only reads cards under `## Flashcards`.
- Use `### Topic Name` to group cards by topic.
- Each card must use exactly one `**Q:**` line followed by one `**A:**` answer.
- Answers may span multiple lines and may contain lists or fenced code blocks.
- Start the next card with another `**Q:**` line.
- Prefer one clear concept per card.
- Keep interview answers concise enough to say out loud.

## Adding New Material

1. Create or update a `.md` file under `QAs/`.
2. Add frontmatter with `title`, `category`, `tags`, `language`, and `source_type`.
3. Put long-form material under `## Knowledge Notes`.
4. Add cards under `## Flashcards`.
5. Run the generator:

```powershell
node scripts\generate-flashcards.mjs
```

6. Open `flashcards/index.html` in a browser to review the cards.

## Common Categories

- `frontend`
- `backend`
- `database`
- `business`
- `system-design`
- `devops`
- `general`

## Good Card Style

Good:

```md
**Q:** Why is `DbContext` usually registered as `Scoped`?
**A:** `DbContext` represents a data access session for one request. Sharing it globally can cause thread-safety issues, stale tracked entities, and disposed-instance problems.
```

Avoid:

```md
**Q:** Explain everything about EF Core.
**A:** ...
```

## Generator Contract

`scripts/generate-flashcards.mjs` expects:

- UTF-8 Markdown files.
- Optional YAML-like frontmatter at the top.
- A `## Flashcards` heading.
- Topic headings written as `### Topic`.
- Cards written as `**Q:**` and `**A:**`.

If a file has no `## Flashcards` section, it will still appear as a source with zero generated cards.

## Maintenance Notes

- Do not add new legacy parsing rules unless there is a strong reason.
- Prefer improving the Markdown source format over making the generator guess.
- Keep generated files out of manual edits.
- After changing any Markdown source or the generator, run:

```powershell
node scripts\generate-flashcards.mjs
```
