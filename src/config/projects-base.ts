/** Portfolio projects — plain data for `/projects`, ChatPrompt, and config mapping. */

export interface ProjectBase {
  id: string;
  title: string;
  /** Short label beside title (e.g. repo path or product line). */
  repositoryLabel: string;
  /** One-line focus (stack · domain). */
  tagline: string;
  /** Right column primary status line. */
  statusLabel: string;
  metaRight?: string;
  accomplishments: string[];
  /** Short summary for assistant / SEO (first paragraph tone). */
  description: string;
  image: string;
  link: string;
  live: string;
  technologyNames: string[];
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
  primaryLinkLabel: string;
  demoUrl?: string;
  demoLinkLabel?: string;
}

export const projectsBase: ProjectBase[] = [
  {
    id: 'secure-mcp-server',
    title: 'Secure MCP Server Framework',
    repositoryLabel: 'Research · MCP · middleware',
    tagline: 'Python · TypeScript · FastMCP · JWT · RBAC · AWS',
    statusLabel: 'Active development',
    metaRight: 'AI tooling',
    description:
      'Secure middleware between AI models and tools using JWT, RBAC, and rate limiting; sandboxed execution, token management, and 8+ tools exposed via FastMCP Cloud.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    live: 'https://github.com/dushyantzz',
    technologyNames: ['Python', 'MongoDB', 'TypeScript', 'AWS'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View on GitHub',
    accomplishments: [
      'Designed *middleware* between LLMs and tools so every tool invocation passes through authentication (*JWT*), role checks (*RBAC*), and rate limits instead of trusting the model with raw infrastructure access.',
      'Runs tool handlers in a *sandboxed* execution model with structured token lifecycle management—revocation, rotation hooks, and audit-friendly boundaries suited for multi-tenant or regulated workloads.',
      'Shipped a catalog of *8+* operational tools behind FastMCP Cloud patterns so agents can call APIs, databases, and utilities without exposing long-lived secrets or unconstrained network egress.',
    ],
  },
  {
    id: 'daredevil-surveillance',
    title: 'Daredevil — AI Surveillance System',
    repositoryLabel: 'Applied ML · multimodal alerts',
    tagline: 'Next.js · Three.js · Python · MongoDB · Pinecone',
    statusLabel: 'Active development',
    metaRight: 'Computer vision · LLMOps',
    description:
      'AI surveillance pipeline for suspicious-activity detection with a GNN on behavioral data, Applied ML, Gen AI and LLMOps with Pinecone, and alerts via WhatsApp, email, and phone.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    live: 'https://github.com/dushyantzz',
    technologyNames: ['Next.js', 'React', 'Three.js', 'Python', 'MongoDB'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View on GitHub',
    accomplishments: [
      'Built an end-to-end pipeline that ingests camera and sensor-derived signals, applies *graph-style modeling (GNN)* on behavioral relationships, and surfaces anomalies ranked by severity instead of naive threshold alarms.',
      'Integrated *vector search (Pinecone)* with Gen-AI summarization so investigators get short, grounded narratives tied to similar past incidents rather than raw clip dumps.',
      'Delivered *multi-channel alerting* (WhatsApp, email, phone) with escalation policies so on-call teams see concise context within seconds of a confirmed trigger.',
    ],
  },
  {
    id: 'brand-guardian',
    title: 'Compliance QA Pipeline (Brand Guardian)',
    repositoryLabel: 'LLMOps · media compliance',
    tagline: 'Python · TypeScript · Next.js · Azure AI Search',
    statusLabel: 'Active development',
    metaRight: 'LangGraph · FastAPI',
    description:
      'LLMOps pipeline to audit YouTube content via speech, OCR, and metadata; Applied ML, Gen AI and LLMOps with Azure AI Search for grounded compliance checks; orchestrated with LangGraph and FastAPI.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    live: 'https://github.com/dushyantzz',
    technologyNames: ['Python', 'TypeScript', 'Next.js', 'Azure'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View on GitHub',
    accomplishments: [
      'Orchestrated ingestion of *speech transcripts*, on-screen *OCR*, and creator metadata so each video becomes a structured bundle LangGraph stages can reason over with deterministic fallbacks.',
      'Grounded compliance reasoning with *Azure AI Search* and curated policy snippets—reducing “creative hallucination” when judging claims, disclaimers, or risky visuals.',
      'Exposed reviewer dashboards via *FastAPI + Next.js* so legal and marketing teams can replay decisions, override labels, and export audit trails for regulators.',
    ],
  },
  {
    id: 'salesforce-pro',
    title: 'salesforce-pro',
    repositoryLabel: 'dushyantzz/salesforce-pro',
    tagline: 'TypeScript · Node.js · Salesforce DX · Metadata API · CLI',
    statusLabel: 'Recently shipped',
    metaRight: 'Salesforce automation',
    description:
      'Developer-focused toolkit for Salesforce DX workflows—safer metadata retrieve/deploy cycles, org-aware scripting, and CI hooks so Apex, LWC, and configuration changes ship with fewer surprises.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz/salesforce-pro',
    live: 'https://github.com/dushyantzz/salesforce-pro',
    technologyNames: ['TypeScript', 'Node.js'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View repository',
    accomplishments: [
      'Automates the boring parts of *Salesforce DX*: scripted retrieve/deploy flows, repeatable org aliases, and guardrails before promoting bundles—so sandboxes, scratch orgs, and downstream CI jobs stay consistent.',
      'Adds *metadata-aware checks* (diff-friendly summaries, destructive-change hints, and selective deploy targets) aimed at teams juggling Apex, Lightning Web Components, flows, and packaged dependencies.',
      'Designed for *pipelines*: exit codes and structured logs plug into GitHub Actions or internal runners, turning “works on my machine” org tweaks into reviewable, reproducible steps.',
    ],
  },
];
