import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

import { experiencesBase } from './experience-base';

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

const techIconByName: Record<string, React.ReactNode> = {
  Python: <Python />,
  TypeScript: <TypeScript />,
  React: <ReactIcon />,
  'Next.js': <NextJs />,
  MongoDB: <MongoDB />,
  PostgreSQL: <PostgreSQL />,
  AWS: <AWS />,
};

export const experiences: Experience[] = experiencesBase.map((e) => ({
  isCurrent: e.isCurrent,
  company: e.company,
  position: e.position,
  location: e.location,
  image: e.image,
  description: e.description,
  startDate: e.startDate,
  endDate: e.endDate,
  website: e.website,
  x: e.x,
  linkedin: e.linkedin,
  github: e.github,
  isBlur: e.isBlur,
  technologies: e.technologies.map((t) => ({
    name: t.name,
    href: t.href,
    icon: techIconByName[t.name] ?? null,
  })),
}));
