import { ArrowRight } from "lucide-react";

export function ProcessFlow({ steps }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-1.5">
          <div className="glass flex w-[clamp(6rem,11vw,9.5rem)] flex-col items-center gap-0.5 rounded-xl border border-border px-3 py-2.5 text-center">
            <span className="text-[clamp(0.68rem,0.95vw,0.82rem)] font-bold text-primary">{step.label}</span>
            <span className="text-[clamp(0.58rem,0.8vw,0.68rem)] leading-snug text-muted-foreground">
              {step.detail}
            </span>
          </div>
          {i < steps.length - 1 && <ArrowRight className="size-3.5 shrink-0 text-primary/50" />}
        </div>
      ))}
    </div>
  );
}
