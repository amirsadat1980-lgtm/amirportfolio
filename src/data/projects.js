import { Database, ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const projects = [
  {
    title: "RAG Knowledge Assistant",
    category: "AI Assistants",
    description:
      "A retrieval-augmented assistant that cites its source document for every answer and explicitly declines to guess when the documents don't cover a question — verified by 21 automated tests covering ingestion, retrieval, and source attribution.",
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
      "An automated content-QA pipeline that scores drafts against five criteria (length, keywords, CTA, banned terms, readability) and applies deterministic fixes — with 20 tests covering every scorer and the revision logic.",
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
      "A five-criteria evaluation harness (accuracy, relevance, clarity, consistency, instruction-following) for comparing prompt versions with reproducible, offline-scored results — 27 tests, plus a real sample run showing a concrete length-vs-fidelity tradeoff between three prompt iterations.",
    icon: FlaskConical,
    tech: ["Python", "OpenAI API", "Pandas", "Streamlit"],
    detailed: true,
    stat: "27 tests passing",
    githubUrl: "https://github.com/amirsadat1980-lgtm/prompt-evaluation-framework",
    liveDemo: "https://amirsadat1980-lgtm.github.io/prompt-evaluation-framework/",
    image: asset("images/prompt-evaluation-framework.png"),
  },
  {
    title: "Prompt Safety & Evaluation Toolkit",
    category: "Prompt Engineering",
    description:
      "A safety-testing harness that checks whether a system prompt actually refuses unsafe requests, resists prompt injection, and stays consistent across repeated runs — in the bundled example, a well-specified prompt scored 100% consistency versus 64% for a bare \"you are a helpful assistant\" prompt.",
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
