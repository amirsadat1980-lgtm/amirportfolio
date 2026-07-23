export function SlideShell({
  eyebrow,
  title,
  children,
  className = "",
  contentClassName = "",
  maxWidth = "max-w-5xl",
  scrollable = false,
}) {
  return (
    <div className={`mx-auto flex h-full w-full ${maxWidth} flex-col px-6 py-6 sm:px-10 sm:py-8 ${className}`}>
      <div className="flex shrink-0 flex-col items-center text-center">
        {eyebrow && (
          <p className="text-[clamp(0.65rem,1vw,0.8rem)] font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="font-display glow-text mt-2 text-[clamp(1.4rem,3vw,2.5rem)] font-bold text-balance">
            {title}
          </h2>
        )}
      </div>
      <div
        data-slide-content
        className={`mt-4 flex min-h-0 flex-1 flex-col items-center justify-center ${scrollable ? "overflow-y-auto" : "overflow-hidden"} ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
