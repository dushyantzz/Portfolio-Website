import { projectsBase } from '@/config/projects-base';

import { ProjectList } from './ProjectList';

export function ProjectsSection({ className }: { className?: string }) {
  return <ProjectList items={projectsBase} className={className} />;
}
