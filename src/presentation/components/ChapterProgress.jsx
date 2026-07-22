export function ChapterProgress({ project, projectIndex, projectTotal }) {
  if (!project) return null;
  return (
    <span className="text-[10px] text-muted-foreground/70">
      Project {projectIndex} of {projectTotal} · {project}
    </span>
  );
}
