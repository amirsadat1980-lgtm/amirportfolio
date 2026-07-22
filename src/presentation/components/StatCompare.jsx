export function StatCompare({ items }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-3 sm:gap-6">
          <div className="text-center">
            <p
              className={`font-display text-[clamp(1.6rem,4vw,2.8rem)] font-bold ${
                item.highlight ? "glow-text text-primary" : "text-foreground/60"
              }`}
            >
              {item.value}
            </p>
            <p className="mt-1 max-w-[9rem] text-[clamp(0.6rem,0.85vw,0.75rem)] leading-snug text-muted-foreground">
              {item.label}
            </p>
          </div>
          {i < items.length - 1 && (
            <span className="text-[clamp(0.8rem,1.2vw,1.05rem)] text-muted-foreground">vs.</span>
          )}
        </div>
      ))}
    </div>
  );
}
