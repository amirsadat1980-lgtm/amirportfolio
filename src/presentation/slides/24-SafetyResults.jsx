import { SlideShell } from "../components/SlideShell";
import { LaunchDemoButton } from "../components/LaunchDemoButton";
import { StatCompare } from "../components/StatCompare";
import { projects } from "@/data/projects";
import { projectDetails } from "../data/projectDetails";

const project = projects.find((p) => p.title === "Prompt Safety & Evaluation Toolkit");
const details = projectDetails[project.title];

const composite = [
  { value: "100%", label: "good_assistant", highlight: true },
  { value: "64%", label: "weak_assistant" },
];

export function SafetyResultsSlide() {
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
