export function ArchitectureDiagram({ frontend, backend, apis, testing, knownLimitation }) {
  const rows = [
    { label: "Frontend", value: frontend },
    { label: "Backend", value: backend },
    { label: "APIs", value: apis },
    { label: "Testing", value: testing },
  ];

  return (
    <div className="flex w-full flex-col gap-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className="glass flex flex-col gap-0.5 rounded-lg border border-border px-3.5 py-2 text-left sm:flex-row sm:items-baseline sm:gap-3"
        >
          <span className="w-24 shrink-0 text-[clamp(0.6rem,0.85vw,0.72rem)] font-bold uppercase tracking-wide text-primary">
            {row.label}
          </span>
          <span className="text-[clamp(0.66rem,0.9vw,0.8rem)] leading-snug text-muted-foreground">
            {row.value}
          </span>
        </div>
      ))}
      {knownLimitation && (
        <div className="mt-0.5 rounded-lg border border-destructive/30 bg-destructive/5 px-3.5 py-2 text-left">
          <span className="text-[clamp(0.58rem,0.8vw,0.68rem)] font-bold uppercase tracking-wide text-destructive/80">
            Known Limitation
          </span>
          <p className="mt-0.5 text-[clamp(0.64rem,0.88vw,0.78rem)] leading-snug text-muted-foreground">
            {knownLimitation}
          </p>
        </div>
      )}
    </div>
  );
}
