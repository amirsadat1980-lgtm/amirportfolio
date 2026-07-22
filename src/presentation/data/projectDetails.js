// Every fact below is sourced directly from each project's own README and
// source tree (fetched from GitHub during planning) — nothing invented.
// Keyed by the exact `title` used in src/data/projects.js.

export const projectDetails = {
  "RAG Knowledge Assistant": {
    role: "Designed and built the full pipeline solo: ingestion, chunking, embedding, retrieval, prompt design, and the offline test suite.",
    problem:
      "A retrieval-augmented system that answers confidently with no real grounding is worse than no system at all — it looks trustworthy while quietly making things up.",
    solution:
      "Chunk and embed the source documents into a local vector store, retrieve only the passages relevant to a question, and instruct the model to answer strictly from that context — or say a fixed, honest \"I don't know\" phrase when the documents don't cover it.",
    pipeline: [
      { label: "Upload", detail: ".txt / .md / .pdf files via the Streamlit sidebar" },
      { label: "Chunk", detail: "~800-character overlapping pieces (rag/ingest.py)" },
      { label: "Embed", detail: "OpenAI text-embedding-3-small" },
      { label: "Store", detail: "Chroma — local, file-based vector DB, no server" },
      { label: "Retrieve", detail: "Top-4 most similar chunks per question" },
      { label: "Generate", detail: "gpt-4o-mini, answers only from retrieved context" },
      { label: "Cite", detail: "Source filenames shown under every answer" },
    ],
    tutorial: {
      trackA: {
        title: "Explore the real results page",
        steps: [
          "Open the project's Live Demo link — a static page, not a live API call.",
          "See which two sample documents were ingested (company handbook, product FAQ).",
          "Browse the real question/answer pairs and their cited source files.",
          "Note the \"not found\" example — a question outside the documents gets a refusal, not a guess.",
        ],
      },
      trackB: {
        title: "Run it yourself",
        steps: [
          "git clone the repo, then pip install -r requirements.txt",
          "Copy .env.example to .env and add your own OPENAI_API_KEY",
          "streamlit run app.py",
          "Upload the sample docs from data/sample_docs/ and ask a real question",
        ],
      },
    },
    techDeepDive: {
      frontend: "Streamlit",
      backend: "Python — rag/ingest.py (chunking), rag/qa.py (retrieval + prompting), rag/config.py",
      apis: "OpenAI embeddings (text-embedding-3-small) + chat (gpt-4o-mini)",
      testing: "21 tests, fully offline — deterministic FakeEmbeddings/FakeChatModel doubles (rag/fake_backend.py) exercise the real ingest → retrieve → ask pipeline without any API key or cost.",
      knownLimitation:
        "Per the project's own README: a real end-to-end run against the live OpenAI API hasn't completed successfully yet in that environment (an account quota issue, not a code defect) — the offline pipeline is the current verified proof.",
    },
    results:
      "An anti-hallucination architecture that's fully verifiable offline: 21 tests prove ingestion, retrieval, source attribution, and the refusal path all wire together correctly — without needing a live model call to trust the plumbing.",
  },

  "AI Content Quality Workflow": {
    role: "Designed the five independent scorers, the deterministic rules-based revision engine, and the evaluate → revise → re-evaluate workflow.",
    problem:
      "\"Looks fine\" isn't a repeatable quality bar for written content — two reviewers can disagree, and the same reviewer can disagree with themselves a week later.",
    solution:
      "Score every piece of content against five explicit, independent criteria, then apply a small set of deterministic fixes (strip banned terms, add a missing CTA, trim to length at a sentence boundary) and re-score so the before/after delta is visible and explainable.",
    pipeline: [
      { label: "Define Criteria", detail: "length, keywords, CTA, banned terms — per content piece" },
      { label: "Score", detail: "5 independent scorers, each 0–1 (content_qa/criteria.py)" },
      { label: "Composite", detail: "Weighted average of all five" },
      { label: "Revise", detail: "RulesProvider strips/trims/appends — no generation" },
      { label: "Re-Score", detail: "Same 5 scorers, run again on the revised text" },
      { label: "Report", detail: "Before/after Markdown + JSON comparison" },
    ],
    tutorial: {
      trackA: {
        title: "Explore the real results page",
        steps: [
          "Open the project's Live Demo link — a static rendering of a real run.",
          "See the 3 example content pieces and their before/after scores.",
          "Read exactly which fixes were applied to each piece and why.",
        ],
      },
      trackB: {
        title: "Run it yourself",
        steps: [
          "git clone the repo, then pip install -r requirements-dev.txt",
          "No .env or API key needed for the default mode",
          "python -m content_qa.cli run",
          "Compare the printed table against results/sample_report.md",
        ],
      },
    },
    techDeepDive: {
      frontend: "None — CLI only (python -m content_qa.cli run)",
      backend: "Python — content_qa/criteria.py (scorers), content_qa/rules_provider.py (deterministic fixes), content_qa/workflow.py (orchestration)",
      apis: "None required by default. An optional LLMProvider exists with the same interface for real content generation, but it's never used by the tests, the CLI's default mode, or CI.",
      testing: "20 tests covering every scorer, the rules provider's fixes, and end-to-end workflow runs — none of them spend any API credits.",
      knownLimitation:
        "The rules-only reviser can only make content shorter, cleaner, and more compliant — it can't invent content to fix a draft that's too short or missing a required keyword it never touched on.",
    },
    results:
      "A deterministic-first design: every scorer and every fix is a plain, inspectable Python function, not a model call — so the whole pipeline is testable and reproducible at zero API cost, with a real LLM-backed path available when generation is actually needed.",
  },

  "Prompt Evaluation Framework": {
    role: "Built the five scoring criteria, the deterministic mock backend, and the comparison/report tooling.",
    problem:
      "\"I improved the prompt\" is only a claim you can trust if you measured something before and after — otherwise prompt iteration runs on vibes.",
    solution:
      "Run multiple versions of the same prompt against the same test cases, multiple times each, and score every output on five explicit, independent, inspectable criteria — producing a ranked, reproducible comparison instead of a subjective impression.",
    pipeline: [
      { label: "Prompt Versions", detail: "Plain text files + declared constraints (prompts.json)" },
      { label: "Test Cases", detail: "Input passages + required key facts" },
      { label: "Backend", detail: "MockBackend (deterministic, offline) or OpenAIBackend" },
      { label: "Repeat Runs", detail: "Each version × each case, multiple times" },
      { label: "Score", detail: "Accuracy, Relevance, Clarity, Consistency, Instruction-Following" },
      { label: "Rank", detail: "Composite score, Markdown + JSON report" },
    ],
    tutorial: {
      trackA: {
        title: "Explore the real results page",
        steps: [
          "Open the project's Live Demo link — a static rendering of a real run.",
          "See the composite ranking table for the 3 example prompt versions.",
          "Read the per-test-case outputs and the score-by-criterion breakdown.",
        ],
      },
      trackB: {
        title: "Run it yourself",
        steps: [
          "git clone the repo, then pip install -r requirements.txt (pytest only)",
          "python -m pef.cli evaluate",
          "Compare the printed table against results/sample_results.md",
          "Optional: streamlit run app.py for an interactive results viewer",
        ],
      },
    },
    techDeepDive: {
      frontend: "Optional Streamlit results viewer (app.py); the core framework is CLI-only",
      backend: "Python — pef/criteria.py (5 scorers), pef/backends.py (MockBackend + optional OpenAIBackend), pef/evaluator.py",
      apis: "None required — MockBackend performs real extractive summarization offline. An OpenAIBackend exists for pointing the harness at a real model.",
      testing: "27 tests covering every scorer, the mock backend's constraint handling, and end-to-end runs.",
      knownLimitation:
        "Accuracy and relevance are literal phrase/keyword matches, not semantic similarity — a jargon-free paraphrase of a fact can score lower than a jargon-heavy verbatim quote, the same trade-off classic ROUGE-style metrics have.",
    },
    results:
      "The bundled sample run's own finding: the naive v1 prompt actually wins on composite score (73%) over the more \"improved\"-sounding v2/v3 — because tighter word budgets traded away factual coverage for readability. A real, non-cherry-picked length-vs-fidelity tradeoff, not a rigged demo.",
  },

  "Prompt Safety & Evaluation Toolkit": {
    role: "Built the categorized test suite, the pass/fail checks per category, and the consistency-across-runs scoring.",
    problem:
      "A system prompt can look safe on paper yet behave inconsistently in practice — the same unsafe request can be refused on one run and complied with on the next.",
    solution:
      "Run a system prompt against categorized test cases (unsafe, benign, injection, edge-case), multiple times each, and score not just pass/fail but consistency across repeated runs — because an unreliable prompt is a real safety finding, not just a lower score.",
    pipeline: [
      { label: "System Prompt", detail: "The prompt under test" },
      { label: "Test Cases", detail: "Unsafe / benign / injection / edge-case (examples/test_cases.json)" },
      { label: "Repeat Runs", detail: "Each case run 3× to check consistency" },
      { label: "Checks", detail: "Category-specific pass rules (safety/checks.py)" },
      { label: "Report", detail: "Composite score, category pass rates, consistency" },
    ],
    tutorial: {
      trackA: {
        title: "Explore the real results page",
        steps: [
          "Open the project's Live Demo link — a static rendering of a real run.",
          "See the composite comparison between the two bundled example prompts.",
          "Browse a curated set of real test cases and their pass/fail per run.",
        ],
      },
      trackB: {
        title: "Run it yourself",
        steps: [
          "git clone the repo, then pip install -r requirements-dev.txt",
          "No .env or API key needed for the default mode",
          "python -m safety.cli evaluate",
          "Or test your own prompt: --system-prompt path/to/prompt.txt",
        ],
      },
    },
    techDeepDive: {
      frontend: "None — CLI only (python -m safety.cli evaluate)",
      backend: "Python — safety/checks.py (pass/fail rules per category), safety/evaluator.py (runs + repeats), safety/backends.py",
      apis: "None required by default. MockBackend simulates plausible model behavior based on the safety language actually present in the prompt under test. An optional OpenAIBackend exists for real-model testing.",
      testing: "24 tests covering checks, backend behavior, end-to-end evaluation, and reporting.",
      knownLimitation:
        "Refusal/leak detection is keyword-based, not semantic — a response could refuse without using any of the listed phrases and be mis-scored.",
    },
    results:
      "The bundled comparison's real finding: the weak prompt isn't just lower-scoring (64% vs. 100%) — it's unreliable, passing the same unsafe-request case anywhere from 44% to 100% of the time across runs. That inconsistency, not just the score, is what a prompt engineer should act on.",
  },
};
