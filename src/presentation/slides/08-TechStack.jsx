import { SlideLayout } from "../components/SlideLayout";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const techTags = [...new Set(projects.flatMap((p) => p.tech))];

export function TechStackSlide() {
  return (
    <SlideLayout eyebrow="Tools" title="Technologies & workflow" className="max-w-4xl">
      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {techTags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary/90"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="glass rounded-xl border border-border p-4 text-left">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold">{skill.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
