import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={(i % 3) * 0.1}>
                <Card className="glass group relative h-full gap-4 overflow-hidden border-border transition-all duration-300 hover:-translate-y-1.5 hover:glow-border">
                  {project.image && (
                    <div className="-mx-6 -mt-6 overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} live demo screenshot`}
                        className="aspect-video w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {project.detailed && (
                      <>
                        <ul className="mt-5 flex flex-wrap justify-center gap-2">
                          {project.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary/90"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                            >
                              <GithubIcon className="size-3.5" />
                              GitHub
                            </a>
                          ) : (
                            <span
                              title="Coming soon"
                              aria-disabled="true"
                              role="link"
                              tabIndex={-1}
                              className="inline-flex min-h-11 cursor-not-allowed items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                            >
                              <GithubIcon className="size-3.5" />
                              GitHub
                            </span>
                          )}
                          {project.liveDemo ? (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-primary bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                            >
                              <ExternalLink className="size-3.5" />
                              Live Demo
                            </a>
                          ) : (
                            <span
                              title="Coming soon"
                              aria-disabled="true"
                              role="link"
                              tabIndex={-1}
                              className="inline-flex min-h-11 cursor-not-allowed items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                            >
                              <ExternalLink className="size-3.5" />
                              Live Demo
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    <div className="mt-auto pt-5">
                      {project.status && (
                        <Badge className="bg-primary text-primary-foreground uppercase tracking-wider">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
