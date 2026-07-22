import { SlideLayout } from "../components/SlideLayout";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

const current = experience.filter((e) => e.period === "Now" || e.period === "Ongoing");

export function CapabilitiesSlide() {
  return (
    <SlideLayout eyebrow="Value" title="Key capabilities" className="max-w-4xl">
      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
        {[...skills, ...current].map((entry) => {
          const Icon = entry.icon;
          const label = entry.name ?? entry.title;
          return (
            <div key={label} className="glass rounded-xl border border-border p-4 text-left">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold">{label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{entry.description}</p>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
