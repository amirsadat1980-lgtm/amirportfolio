import { SlideShell } from "../components/SlideShell";
import { projects } from "@/data/projects";

const project = projects.find((p) => p.title === "Prompt Safety & Evaluation Toolkit");

export function CaseStudySafetySlide() {
  return (
    <SlideShell eyebrow="Case Study" title={project.title} maxWidth="max-w-4xl">
      <div className="mt-6 flex items-center justify-center gap-6 sm:gap-10">
        <div className="text-center">
          <p className="font-display glow-text text-4xl font-bold text-primary sm:text-6xl">100%</p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Well-specified prompt</p>
        </div>
        <span className="text-2xl text-muted-foreground">vs.</span>
        <div className="text-center">
          <p className="font-display text-4xl font-bold text-foreground/60 sm:text-6xl">64%</p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Bare "helpful assistant" prompt</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {project.description}
      </p>
      {project.demoDisclosure && (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground/70">
          {project.demoDisclosure}
        </p>
      )}
    </SlideShell>
  );
}
