import { SlideShell } from "../components/SlideShell";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["RAG Knowledge Assistant"];

export function RagProblemSolutionSlide() {
  return (
    <SlideShell eyebrow="Problem & Solution" title="Grounded answers, not confident guesses" maxWidth="max-w-4xl">
      <div className="grid w-full gap-4 sm:grid-cols-2">
        <div className="glass rounded-xl border border-destructive/25 bg-destructive/5 p-4 text-left">
          <p className="text-[clamp(0.62rem,0.85vw,0.72rem)] font-bold uppercase tracking-wide text-destructive/80">
            The Problem
          </p>
          <p className="mt-2 text-[clamp(0.72rem,0.95vw,0.85rem)] leading-relaxed text-foreground/90">
            {details.problem}
          </p>
        </div>
        <div className="glass glow-border rounded-xl border border-primary/30 p-4 text-left">
          <p className="text-[clamp(0.62rem,0.85vw,0.72rem)] font-bold uppercase tracking-wide text-primary">
            The Solution
          </p>
          <p className="mt-2 text-[clamp(0.72rem,0.95vw,0.85rem)] leading-relaxed text-foreground/90">
            {details.solution}
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
