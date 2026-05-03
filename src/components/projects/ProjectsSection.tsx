'use client';

import { projects } from '@/config/Projects';

import { ProjectList } from './ProjectList';

/** Loads project config on the client so icon React nodes are never passed from RSC → client props. */
export function ProjectsSection({ className }: { className?: string }) {
  return <ProjectList projects={projects} className={className} />;
}
