// Static knowledge base for the RAG demo. Each chunk is a short, factual
// passage about Amir; retrieval picks the most relevant chunks for a given
// question and the model is instructed to answer only from those chunks.
export const KNOWLEDGE_CHUNKS = [
  {
    id: "role",
    title: "Role & focus",
    text: "Amir Sadat is a prompt engineer and AI systems builder. He designs and refines prompts that get the most out of large language models, and builds production-ready LLM workflows that actually ship, sitting at the intersection of AI capability and real-world usability.",
  },
  {
    id: "rag-project",
    title: "RAG Knowledge Assistant",
    text: "Amir built a RAG Knowledge Assistant: a retrieval-augmented AI assistant that answers questions from a private knowledge base with grounded, source-aware responses. It uses Python, the OpenAI API, LangChain, and a vector database. This portfolio's own live demo widget is a small example of the same retrieval-augmented-generation pattern.",
  },
  {
    id: "content-qa-project",
    title: "AI Content Quality Workflow",
    text: "Amir built an AI Content Quality Workflow: an automation that generates, evaluates, and improves marketing content using structured prompts, explicit quality criteria, and human-review checkpoints. It combines prompt engineering, the OpenAI API, and Python automation.",
  },
  {
    id: "eval-framework-project",
    title: "Prompt Evaluation Framework",
    text: "Amir built a Prompt Evaluation Framework for testing, comparing, benchmarking, and improving prompt quality across different LLMs, using Python, the OpenAI API, Pandas, and Streamlit.",
  },
  {
    id: "safety-toolkit-project",
    title: "Prompt Safety & Evaluation Toolkit",
    text: "Amir built a Prompt Safety & Evaluation Toolkit: a practical prompt-testing toolkit for measuring response quality, consistency, safety, and edge-case behavior across AI assistant workflows, covering prompt evaluation, Python, test cases, LLM safety, and analytics.",
  },
  {
    id: "skill-prompt-engineering",
    title: "Skill: Prompt engineering",
    text: "Amir designs, versions, and tests prompts so they reliably get the best behavior out of large language models, treating prompts as engineered artifacts rather than one-off text.",
  },
  {
    id: "skill-llm-workflows",
    title: "Skill: LLM workflows",
    text: "Amir chains models, tools, and data sources together into dependable, production-ready pipelines, rather than relying on a single unstructured model call.",
  },
  {
    id: "skill-ai-systems-design",
    title: "Skill: AI systems design",
    text: "Amir architects AI-powered systems that are usable, observable, and built to scale, thinking about the surrounding system as much as the model itself.",
  },
  {
    id: "experience-now",
    title: "Current focus",
    text: "Amir is currently building AI automation and workflow tools: designing prompt-driven systems and automation pipelines that connect LLMs to real tools and data.",
  },
  {
    id: "experience-deep-focus",
    title: "Ongoing deep focus",
    text: "Amir has an ongoing deep focus on prompt engineering, studying and applying prompt design patterns, evaluation methods, and LLM behavior across different model families.",
  },
  {
    id: "experience-start",
    title: "How he started",
    text: "Amir started his AI engineering journey by exploring AI content creation and LLM tooling, which laid the foundation for a career in AI systems.",
  },
  {
    id: "contact",
    title: "Contact & links",
    text: "Amir can be reached at amir.sadat1980@gmail.com, on GitHub at github.com/amirsadat1980-lgtm, and on LinkedIn at linkedin.com/in/amir-sadat-442349168. His portfolio is live at amirsadat1980-lgtm.github.io/amirportfolio.",
  },
];
