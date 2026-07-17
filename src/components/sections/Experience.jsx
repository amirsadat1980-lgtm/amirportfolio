import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Experience</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">My journey so far</h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2" />

          <ol className="space-y-10">
            {experience.map(({ period, title, description, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <li className="relative flex items-start gap-6 sm:justify-center">
                  <div className="glass glow-border relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-primary sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <Icon className="size-5" />
                  </div>

                  <div className="glass w-full rounded-2xl p-6 sm:ml-0 sm:w-[calc(50%-2.5rem)] sm:odd:mr-auto sm:even:ml-auto">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {period}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
