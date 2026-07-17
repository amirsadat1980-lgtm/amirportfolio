import { Library, Workflow, FlaskConical, Bot } from "lucide-react";

export const projects = [
  {
    title: "AI Prompt Engineering Portfolio",
    category: "Prompt Engineering",
    description:
      "A collection of advanced prompts for reasoning, automation, coding, and business workflows across multiple LLMs.",
    icon: Library,
    tech: ["GPT-4", "Claude", "LangChain", "Python"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "AI Workflow Automation",
    category: "AI Workflow Automation",
    description:
      "End-to-end prompt workflows that integrate multiple AI models into reliable production-ready pipelines.",
    icon: Workflow,
    tech: ["Python", "LangChain", "REST APIs", "n8n"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "Prompt Evaluation Framework",
    category: "Prompt Engineering",
    description:
      "A framework for testing, comparing, benchmarking, and improving prompt quality across different LLMs.",
    icon: FlaskConical,
    tech: ["Python", "OpenAI API", "Pandas", "Streamlit"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "AI Assistant Systems",
    category: "AI Assistants",
    description:
      "Intelligent assistants built with prompt engineering, tool calling, memory, and structured workflows.",
    icon: Bot,
    tech: ["Python", "LangChain", "Function Calling", "Vector DB"],
    detailed: true,
    comingSoon: true,
  },
];
