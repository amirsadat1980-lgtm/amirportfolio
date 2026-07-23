import { SlideShell } from "../components/SlideShell";
import { ProcessFlow } from "../components/ProcessFlow";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["Prompt Safety & Evaluation Toolkit"];

export function SafetyHowItWorksSlide() {
  return (
    <SlideShell eyebrow="How It Works" title="Categorized cases, repeated runs" maxWidth="max-w-5xl">
      <ProcessFlow steps={details.pipeline} />
    </SlideShell>
  );
}
