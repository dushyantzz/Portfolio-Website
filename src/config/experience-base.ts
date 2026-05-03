/** Plain experience rows — safe for ChatPrompt / API routes without JSX. */

export interface ExperienceBase {
  isCurrent: boolean;
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  technologies: { name: string; href: string }[];
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  isBlur?: boolean;
}

export const experiencesBase: ExperienceBase[] = [
  {
    isCurrent: false,
    company: 'Tellis Technologies Pvt Ltd',
    position: 'AI/ML Developer Intern',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      'Designed a retrieval-augmented system using Applied ML, Gen AI and LLMOps by integrating vector databases (e.g., FAISS) with LLMs for domain-specific question answering.',
      'Explored open-source LLMs (LLaMA / Mistral) and compared them with API-based models for cost-efficiency and scalability.',
      'Built and refined prompt-engineering pipelines to reduce hallucinations and improve contextual accuracy in AI outputs.',
    ],
    startDate: 'May 2025',
    endDate: 'August 2025',
    technologies: [
      { name: 'Python', href: 'https://www.python.org/' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      { name: 'React', href: 'https://react.dev/' },
      { name: 'Next.js', href: 'https://nextjs.org/' },
      { name: 'MongoDB', href: 'https://www.mongodb.com/' },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/' },
      { name: 'AWS', href: 'https://aws.amazon.com/' },
    ],
    website: '#',
    linkedin: 'https://www.linkedin.com/in/dushyantkv508/',
    github: 'https://github.com/dushyantzz',
  },
];
