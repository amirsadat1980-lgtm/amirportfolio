import { SlideLayout } from "../components/SlideLayout";
import { profile } from "@/data/profile";

export function WhoIAmSlide() {
  return (
    <SlideLayout eyebrow="Who I Am">
      <blockquote className="glass glow-border mt-6 rounded-2xl p-8 sm:p-10">
        <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
          {profile.about}
        </p>
      </blockquote>
    </SlideLayout>
  );
}
