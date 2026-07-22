import { useEffect, useState } from "react";
import { Menu, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const presentationHref = `${import.meta.env.BASE_URL}presentation.html`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The Sheet locks body scroll while open and only releases it once its
  // close transition finishes (~300ms). Scrolling immediately on click races
  // that lock and silently no-ops, so the target section is reached only
  // after the menu has actually finished closing.
  const handleMobileLinkClick = (href) => (event) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }, 320);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-shadow-soft text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={presentationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-shadow-soft flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
              >
                <Presentation className="size-4" />
                Presentation
              </a>
            </li>
          </ul>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-l-border">
            <SheetTitle className="px-4 pt-4 text-gradient">Menu</SheetTitle>
            <nav className="mt-4 flex flex-col gap-2 px-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileLinkClick(link.href)}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={presentationHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-primary"
              >
                <Presentation className="size-4" />
                Presentation
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
