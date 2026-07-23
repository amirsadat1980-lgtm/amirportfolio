import { SlideShell } from "../components/SlideShell";
import { ProcessFlow } from "../components/ProcessFlow";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["AI Content Quality Workflow"];

export function ContentQAHowItWorksSlide() {
  return (
    <SlideShell eyebrow="How It Works" title="Score, revise, re-score" maxWidth="max-w-5xl">
      <div className="mb-4 max-w-2xl text-center text-[clamp(0.68rem,0.9vw,0.8rem)] leading-relaxed text-muted-foreground">
        {details.problem}
      </div>
      <ProcessFlow steps={details.pipeline} />
    </SlideShell>
  );
}
