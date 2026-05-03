import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';
import React from 'react';

import { projectsBase } from './projects-base';

const projectTechIcons: Record<string, React.ReactElement> = {
  Python: <Python key="python" />,
  MongoDB: <MongoDB key="mongodb" />,
  TypeScript: <TypeScript key="typescript" />,
  AWS: <AWS key="aws" />,
  'Next.js': <NextJs key="nextjs" />,
  React: <ReactIcon key="react" />,
  'Three.js': <ThreeJs key="threejs" />,
  Azure: <AWS key="azure" />,
  'Node.js': <NodeJs key="nodejs" />,
};

export const projects: Project[] = projectsBase.map((p) => ({
  title: p.title,
  description: p.description,
  image: p.image,
  link: p.link,
  live: p.live,
  details: p.details,
  projectDetailsPageSlug: p.projectDetailsPageSlug,
  isWorking: p.isWorking,
  technologies: p.technologyNames.map((name) => ({
    name,
    icon: projectTechIcons[name] ?? <React.Fragment key={name} />,
  })),
}));
