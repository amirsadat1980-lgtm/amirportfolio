import { SlideShell } from "../components/SlideShell";
import { Database, ClipboardCheck, FlaskConical, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Retrieval & Grounding",
    project: "RAG Knowledge Assistant",
    description: "Chunk, embed, retrieve, and cite — answers backed by real sources, or an honest refusal.",
  },
  {
    icon: ClipboardCheck,
    title: "Deterministic, Testable Pipelines",
    project: "AI Content Quality Workflow",
    description: "Every scorer and fix is a plain function — inspectable and reproducible, zero API cost by default.",
  },
  {
    icon: FlaskConical,
    title: "Evaluation Design",
    project: "Prompt Evaluation Framework",
    description: "Five explicit criteria turn \"I improved the prompt\" into a measured, reproducible claim.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Consistency Testing",
    project: "Prompt Safety & Evaluation Toolkit",
    description: "Categorized test cases, run repeatedly — because an unreliable prompt is a real finding.",
  },
];

export function EngineeringCapabilitiesSlide() {
  return (
    <SlideShell eyebrow="Across All Four Projects" title="Engineering capabilities demonstrated" maxWidth="max-w-5xl">
      <div className="grid w-full gap-3 sm:grid-cols-2">
        {capabilities.map(({ icon: Icon, title, project, description }) => (
          <div key={title} className="glass flex items-start gap-3 rounded-xl border border-border p-3.5 text-left">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-4" />
            </div>
            <div>
              <h3 className="text-[clamp(0.72rem,0.95vw,0.85rem)] font-bold">{title}</h3>
              <p className="mt-0.5 text-[clamp(0.6rem,0.82vw,0.7rem)] font-semibold uppercase tracking-wide text-primary/80">
                {project}
              </p>
              <p className="mt-1 text-[clamp(0.62rem,0.85vw,0.75rem)] leading-snug text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
