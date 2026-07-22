export function ScreenshotFrame({ src, alt, caption, className = "" }) {
  return (
    <figure className={`flex w-full max-w-sm flex-col items-center gap-1.5 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="glow-border aspect-video w-full rounded-xl border border-border object-cover object-top"
      />
      {caption && (
        <figcaption className="text-[clamp(0.58rem,0.8vw,0.68rem)] text-muted-foreground/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
