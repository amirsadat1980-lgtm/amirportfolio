import { SlideShell } from "../components/SlideShell";
import { ScreenshotFrame } from "../components/ScreenshotFrame";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { projectDetails } from "../data/projectDetails";

const project = projects.find((p) => p.title === "RAG Knowledge Assistant");
const details = projectDetails[project.title];

export function RagIntroSlide() {
  return (
    <SlideShell eyebrow="Project 1 of 4" title={project.title} maxWidth="max-w-4xl">
      <div className="grid w-full items-center gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <ScreenshotFrame
          src={project.image}
          alt={`${project.title} live demo screenshot`}
          caption="The project's own live-results page"
          className="mx-auto sm:mx-0"
        />
        <div className="flex flex-col gap-3 text-left">
          {project.stat && (
            <Badge variant="secondary" className="w-fit text-secondary-foreground/90">
              {project.stat}
            </Badge>
          )}
          <p className="text-[clamp(0.75rem,1vw,0.9rem)] leading-relaxed text-foreground/90">
            A retrieval-augmented question-answering assistant: it turns your own documents into a
            searchable knowledge base and answers strictly from what's retrieved — citing the exact
            source, or refusing to guess when the documents don't cover the question.
          </p>
          <div>
            <p className="text-[clamp(0.6rem,0.85vw,0.7rem)] font-bold uppercase tracking-wide text-primary">
              My Role
            </p>
            <p className="mt-0.5 text-[clamp(0.68rem,0.9vw,0.8rem)] leading-snug text-muted-foreground">
              {details.role}
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
