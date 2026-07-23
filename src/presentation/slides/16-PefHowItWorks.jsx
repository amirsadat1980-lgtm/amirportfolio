import { SlideShell } from "../components/SlideShell";
import { ProcessFlow } from "../components/ProcessFlow";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["Prompt Evaluation Framework"];

export function PefHowItWorksSlide() {
  return (
    <SlideShell eyebrow="How It Works" title="Run, score, rank — reproducibly" maxWidth="max-w-5xl">
      <ProcessFlow steps={details.pipeline} />
    </SlideShell>
  );
}
