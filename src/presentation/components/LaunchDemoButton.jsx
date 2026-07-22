import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LaunchDemoButton({ href, label = "Launch Live Demo" }) {
  return (
    <Button asChild size="lg" className="glow-border">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="size-4" />
        {label}
      </a>
    </Button>
  );
}
