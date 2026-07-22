import { SlideShell } from "../components/SlideShell";
import { profile } from "@/data/profile";

export function PositioningSlide() {
  return (
    <SlideShell eyebrow="Professional Positioning">
      <p className="font-display glow-text mt-6 text-3xl font-bold text-balance sm:text-5xl">
        {profile.headline}
      </p>
    </SlideShell>
  );
}
