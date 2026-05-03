export interface OpenSourceContribution {
  id: string;
  /** Bold primary label, e.g. repository or product name */
  project: string;
  /** Shown under title, e.g. org/repo */
  repositoryLabel: string;
  /** Subtitle under project name */
  role: string;
  /** Right column — primary date line */
  mergedLabel: string;
  /** Right column — secondary line (optional) */
  metaRight?: string;
  /** Pull request URL */
  prUrl: string;
  /** Button / link text */
  prLinkLabel: string;
  accomplishments: string[];
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 'superagent-ssrf',
    project: 'Superagent',
    repositoryLabel: 'superagent-ai/superagent',
    role: 'Contributor · Security · PDF URL validation',
    mergedLabel: 'Merged Jan 13, 2026',
    metaRight: 'Pull request #1098',
    prUrl: 'https://github.com/superagent-ai/superagent/pull/1098',
    prLinkLabel: 'View PR #1098',
    accomplishments: [
      'Implemented URL safety checks in both Python and TypeScript SDKs so PDF download flows validate untrusted links *before* any network request—blocking RFC1918 and loopback targets, localhost, disallowed schemes such as file://, and enforcing http(s) with a sensible length limit.',
      'Reduced SSRF risk from user-supplied URLs by pairing hostname parsing with DNS resolution on the TypeScript side (using robust IPv4/IPv6 private-range checks, including IPv4-mapped IPv6), treating lookup failures conservatively so bypass tricks like friendly domains resolving to internal IPs are harder to exploit.',
      'Kept behavior backward compatible for legitimate public URLs while surfacing clear validation errors for blocked or malformed inputs; iterated through maintainer review until the checks matched production expectations.',
    ],
  },
  {
    id: 'superagent-guardrails-tests',
    project: 'Superagent',
    repositoryLabel: 'superagent-ai/superagent',
    role: 'Contributor · Testing · Guardrails',
    mergedLabel: 'Merged Jan 10, 2026',
    metaRight: 'Pull request #1095',
    prUrl: 'https://github.com/superagent-ai/superagent/pull/1095',
    prLinkLabel: 'View PR #1095',
    accomplishments: [
      'Converted brittle guardrails tests from rigid pass/block assertions into *functional* checks that validate API responses—schemas, typed arrays for violations and CWE codes, token usage—so the suite stays meaningful when models disagree on wording.',
      'Updated *13* test files across CLI, MCP, and provider implementations (10 TypeScript, 3 Python) and refreshed Vitest/tsconfig wiring so contributors get proper IDE typing on tests.',
      'Renamed cases toward behavior-focused descriptions (e.g. expecting valid structure rather than a fixed label), closing the upstream request for maintainable, model-agnostic coverage.',
    ],
  },
  {
    id: 'litellm-audio-cost',
    project: 'LiteLLM',
    repositoryLabel: 'BerriAI/litellm',
    role: 'Contributor · Pricing · Audio / transcription',
    mergedLabel: 'Merged Jan 16, 2026',
    metaRight: 'Pull request #19158',
    prUrl: 'https://github.com/BerriAI/litellm/pull/19158',
    prLinkLabel: 'View PR #19158',
    accomplishments: [
      'Fixed Whisper / audio-style billing where *output_cost_per_second* overrides behaved incorrectly alongside *input_cost_per_second*—so per-second output pricing applies only when configured above zero while input seconds still bill even when output cost is zero.',
      'Shipped an isolated regression test under `tests/litellm/` and tightened documentation so operators understand how zero output rates interact with custom pricing—matching real-world transcription billing.',
    ],
  },
  {
    id: 'langfuse-batch-jsonpath',
    project: 'Langfuse',
    repositoryLabel: 'langfuse/langfuse',
    role: 'Contributor · Batch actions · JSONPath correctness',
    mergedLabel: 'Open pull request',
    metaRight: 'PR #11596 · fixes #11568',
    prUrl: 'https://github.com/langfuse/langfuse/pull/11596',
    prLinkLabel: 'View PR #11596',
    accomplishments: [
      'Corrected *batch-action* JSONPath handling so evaluations over slice or wildcard paths return *every* matching value instead of silently truncating to the first match—aligning runtime behavior with what operators expect from JSONPath semantics.',
      'Added regression tests that exercise slice- and wildcard-style paths so future changes cannot reintroduce single-match truncation without failing CI.',
      'Documented as a non-breaking bug fix toward issue *#11568*, keeping batch workflows reliable when extracting structured fields from traces or payloads at scale.',
    ],
  },
];
