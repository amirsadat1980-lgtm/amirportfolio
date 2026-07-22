import { SlideLayout } from "../components/SlideLayout";

// The actual embedded, working RAG demo (LiveDemo.jsx) is added in Phase 3
// per the approved roadmap — this slide carries the real intro copy now.
export function LiveDemoSlide() {
  return (
    <SlideLayout eyebrow="Try It Live" title="Live RAG demo" className="max-w-3xl">
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Ask a question about Amir's work and get a real answer from a live
        retrieval-augmented pipeline — not a canned response. It runs on a
        serverless backend Amir designed and deployed himself, with rate
        limiting, input validation, and CORS restrictions to prevent abuse.
      </p>
    </SlideLayout>
  );
}
