import { SlideShell } from "../components/SlideShell";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { projectDetails } from "../data/projectDetails";

const project = projects.find((p) => p.title === "RAG Knowledge Assistant");
const details = projectDetails[project.title];

export function RagResultsSlide() {
  return (
    <SlideShell eyebrow="Results & Engineering Value" title="What this demonstrates" maxWidth="max-w-3xl">
      {project.stat && (
        <Badge variant="secondary" className="mb-3 text-secondary-foreground/90">
          {project.stat}
        </Badge>
      )}
      <p className="text-[clamp(0.75rem,1vw,0.9rem)] leading-relaxed text-foreground/90">
        {details.results}
      </p>
    </SlideShell>
  );
}
