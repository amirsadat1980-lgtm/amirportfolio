import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Me</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Who I am</h2>
        </Reveal>

        <Reveal delay={0.1} className="glass glow-border mt-10 rounded-2xl p-8 sm:p-10">
          <p className="text-balance text-lg leading-relaxed text-foreground/90">{profile.about}</p>
        </Reveal>
      </div>
    </section>
  );
}
