import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const links = [
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    label: profile.email,
    icon: Mail,
    external: true,
  },
  { href: profile.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Let's build something</h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Have a project in mind or just want to talk AI systems and prompt engineering? Reach out.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="glass glow-border mt-10 flex flex-col items-center gap-6 rounded-2xl p-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ href, label, icon: Icon, external }) => (
              <Button key={label} asChild variant="outline" className="glass">
                <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                  <Icon className="size-4" />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
