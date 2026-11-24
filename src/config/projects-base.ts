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
    id: 'runwall',
    title: 'Runwall',
    repositoryLabel: 'Zero-trust · AI agent governance',
    tagline: 'Python · TypeScript · OPA/Rego · MCP · FastAPI',
    statusLabel: 'Active development',
    metaRight: 'AI infrastructure · Security',
    description:
      'Zero-trust proxy between LLM agents and MCP tool servers, enforcing policy on every tool call via OPA/Rego, taint tracking, and LLM-based semantic risk scoring with human-in-the-loop approvals.',
    image: '/assets/logo.png',
    link: 'https://runwall.in',
    live: 'https://runwall.in',
    technologyNames: ['Python', 'TypeScript'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View site',
    demoUrl: 'https://github.com/dushyantzz/Runwall',
    demoLinkLabel: 'View repository',
    accomplishments: [
      'Built a *zero-trust proxy* that sits between LLM agents and MCP tool servers, enforcing *policy on every tool call* instead of trusting the model with direct access — no code changes required to the agent or the tools it calls.',
      'Implemented an *OPA/Rego policy engine* combined with *taint tracking* and *LLM-based semantic risk scoring*, so requests are evaluated for intent and data flow, not just static permissions — with *human-in-the-loop approval workflows* for high-risk actions.',
      "Hardened through *four rounds of adversarial security audits*, improving the platform's security posture from 2.1/10 to 9.1/10. Selected for the *Claude for Startups program*, the *Zendesk Startup Program*, and the *Sarvam AI Startup Program*. Live at runwall.in.",
    ],
  },
  {
    id: 'ghosthand',
    title: 'Ghosthand',
    repositoryLabel: 'AI PC-control agent',
    tagline:
      'C# · .NET 8 · WPF · Windows UI Automation · Jev via Vercel AI Gateway',
    statusLabel: 'Open source · 55 stars · 14 forks',
    metaRight: 'Agents · Desktop automation',
    description:
      'Windows-native AI desktop assistant that reads the UI Automation tree of the focused app, picks the optimal action with the Jev decision model via Vercel AI Gateway, and pauses for human confirmation before irreversible steps.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz/Ghosthand',
    live: 'https://github.com/dushyantzz/Ghosthand',
    technologyNames: ['C#', '.NET', 'WPF'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View repository',
    accomplishments: [
      'Built a *desktop AI assistant for Windows* controlled by voice or text: a *global shortcut* opens a popup, you say what you want, and it operates the PC (e.g. open LinkedIn, search AI jobs, click Apply).',
      'Powered by the *Jev decision model* via *Vercel AI Gateway*, so the agent decides what to do next from live screen state instead of hardcoded scripts.',
      'Kept the human in control: the agent runs steps autonomously but *pauses for confirmation before irreversible actions* like submitting or applying.',
      'Grew to *55 stars and 14 forks*, and a contributor ported it to *macOS in Swift using Laya* to run fully local.',
    ],
  },
  {
    id: 'ultranlp',
    title: 'UltraNLP',
    repositoryLabel: 'NLP library · preprocessing',
    tagline: 'Python · tokenization · spell correction · parallel processing',
    statusLabel: 'Recently shipped',
    metaRight: 'Open source · PyPI',
    description:
      'Ultra-fast NLP preprocessing library combining tokenization, spell correction, and parallel text cleaning into one package — replaces the usual NLTK + spaCy + BeautifulSoup + TextBlob stack with a single import.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz/UltraNLP',
    live: 'https://github.com/dushyantzz/UltraNLP',
    technologyNames: ['Python'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View repository',
    demoUrl: 'https://pypi.org/project/ultranlp/',
    demoLinkLabel: 'View on PyPI',
    accomplishments: [
      'An *ultra-fast NLP preprocessing* library that combines tokenization, spell correction, and parallel text cleaning into one package — replacing the usual NLTK + spaCy + BeautifulSoup + TextBlob stack with a single import.',
      '*Tokenization* recognizes complex patterns as single tokens (currency like `$20` or `₹100`, emails, hashtags, mentions, phone numbers, URLs, dates, emojis, contractions, hyphenated words), and *LightningSpellCorrector* handles noisy input alongside configurable HTML/URL/emoji removal.',
      'Ships with *parallel batch processing* via `batch_preprocess` — the README reports ~3 minutes for 1M documents versus 45 minutes for NLTK, on 0.8 GB of memory. Published on PyPI and MIT-licensed.',
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
    link: 'https://github.com/dushyantzz/ComplianceQAPipeline',
    live: 'https://github.com/dushyantzz/ComplianceQAPipeline',
    technologyNames: ['Python', 'TypeScript', 'Next.js', 'Azure'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View repository',
    accomplishments: [
      'Orchestrated ingestion of *speech transcripts*, on-screen *OCR*, and creator metadata so each video becomes a structured bundle LangGraph stages can reason over with deterministic fallbacks.',
      'Grounded compliance reasoning with *Azure AI Search* and curated policy snippets—reducing “creative hallucination” when judging claims, disclaimers, or risky visuals.',
      'Exposed reviewer dashboards via *FastAPI + Next.js* so legal and marketing teams can replay decisions, override labels, and export audit trails for regulators.',
    ],
  },
  {
    id: 'mlops-capstone',
    title: 'Atlas — MLOps Capstone Project',
    repositoryLabel: 'MLOps · end-to-end pipeline',
    tagline: 'Python · DVC · MLflow · Docker · Kubernetes · AWS EKS',
    statusLabel: 'Recently shipped',
    metaRight: 'Text sentiment · production deployment',
    description:
      'End-to-end MLOps pipeline for text sentiment analysis covering data versioning, training, model registry, containerization, CI/CD, deployment, and monitoring on AWS.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz/MLOps-Capstone-Project',
    live: 'https://github.com/dushyantzz/MLOps-Capstone-Project',
    technologyNames: ['Python'],
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
    primaryLinkLabel: 'View repository',
    accomplishments: [
      'Versioned data and pipeline artifacts with *DVC* and tracked experiments in *MLflow* (with a staging/production *model registry* on DagsHub) so every training run is reproducible and rollbacks are a registry transition, not a code change.',
      'Packaged the trained model in a *Docker* image, pushed to *AWS ECR*, and deployed to *Amazon EKS* (provisioned with *eksctl* and *CloudFormation*) — exposing it through a *Flask* service behind Kubernetes *Deployment* and *Service* manifests.',
      'Wired *GitHub Actions* for CI/CD on every push and stood up *Prometheus + Grafana* on dedicated *AWS EC2* nodes to scrape the cluster — so latency, error rate, and request volume are visible the moment a new revision rolls out.',
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
];
