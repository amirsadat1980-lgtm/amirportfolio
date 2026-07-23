import { SlideShell } from "../components/SlideShell";
import { LaunchDemoButton } from "../components/LaunchDemoButton";
import { StatCompare } from "../components/StatCompare";
import { projects } from "@/data/projects";
import { projectDetails } from "../data/projectDetails";

const project = projects.find((p) => p.title === "Prompt Evaluation Framework");
const details = projectDetails[project.title];

const composite = [
  { value: "73%", label: "v1_naive", highlight: true },
  { value: "67%", label: "v2_role_primed" },
  { value: "64%", label: "v3_few_shot_strict" },
];

export function PefResultsSlide() {
  return (
    <SlideShell eyebrow="Results & Engineering Value" title="What this demonstrates" maxWidth="max-w-3xl">
      <StatCompare items={composite} />
      <p className="mt-5 text-[clamp(0.72rem,0.95vw,0.85rem)] leading-relaxed text-foreground/90">
        {details.results}
      </p>
      <div className="mt-5">
        <LaunchDemoButton href={project.liveDemo} label="Launch Live Results" />
      </div>
    </SlideShell>
  );
}
