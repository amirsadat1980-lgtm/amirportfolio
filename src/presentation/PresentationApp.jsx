import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slides";

const SWIPE_THRESHOLD = 60;

const variants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
};

export function PresentationApp() {
  const [[index, direction], setSlide] = useState([0, 0]);
  const prefersReducedMotion = useReducedMotion();
  const liveRegionRef = useRef(null);

  const goTo = useCallback(
    (nextIndex) => {
      setSlide(([current]) => {
        const clamped = Math.max(0, Math.min(slides.length - 1, nextIndex));
        return [clamped, clamped > current ? 1 : -1];
      });
    },
    []
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const { Component, title } = slides[index];
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  return (
    <div className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(26,255,168,0.14), transparent 70%), linear-gradient(180deg, #030807 0%, #030807 70%, #05100c 100%)",
        }}
      />

      <div aria-live="polite" className="sr-only" ref={liveRegionRef}>
        Slide {index + 1} of {slides.length}: {title}
      </div>

      <main className="relative z-10 flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={prefersReducedMotion ? undefined : variants}
            initial={prefersReducedMotion ? { opacity: 0 } : "enter"}
            animate={prefersReducedMotion ? { opacity: 1 } : "center"}
            exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut" }}
            drag={prefersReducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) next();
              else if (info.offset.x > SWIPE_THRESHOLD) prev();
            }}
            className="h-full w-full"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="relative z-10 flex items-center justify-center gap-6 pb-6 sm:pb-8">
        <button
          type="button"
          onClick={prev}
          disabled={isFirst}
          aria-label="Previous slide"
          className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-primary hover:glow-border disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {index + 1} / {slides.length}
          </span>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10 sm:w-48">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((index + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={isLast}
          aria-label="Next slide"
          className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-primary hover:glow-border disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
