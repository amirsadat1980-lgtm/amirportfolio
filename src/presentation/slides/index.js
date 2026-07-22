import { OpeningSlide } from "./01-Opening";
import { WhoIAmSlide } from "./02-WhoIAm";
import { PositioningSlide } from "./03-Positioning";
import { WhatIBuildSlide } from "./04-WhatIBuild";
import { CaseStudyRagSlide } from "./05-CaseStudyRag";
import { CaseStudySafetySlide } from "./06-CaseStudySafety";
import { CaseStudyFrameworksSlide } from "./07-CaseStudyFrameworks";
import { TechStackSlide } from "./08-TechStack";
import { LiveDemoSlide } from "./09-LiveDemoSlide";
import { CapabilitiesSlide } from "./10-Capabilities";
import { PortfolioAccessSlide } from "./11-PortfolioAccess";
import { ContactSlide } from "./12-Contact";

export const slides = [
  { title: "Opening", Component: OpeningSlide },
  { title: "Who I Am", Component: WhoIAmSlide },
  { title: "Positioning", Component: PositioningSlide },
  { title: "What I Build", Component: WhatIBuildSlide },
  { title: "Case Study: RAG Knowledge Assistant", Component: CaseStudyRagSlide },
  { title: "Case Study: Prompt Safety & Evaluation Toolkit", Component: CaseStudySafetySlide },
  { title: "Case Study: Evaluation Framework + Content Workflow", Component: CaseStudyFrameworksSlide },
  { title: "Technologies & Workflow", Component: TechStackSlide },
  { title: "Live RAG Demo", Component: LiveDemoSlide },
  { title: "Key Capabilities", Component: CapabilitiesSlide },
  { title: "Portfolio Access", Component: PortfolioAccessSlide },
  { title: "Contact", Component: ContactSlide },
];
