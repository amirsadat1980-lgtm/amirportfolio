import { Mail } from "lucide-react";
import { SlideLayout } from "../components/SlideLayout";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

const links = [
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    label: profile.email,
    icon: Mail,
  },
  { href: profile.github, label: "GitHub", icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
];

export function ContactSlide() {
  return (
    <SlideLayout eyebrow="Contact" title="Let's build something" className="max-w-2xl">
      <div className="glass glow-border mt-8 flex flex-col items-center gap-6 rounded-2xl p-8 sm:p-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <Button key={label} asChild variant="outline" className="glass">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="size-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
