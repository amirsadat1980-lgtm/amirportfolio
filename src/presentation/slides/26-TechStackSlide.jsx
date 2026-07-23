import { SlideShell } from "../components/SlideShell";
import { projects } from "@/data/projects";

const techTags = [...new Set(projects.flatMap((p) => p.tech))];

export function TechStackSlide() {
  return (
    <SlideShell eyebrow="Tools" title="Technologies & workflow" maxWidth="max-w-3xl">
      <ul className="flex flex-wrap justify-center gap-2.5">
        {techTags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-3.5 py-1.5 text-[clamp(0.68rem,0.9vw,0.8rem)] font-semibold text-primary/90"
          >
            {tag}
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}
