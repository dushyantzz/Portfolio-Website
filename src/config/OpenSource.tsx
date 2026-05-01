export interface OpenSourceContribution {
  project: string;
  /** Short tagline, e.g. “YC-backed”. */
  badge?: string;
  description: string;
  highlights: string[];
  repositoryUrl: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'Superagent',
    badge: 'YC-backed',
    description:
      'Security and reliability improvements to the agent framework — SSRF-safe PDF handling and clearer guardrails testing.',
    highlights: [
      'URL validation for PDF downloads to reduce SSRF risk.',
      'Guardrails tests refactored toward functional coverage.',
    ],
    repositoryUrl: 'https://github.com/homanp/superagent',
  },
  {
    project: 'LiteLLM',
    badge: 'YC-backed',
    description:
      'Pricing accuracy fix for multimodal usage — audio billing respected configured overrides.',
    highlights: [
      'Resolved audio cost-per-second override behavior for consistent billing.',
    ],
    repositoryUrl: 'https://github.com/BerriAI/litellm',
  },
];
