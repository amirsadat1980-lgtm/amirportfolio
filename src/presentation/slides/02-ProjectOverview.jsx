import { SlideShell } from "../components/SlideShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function ProjectOverviewSlide() {
  return (
    <SlideShell eyebrow="Portfolio" title="Four projects, one discipline" maxWidth="max-w-5xl">
      <p className="mb-4 max-w-2xl text-center text-[clamp(0.7rem,0.95vw,0.85rem)] text-muted-foreground">
        Each project below gets its own chapter — what it solves, how it works, how to use it,
        and what it demonstrates.
      </p>
      <div className="grid w-full gap-3 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} className="glass border-border text-left">
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
                  <p className="mt-1 line-clamp-2 text-[clamp(0.62rem,0.85vw,0.75rem)] leading-snug text-muted-foreground">
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
