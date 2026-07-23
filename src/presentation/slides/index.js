import { OpeningSlide } from "./01-Opening";
import { ProjectOverviewSlide } from "./02-ProjectOverview";
import { RagIntroSlide } from "./03-RagIntro";
import { RagProblemSolutionSlide } from "./04-RagProblemSolution";
import { RagHowItWorksSlide } from "./05-RagHowItWorks";
import { RagHowToUseSlide } from "./06-RagHowToUse";
import { RagTechnicalDeepDiveSlide } from "./07-RagTechnicalDeepDive";
import { RagResultsSlide } from "./08-RagResults";
import { RagTryItLiveSlide } from "./09-RagTryItLive";
import { ContentQAIntroSlide } from "./10-ContentQAIntro";
import { ContentQAHowItWorksSlide } from "./11-ContentQAHowItWorks";
import { ContentQAHowToUseSlide } from "./12-ContentQAHowToUse";
import { ContentQATechnicalDeepDiveSlide } from "./13-ContentQATechnicalDeepDive";
import { ContentQAResultsSlide } from "./14-ContentQAResults";
import { PefIntroSlide } from "./15-PefIntro";
import { PefHowItWorksSlide } from "./16-PefHowItWorks";
import { PefHowToUseSlide } from "./17-PefHowToUse";
import { PefTechnicalDeepDiveSlide } from "./18-PefTechnicalDeepDive";
import { PefResultsSlide } from "./19-PefResults";
import { SafetyIntroSlide } from "./20-SafetyIntro";
import { SafetyHowItWorksSlide } from "./21-SafetyHowItWorks";
import { SafetyHowToUseSlide } from "./22-SafetyHowToUse";
import { SafetyTechnicalDeepDiveSlide } from "./23-SafetyTechnicalDeepDive";
import { SafetyResultsSlide } from "./24-SafetyResults";
import { EngineeringCapabilitiesSlide } from "./25-EngineeringCapabilities";
import { TechStackSlide } from "./26-TechStackSlide";
import { ContactSlide } from "./27-Contact";

import { RAG, CONTENT_QA, PEF, SAFETY, PROJECT_ORDER } from "./projectMeta";

export { PROJECT_ORDER };

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

  { title: "AI Content Quality Workflow — Introduction", Component: ContentQAIntroSlide, project: CONTENT_QA },
  { title: "AI Content Quality Workflow — How It Works", Component: ContentQAHowItWorksSlide, project: CONTENT_QA },
  { title: "AI Content Quality Workflow — How to Use It", Component: ContentQAHowToUseSlide, project: CONTENT_QA },
  { title: "AI Content Quality Workflow — Technical Deep Dive", Component: ContentQATechnicalDeepDiveSlide, project: CONTENT_QA },
  { title: "AI Content Quality Workflow — Results & Engineering Value", Component: ContentQAResultsSlide, project: CONTENT_QA },

  { title: "Prompt Evaluation Framework — Introduction", Component: PefIntroSlide, project: PEF },
  { title: "Prompt Evaluation Framework — How It Works", Component: PefHowItWorksSlide, project: PEF },
  { title: "Prompt Evaluation Framework — How to Use It", Component: PefHowToUseSlide, project: PEF },
  { title: "Prompt Evaluation Framework — Technical Deep Dive", Component: PefTechnicalDeepDiveSlide, project: PEF },
  { title: "Prompt Evaluation Framework — Results & Engineering Value", Component: PefResultsSlide, project: PEF },

  { title: "Prompt Safety & Evaluation Toolkit — Introduction", Component: SafetyIntroSlide, project: SAFETY },
  { title: "Prompt Safety & Evaluation Toolkit — How It Works", Component: SafetyHowItWorksSlide, project: SAFETY },
  { title: "Prompt Safety & Evaluation Toolkit — How to Use It", Component: SafetyHowToUseSlide, project: SAFETY },
  { title: "Prompt Safety & Evaluation Toolkit — Technical Deep Dive", Component: SafetyTechnicalDeepDiveSlide, project: SAFETY },
  { title: "Prompt Safety & Evaluation Toolkit — Results & Engineering Value", Component: SafetyResultsSlide, project: SAFETY },

  { title: "Engineering Capabilities", Component: EngineeringCapabilitiesSlide, project: null },
  { title: "Technology Stack", Component: TechStackSlide, project: null },
  { title: "Contact", Component: ContactSlide, project: null },
];

// First-slide index of each project's chapter, keyed by project title —
// used by the Project Overview slide's click-to-jump cards.
export const PROJECT_START_INDEX = Object.fromEntries(
  PROJECT_ORDER.map((project) => [project, slides.findIndex((s) => s.project === project)])
);
