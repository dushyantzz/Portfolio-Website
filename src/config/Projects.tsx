import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Secure MCP Server Framework',
    description:
      'Secure middleware between AI models and tools using JWT, RBAC, and rate limiting; sandboxed execution, token management, and 8+ tools exposed via FastMCP Cloud.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    live: 'https://github.com/dushyantzz',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'Daredevil — AI Surveillance System',
    description:
      'AI surveillance pipeline for suspicious-activity detection with a GNN on behavioral data, Applied ML, Gen AI and LLMOps with Pinecone, and alerts via WhatsApp, email, and phone.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    live: 'https://github.com/dushyantzz',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'Compliance QA Pipeline (Brand Guardian)',
    description:
      'LLMOps pipeline to audit YouTube content via speech, OCR, and metadata; Applied ML, Gen AI and LLMOps with Azure AI Search for grounded compliance checks; orchestrated with LangGraph and FastAPI.',
    image: '/assets/logo.png',
    link: 'https://github.com/dushyantzz',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Azure', icon: <AWS key="aws" /> },
    ],
    live: 'https://github.com/dushyantzz',
    details: false,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
];
