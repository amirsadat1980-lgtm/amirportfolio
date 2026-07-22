import { profile } from "@/data/profile";

export function OpeningSlide() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(26,255,168,0.16), transparent 70%), linear-gradient(180deg, #030807 0%, #030807 70%, #05100c 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
          <span className="text-gradient glow-text">{profile.name}</span>
        </h1>
        <p className="text-shadow-soft mt-4 text-lg font-semibold text-foreground sm:text-2xl">
          {profile.role}
        </p>
      </div>
    </div>
  );
}
