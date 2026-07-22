import { LiveDemo } from "@/components/sections/LiveDemo";

// Direct reuse of the same component the main site embeds — real backend,
// same rate limiting/validation, not a screenshot or a re-implementation.
export function LiveDemoSlide() {
  return (
    <div className="h-full w-full overflow-y-auto">
      <LiveDemo />
    </div>
  );
}
