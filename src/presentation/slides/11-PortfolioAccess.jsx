import { SlideLayout } from "../components/SlideLayout";

const PORTFOLIO_URL = "https://amirsadat1980-lgtm.github.io/amirportfolio/";

// The scannable QR code is added in Phase 3 per the approved roadmap;
// the text-link fallback below is the real, permanent content either way.
export function PortfolioAccessSlide() {
  return (
    <SlideLayout eyebrow="Explore More" title="Keep exploring" className="max-w-2xl">
      <p className="mt-4 text-sm text-muted-foreground sm:text-base">
        The full portfolio — projects, live demo, and contact — is here:
      </p>
      <a
        href={PORTFOLIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glass glow-border mt-5 rounded-lg border border-primary/40 px-5 py-3 text-sm font-semibold text-primary break-all"
      >
        {PORTFOLIO_URL}
      </a>
    </SlideLayout>
  );
}
