import { Database, ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const projects = [
  {
    title: "RAG Knowledge Assistant",
    category: "AI Assistants",
    description:
      "Retrieval-augmented systems can answer confidently with no real support in the source text. This assistant turns your documents into embeddings for retrieval, cites the exact source for every answer, and declines to guess when it isn't covered — verified by 21 automated tests.",
    demoDisclosure:
      "Live Demo runs on the same deterministic backend used in the automated tests — reproducible, no API key required.",
    icon: Database,
    tech: ["Python", "OpenAI API", "LangChain", "Vector Database", "RAG"],
    detailed: true,
    featured: true,
    stat: "21 tests passing",
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/rag-knowledge-assistant",
    liveDemo: "https://amirsadat1980-lgtm.github.io/rag-knowledge-assistant/",
    image: asset("images/rag-knowledge-assistant.png"),
  },
  {
    title: "AI Content Quality Workflow",
    category: "AI Workflow Automation",
    description:
      "Manual content review is inconsistent — \"looks fine\" isn't a repeatable bar. This pipeline scores drafts against five explicit criteria (length, keywords, CTA, banned terms, readability) and applies deterministic fixes, covered by 20 tests.",
    demoDisclosure:
      "Live Demo runs on the same deterministic backend used in the automated tests — reproducible, no API key required.",
    icon: ClipboardCheck,
    tech: ["Prompt Engineering", "OpenAI API", "Python", "Automation", "Content QA"],
    detailed: true,
    stat: "20 tests passing",
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/ai-content-quality-workflow",
    liveDemo: "https://amirsadat1980-lgtm.github.io/ai-content-quality-workflow/",
    image: asset("images/ai-content-quality-workflow.png"),
  },
  {
    title: "Prompt Evaluation Framework",
    category: "Prompt Engineering",
    description:
      "\"I improved the prompt\" is usually a feeling, not a measured claim. This harness compares prompt versions — including a few-shot variant — against five explicit criteria (accuracy, relevance, clarity, consistency, instruction-following); a real sample run surfaces a concrete length-vs-fidelity tradeoff across 27 tests.",
    demoDisclosure:
      "Live Demo runs on the same deterministic backend used in the automated tests — reproducible, no API key required.",
    icon: FlaskConical,
    tech: ["Python", "OpenAI API", "Pandas", "Streamlit"],
    detailed: true,
    stat: "27 tests passing",
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/prompt-evaluation-framework",
    liveDemo: "https://amirsadat1980-lgtm.github.io/prompt-evaluation-framework/",
    image: asset("images/prompt-evaluation-framework.png"),
  },
  {
    title: "Prompt Safety & Evaluation Toolkit",
    category: "Prompt Engineering",
    description:
      "A system prompt can look safe on paper yet behave inconsistently in practice. This harness checks whether a prompt actually refuses unsafe requests, resists prompt injection, and stays consistent across repeated runs — in the bundled example, a well-specified prompt scored 100% consistency versus 64% for a bare \"you are a helpful assistant\" prompt.",
    demoDisclosure:
      "Live Demo runs on the same deterministic backend used in the automated tests — reproducible, no API key required.",
    icon: ShieldCheck,
    tech: ["Prompt Evaluation", "Python", "Test Cases", "LLM Safety", "Analytics"],
    detailed: true,
    stat: "100% vs. 64% consistency",
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/prompt-safety-toolkit",
    liveDemo: "https://amirsadat1980-lgtm.github.io/prompt-safety-toolkit/",
    image: asset("images/prompt-safety-toolkit.png"),
  },
];
