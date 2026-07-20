import { Database, ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

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
  },
];
