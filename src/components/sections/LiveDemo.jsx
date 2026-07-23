import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Loader2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DEMO_API_URL = import.meta.env.VITE_DEMO_API_URL;
const MIN_LENGTH = 3;
const MAX_LENGTH = 300;

const SAMPLE_QUESTIONS = [
  "What has Amir built with RAG?",
  "What is Amir's current focus?",
  "What skills does Amir bring to AI systems design?",
];

export function LiveDemo() {
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [answer, setAnswer] = useState(null);
  const [sources, setSources] = useState([]);
  const [expandedSources, setExpandedSources] = useState(() => new Set());
  const [errorMessage, setErrorMessage] = useState("");

  function toggleSource(index) {
    setExpandedSources((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const trimmed = question.trim();
  const isValid = trimmed.length >= MIN_LENGTH && trimmed.length <= MAX_LENGTH;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid || status === "loading" || !DEMO_API_URL) return;

    setStatus("loading");
    setErrorMessage("");
    setAnswer(null);
    setExpandedSources(new Set());

    try {
      const res = await fetch(`${DEMO_API_URL}/api/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setAnswer(data.answer);
      // sourceDetails carries the actual retrieved passage text; fall back to
      // title-only entries so older cached responses still render something.
      setSources(data.sourceDetails ?? (data.sources ?? []).map((title) => ({ title, text: null })));
      setStatus("success");
    } catch {
      setErrorMessage("Couldn't reach the demo backend. Please try again shortly.");
      setStatus("error");
    }
  }

  return (
    <section id="live-demo" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Try It Live</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">RAG Q&A demo</h2>
          {DEMO_API_URL && (
            <Badge variant="outline" className="mx-auto mt-3 border-primary/40 text-primary">
              <span className="mr-1 inline-block size-1.5 rounded-full bg-primary" />
              Live response · Powered by OpenAI
            </Badge>
          )}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Ask a question about Amir's work and get a real answer from a live
            retrieval-augmented pipeline — not a canned response. It runs on a
            serverless backend Amir designed and deployed himself, with rate
            limiting, input validation, and CORS restrictions to prevent abuse.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Card className="glass glow-border border-border">
            <CardContent>
              {!DEMO_API_URL ? (
                <p className="text-center text-sm text-muted-foreground">
                  Demo backend not configured yet.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <label htmlFor="demo-question" className="sr-only">
                    Ask a question about Amir
                  </label>
                  <textarea
                    id="demo-question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    maxLength={MAX_LENGTH}
                    rows={3}
                    placeholder="e.g. What has Amir built with RAG?"
                    className="w-full resize-none rounded-md border border-border bg-background/60 p-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  />

                  <div className="flex flex-wrap gap-2">
                    {SAMPLE_QUESTIONS.map((q) => (
                      <button
                        type="button"
                        key={q}
                        onClick={() => setQuestion(q)}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground">
                      {trimmed.length}/{MAX_LENGTH}
                    </span>
                    <Button type="submit" disabled={!isValid || status === "loading"}>
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin" />
                          Thinking...
                        </>
                      ) : (
                        <>
                          <Sparkles />
                          Ask
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {status === "error" && (
                <p role="alert" className="mt-5 text-sm text-destructive">
                  {errorMessage}
                </p>
              )}

              {status === "success" && answer && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-sm leading-relaxed text-foreground/90">{answer}</p>
                  {sources.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {sources.map((source, i) => {
                        const isOpen = expandedSources.has(i);
                        const hasText = Boolean(source.text);
                        return (
                          <li key={source.title}>
                            <button
                              type="button"
                              onClick={() => hasText && toggleSource(i)}
                              aria-expanded={isOpen}
                              disabled={!hasText}
                              className="flex w-full items-center justify-between gap-2 rounded-lg border border-border px-3 py-1.5 text-xs text-primary/90 transition-colors hover:bg-white/5 disabled:cursor-default disabled:hover:bg-transparent"
                            >
                              <span>{source.title}</span>
                              {hasText && (
                                <ChevronDown
                                  className={cn("size-3.5 shrink-0 transition-transform", isOpen && "rotate-180")}
                                />
                              )}
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && hasText && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: "easeOut" }}
                                  className="overflow-hidden"
                                >
                                  <p className="mt-2 rounded-md border border-border bg-background/40 p-3 text-xs leading-relaxed text-muted-foreground">
                                    {source.text}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
