import { OpeningSlide } from "./01-Opening";
import { ProjectOverviewSlide } from "./02-ProjectOverview";
import { RagIntroSlide } from "./03-RagIntro";
import { RagProblemSolutionSlide } from "./04-RagProblemSolution";
import { RagHowItWorksSlide } from "./05-RagHowItWorks";
import { RagHowToUseSlide } from "./06-RagHowToUse";
import { RagTechnicalDeepDiveSlide } from "./07-RagTechnicalDeepDive";
import { RagResultsSlide } from "./08-RagResults";
import { RagTryItLiveSlide } from "./09-RagTryItLive";
import { CaseStudySafetySlide } from "./06-CaseStudySafety";
import { CaseStudyFrameworksSlide } from "./07-CaseStudyFrameworks";
import { TechStackSlide } from "./08-TechStack";
import { CapabilitiesSlide } from "./10-Capabilities";
import { PortfolioAccessSlide } from "./11-PortfolioAccess";
import { ContactSlide } from "./12-Contact";

const RAG = "RAG Knowledge Assistant";

// Slides 10+ below are the pre-redesign placeholders for the 3 remaining
// projects and the closing sections — they're replaced chapter-by-chapter
// in the next phases of the presentation redesign plan, kept here only so
// the deck stays complete and navigable in the meantime.
export const slides = [
  { title: "Opening", Component: OpeningSlide, project: null },
  { title: "Project Overview", Component: ProjectOverviewSlide, project: null },
  { title: "RAG Knowledge Assistant — Introduction", Component: RagIntroSlide, project: RAG },
  { title: "RAG Knowledge Assistant — Problem & Solution", Component: RagProblemSolutionSlide, project: RAG },
  { title: "RAG Knowledge Assistant — How It Works", Component: RagHowItWorksSlide, project: RAG },
  { title: "RAG Knowledge Assistant — How to Use It", Component: RagHowToUseSlide, project: RAG },
  { title: "RAG Knowledge Assistant — Technical Deep Dive", Component: RagTechnicalDeepDiveSlide, project: RAG },
  { title: "RAG Knowledge Assistant — Results & Engineering Value", Component: RagResultsSlide, project: RAG },
  { title: "RAG Knowledge Assistant — Try It Live", Component: RagTryItLiveSlide, project: RAG },
  { title: "Case Study: Prompt Safety & Evaluation Toolkit", Component: CaseStudySafetySlide, project: null },
  { title: "Case Study: Evaluation Framework + Content Workflow", Component: CaseStudyFrameworksSlide, project: null },
  { title: "Technologies & Workflow", Component: TechStackSlide, project: null },
  { title: "Key Capabilities", Component: CapabilitiesSlide, project: null },
  { title: "Portfolio Access", Component: PortfolioAccessSlide, project: null },
  { title: "Contact", Component: ContactSlide, project: null },
];

export const PROJECT_ORDER = [
  "RAG Knowledge Assistant",
  "AI Content Quality Workflow",
  "Prompt Evaluation Framework",
  "Prompt Safety & Evaluation Toolkit",
];
