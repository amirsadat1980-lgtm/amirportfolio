import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Skills</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">What I work with</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, description, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-border">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
