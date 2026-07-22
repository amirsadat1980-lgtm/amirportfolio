import { SlideShell } from "../components/SlideShell";
import { ProcessFlow } from "../components/ProcessFlow";
import { projectDetails } from "../data/projectDetails";

const details = projectDetails["RAG Knowledge Assistant"];

export function RagHowItWorksSlide() {
  return (
    <SlideShell eyebrow="How It Works" title="The real ingest → retrieve → ask pipeline" maxWidth="max-w-5xl">
      <ProcessFlow steps={details.pipeline} />
    </SlideShell>
  );
}
