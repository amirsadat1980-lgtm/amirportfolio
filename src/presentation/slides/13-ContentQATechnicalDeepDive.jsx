import { SlideShell } from "../components/SlideShell";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["AI Content Quality Workflow"];

export function ContentQATechnicalDeepDiveSlide() {
  return (
    <SlideShell eyebrow="Technical Deep Dive" title="What's actually under the hood" maxWidth="max-w-3xl">
      <ArchitectureDiagram {...details.techDeepDive} />
    </SlideShell>
  );
}
