export function TutorialSteps({ title, steps, className = "" }) {
  return (
    <div className={`glass flex w-full flex-col rounded-xl border border-border p-4 text-left ${className}`}>
      <h3 className="text-[clamp(0.78rem,1.05vw,0.92rem)] font-bold text-primary">{title}</h3>
      <ol className="mt-2 flex flex-col gap-1.5">
        {steps.map((step, i) => (
          <li
            key={i}
            className="flex gap-2 text-[clamp(0.68rem,0.9vw,0.82rem)] leading-snug text-muted-foreground"
          >
            <span className="shrink-0 font-bold text-primary">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
