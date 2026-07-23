import { SlideShell } from "../components/SlideShell";
import { TutorialSteps } from "../components/TutorialSteps";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["AI Content Quality Workflow"];

export function ContentQAHowToUseSlide() {
  return (
    <SlideShell eyebrow="How to Use It" title="Two honest ways to see it in action" maxWidth="max-w-4xl">
      <div className="grid w-full gap-3 sm:grid-cols-2">
        <TutorialSteps title={details.tutorial.trackA.title} steps={details.tutorial.trackA.steps} />
        <TutorialSteps title={details.tutorial.trackB.title} steps={details.tutorial.trackB.steps} />
      </div>
    </SlideShell>
  );
}
