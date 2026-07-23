import { SlideShell } from "../components/SlideShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function ProjectOverviewSlide({ goTo, projectStartIndex = {} }) {
  return (
    <SlideShell eyebrow="Portfolio" title="Four projects, one discipline" maxWidth="max-w-5xl">
      <p className="mb-4 max-w-2xl text-center text-[clamp(0.66rem,0.9vw,0.8rem)] text-muted-foreground">
        Each project below gets its own chapter — what it solves, how it works, how to use it, and
        what it demonstrates. Click a card to jump straight there.
      </p>
      <div className="grid w-full gap-3 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          const targetIndex = projectStartIndex[project.title];
          return (
            <Card
              key={project.title}
              role={targetIndex != null ? "button" : undefined}
              tabIndex={targetIndex != null ? 0 : undefined}
              onClick={targetIndex != null ? () => goTo?.(targetIndex) : undefined}
              onKeyDown={
                targetIndex != null
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        goTo?.(targetIndex);
                      }
                    }
                  : undefined
              }
              className={`glass border-border text-left ${
                targetIndex != null ? "cursor-pointer transition-all hover:-translate-y-0.5 hover:glow-border" : ""
              }`}
            >
              <CardContent className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>
                <div>
                  <h3 className="text-[clamp(0.75rem,1vw,0.88rem)] font-bold">{project.title}</h3>
                  {project.stat && (
                    <Badge variant="secondary" className="mt-1 text-[10px] text-secondary-foreground/90">
                      {project.stat}
                    </Badge>
                  )}
                  <p className="mt-1 line-clamp-2 text-[clamp(0.6rem,0.82vw,0.72rem)] leading-snug text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SlideShell>
  );
}
