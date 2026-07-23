import { Mail } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { SlideShell } from "../components/SlideShell";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

const PORTFOLIO_URL = "https://amirsadat1980-lgtm.github.io/amirportfolio/";

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
    <SlideShell eyebrow="Contact" title="Let's build something" maxWidth="max-w-3xl">
      <div className="grid w-full items-center gap-6 sm:grid-cols-[auto_minmax(0,1fr)]">
        <div
          role="img"
          aria-label={`QR code linking to ${PORTFOLIO_URL}`}
          className="glow-border mx-auto rounded-2xl bg-white p-3 sm:mx-0"
        >
          <QRCodeSVG value={PORTFOLIO_URL} size={120} bgColor="#ffffff" fgColor="#001208" level="M" />
        </div>
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <p className="text-[clamp(0.68rem,0.9vw,0.8rem)] text-muted-foreground">
            Scan to keep exploring, or reach out directly:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {links.map(({ href, label, icon: Icon }) => (
              <Button key={label} asChild size="sm" variant="outline" className="glass">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="size-3.5" />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
