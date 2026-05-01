import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Tellis Technologies Pvt Ltd',
    position: 'AI/ML Developer Intern',
    location: 'Remote',
    image: '/assets/logo.png',
    description: [
      'Designed a Retrieval-Augmented Generation (RAG) system by integrating vector databases (e.g., FAISS) with LLMs for domain-specific question answering.',
      'Explored open-source LLMs (LLaMA / Mistral) and compared them with API-based models for cost-efficiency and scalability.',
      'Built and refined prompt-engineering pipelines to reduce hallucinations and improve contextual accuracy in AI outputs.',
    ],
    startDate: 'May 2025',
    endDate: 'August 2025',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
    ],
    website: '#',
    linkedin: 'https://www.linkedin.com/in/dushyantkv508/',
    github: 'https://github.com/dushyantzz',
  },
];
