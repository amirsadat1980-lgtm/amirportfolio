import { SlideLayout } from "../components/SlideLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const featuredTitles = ["Prompt Evaluation Framework", "AI Content Quality Workflow"];
const pair = projects.filter((p) => featuredTitles.includes(p.title));

export function CaseStudyFrameworksSlide() {
  return (
    <SlideLayout eyebrow="Case Study" title="Evaluation Framework & Content Workflow" className="max-w-5xl">
      <div className="mt-8 grid w-full gap-5 sm:grid-cols-2">
        {pair.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} className="glass border-border text-left">
              <CardContent>
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{project.title}</h3>
                {project.stat && (
                  <Badge variant="secondary" className="mt-2 text-secondary-foreground/90">
                    {project.stat}
                  </Badge>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SlideLayout>
  );
}
