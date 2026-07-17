import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="font-display text-lg font-bold text-gradient">{profile.name}</p>

        <ul className="mt-6 flex justify-center gap-4">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary hover:glow-border"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
