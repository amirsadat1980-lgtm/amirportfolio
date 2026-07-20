import { Database, ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const projects = [
  {
    title: "RAG Knowledge Assistant",
    category: "AI Assistants",
    description:
      "A retrieval-augmented AI assistant designed to answer questions from a private knowledge base with grounded, source-aware responses.",
    icon: Database,
    tech: ["Python", "OpenAI API", "LangChain", "Vector Database", "RAG"],
    detailed: true,
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/rag-knowledge-assistant",
    liveDemo: "https://amirsadat1980-lgtm.github.io/rag-knowledge-assistant/",
    image: asset("images/rag-knowledge-assistant.png"),
  },
  {
    title: "AI Content Quality Workflow",
    category: "AI Workflow Automation",
    description:
      "An AI workflow that generates, evaluates, and improves marketing content using structured prompts, quality criteria, and human-review checkpoints.",
    icon: ClipboardCheck,
    tech: ["Prompt Engineering", "OpenAI API", "Python", "Automation", "Content QA"],
    detailed: true,
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/ai-content-quality-workflow",
    liveDemo: "https://amirsadat1980-lgtm.github.io/ai-content-quality-workflow/",
    image: asset("images/ai-content-quality-workflow.png"),
  },
  {
    title: "Prompt Evaluation Framework",
    category: "Prompt Engineering",
    description:
      "A framework for testing, comparing, benchmarking, and improving prompt quality across different LLMs.",
    icon: FlaskConical,
    tech: ["Python", "OpenAI API", "Pandas", "Streamlit"],
    detailed: true,
    githubUrl: "https://github.com/amirsadat1980-lgtm/prompt-evaluation-framework",
    liveDemo: "https://amirsadat1980-lgtm.github.io/prompt-evaluation-framework/",
    image: asset("images/prompt-evaluation-framework.png"),
  },
  {
    title: "Prompt Safety & Evaluation Toolkit",
    category: "Prompt Engineering",
    description:
      "A practical prompt-testing toolkit for measuring response quality, consistency, safety, and edge-case behavior across AI assistant workflows.",
    icon: ShieldCheck,
    tech: ["Prompt Evaluation", "Python", "Test Cases", "LLM Safety", "Analytics"],
    detailed: true,
    status: "Case Study",
    githubUrl: "https://github.com/amirsadat1980-lgtm/prompt-safety-toolkit",
    liveDemo: "https://amirsadat1980-lgtm.github.io/prompt-safety-toolkit/",
    image: asset("images/prompt-safety-toolkit.png"),
  },
];
