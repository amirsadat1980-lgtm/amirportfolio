// One-time/offline script: precomputes embedding vectors for the static
// knowledge base so the deployed Worker never has to embed the whole
// knowledge base on every request (cheaper and faster — only the visitor's
// question gets embedded at request time).
//
// Run locally only. Reads OPENAI_API_KEY from your shell environment —
// never hardcode it here and never commit it.
//
// Usage (from the worker/ directory):
//   OPENAI_API_KEY=sk-... node scripts/build-embeddings.mjs
//
// Output: src/data/embeddings.json (safe to commit — vectors are not secrets)

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { KNOWLEDGE_CHUNKS } from "../src/knowledge.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EMBEDDING_MODEL = "text-embedding-3-small";
const OUTPUT_PATH = path.join(__dirname, "..", "src", "data", "embeddings.json");

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Set OPENAI_API_KEY in your shell before running this script.");
    process.exit(1);
  }

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: EMBEDDING_MODEL,
      input: KNOWLEDGE_CHUNKS.map((chunk) => chunk.text),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`OpenAI embeddings request failed: ${response.status} ${body}`);
    process.exit(1);
  }

  const data = await response.json();

  const entries = KNOWLEDGE_CHUNKS.map((chunk, i) => ({
    id: chunk.id,
    title: chunk.title,
    text: chunk.text,
    embedding: data.data[i].embedding,
  }));

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify({ model: EMBEDDING_MODEL, entries }, null, 2));

  console.log(`Wrote ${entries.length} embeddings to ${OUTPUT_PATH}`);
}

main();
