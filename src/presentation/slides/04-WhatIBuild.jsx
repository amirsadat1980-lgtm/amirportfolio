import { SlideLayout } from "../components/SlideLayout";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function WhatIBuildSlide() {
  return (
    <SlideLayout eyebrow="Overview" title="What I build" className="max-w-5xl">
      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} className="glass border-border text-left">
              <CardContent className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{project.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SlideLayout>
  );
}
