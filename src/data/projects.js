import { Wand2, Smartphone, Terminal, Workflow, Megaphone } from "lucide-react";
import { YoutubeIcon } from "@/components/icons/BrandIcons";

export const projects = [
  {
    title: "ContentCraft AI",
    category: "AI Content Creation",
    description:
      "An AI-assisted content pipeline that turns a single brief into on-brand copy, captions, and visuals ready for publishing.",
    icon: Wand2,
    tech: ["Python", "GPT-4", "Next.js", "Tailwind CSS"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "PromptForge",
    category: "Prompt Engineering",
    description:
      "A prompt engineering workbench for versioning, testing, and benchmarking prompts across multiple LLMs side by side.",
    icon: Terminal,
    tech: ["Python", "LangChain", "OpenAI API", "Streamlit"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "FlowPilot",
    category: "AI Workflow Automation",
    description:
      "An automation layer that chains AI models and APIs into multi-step workflows, replacing manual copy-paste handoffs.",
    icon: Workflow,
    tech: ["Node.js", "n8n", "REST APIs", "Docker"],
    detailed: true,
    comingSoon: true,
  },
  {
    title: "YouTube Video Production",
    category: "Video",
    description: "End-to-end production pipeline for long-form YouTube content, from script to edit.",
    icon: YoutubeIcon,
    detailed: false,
    comingSoon: true,
  },
  {
    title: "Short-form Reels",
    category: "Video",
    description: "Punchy, algorithm-friendly vertical video content for Reels, Shorts, and TikTok.",
    icon: Smartphone,
    detailed: false,
    comingSoon: true,
  },
  {
    title: "Social Media Strategy",
    category: "Growth",
    description: "Data-informed strategy and content calendars to grow engagement across platforms.",
    icon: Megaphone,
    detailed: false,
    comingSoon: true,
  },
];
