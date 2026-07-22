import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";

// The 3D scene pulls in three.js, by far the largest dependency in this
// app. Splitting it into its own chunk keeps the initial page load light;
// the gradient backgrounds already render immediately, so the wireframe
// shape simply fades in a moment later once its chunk arrives.
const Scene = lazy(() => import("@/components/three/Scene"));

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-grid"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(26,255,168,0.14), transparent 70%), linear-gradient(180deg, #030807 0%, #030807 70%, #05100c 100%)",
        }}
      />

      <Suspense fallback={null}>
        <Scene className="opacity-90" />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(45% 55% at 50% 48%, rgba(3,8,7,0.55), transparent 72%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="font-display mt-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient glow-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-shadow-soft mt-4 text-lg font-semibold text-foreground sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="text-shadow-soft mt-6 max-w-2xl text-balance text-base leading-relaxed text-foreground/85 sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="group glow-border">
            <a href="#featured-project">
              View Featured Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass">
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              Get In Touch
            </a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex items-center justify-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary hover:glow-border"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary hover:glow-border"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
