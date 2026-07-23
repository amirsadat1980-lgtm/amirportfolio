import { SlideShell } from "../components/SlideShell";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["Prompt Evaluation Framework"];

export function PefTechnicalDeepDiveSlide() {
  return (
    <SlideShell eyebrow="Technical Deep Dive" title="What's actually under the hood" maxWidth="max-w-3xl">
      <ArchitectureDiagram {...details.techDeepDive} />
    </SlideShell>
  );
}
