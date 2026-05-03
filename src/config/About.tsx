import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

export { about } from './about-data';

export const mySkills = [
  <Python key="python" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <AWS key="aws" />,
];
