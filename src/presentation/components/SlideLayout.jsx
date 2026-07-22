export function SlideLayout({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center sm:px-10 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-display glow-text mt-3 text-3xl font-bold text-balance sm:text-5xl">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
