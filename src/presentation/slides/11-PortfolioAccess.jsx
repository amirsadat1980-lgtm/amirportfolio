import { QRCodeSVG } from "qrcode.react";
import { SlideLayout } from "../components/SlideLayout";

const PORTFOLIO_URL = "https://amirsadat1980-lgtm.github.io/amirportfolio/";

export function PortfolioAccessSlide() {
  return (
    <SlideLayout eyebrow="Explore More" title="Keep exploring" className="max-w-2xl">
      <p className="mt-4 text-sm text-muted-foreground sm:text-base">
        The full portfolio — projects, live demo, and contact — is here:
      </p>

      <div
        role="img"
        aria-label={`QR code linking to ${PORTFOLIO_URL}`}
        className="glow-border mt-6 rounded-2xl bg-white p-4"
      >
        <QRCodeSVG value={PORTFOLIO_URL} size={160} bgColor="#ffffff" fgColor="#001208" level="M" />
      </div>

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
