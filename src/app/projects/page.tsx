import Container from '@/components/common/Container';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projectsBase } from '@/config/projects-base';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl space-y-10 md:max-w-4xl">
        <header className="space-y-3">
          <h1 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-secondary max-w-2xl text-lg leading-relaxed">
            Builds across AI systems, compliance tooling, and Salesforce DX—with
            the same narrative style as my open-source write-ups.
          </p>
        </header>

        <Separator />

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">
            {projectsBase.length}{' '}
            {projectsBase.length === 1 ? 'project' : 'projects'}
          </p>
          <ProjectsSection />
        </div>
      </div>
    </Container>
  );
}
