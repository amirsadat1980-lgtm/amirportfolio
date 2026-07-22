import { SlideLayout } from "../components/SlideLayout";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const project = projects.find((p) => p.title === "RAG Knowledge Assistant");

export function CaseStudyRagSlide() {
  return (
    <SlideLayout eyebrow="Case Study" title={project.title} className="max-w-4xl">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} live demo screenshot`}
          className="glow-border mt-6 aspect-video w-full max-w-2xl rounded-xl border border-border object-cover object-top"
          loading="lazy"
        />
      )}
      {project.stat && (
        <Badge variant="secondary" className="mt-5 text-secondary-foreground/90">
          {project.stat}
        </Badge>
      )}
      <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {project.description}
      </p>
      {project.demoDisclosure && (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground/70">
          {project.demoDisclosure}
        </p>
      )}
    </SlideLayout>
  );
}
