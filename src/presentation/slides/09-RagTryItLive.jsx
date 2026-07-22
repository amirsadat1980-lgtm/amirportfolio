import { LiveDemo } from "@/components/sections/LiveDemo";

// Direct reuse of the real, working LiveDemo.jsx component — same
// Cloudflare Worker backend, rate limiting, and validation as the main
// site. It answers questions about Amir's portfolio (not the RAG
// project's own sample documents) using the same retrieval technique
// described in this chapter — LiveDemo.jsx's own intro copy makes that
// scope clear.
export function RagTryItLiveSlide() {
  return (
    <div className="h-full w-full overflow-y-auto">
      <LiveDemo />
    </div>
  );
}
