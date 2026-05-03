import Container from '@/components/common/Container';
import { OpenSourceList } from '@/components/open-source/OpenSourceList';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { openSourceContributions } from '@/config/OpenSource';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/open-source'),
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

export default function OpenSourcePage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl space-y-10 md:max-w-4xl">
        <header className="space-y-3">
          <h1 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
            Open source
          </h1>
          <p className="text-secondary max-w-2xl text-lg leading-relaxed">
            Merged contributions with write-ups for context—security hardening,
            test reliability, and billing correctness in tools I use in
            production.
          </p>
        </header>

        <Separator />

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">
            {openSourceContributions.length}{' '}
            {openSourceContributions.length === 1 ? 'contribution' : 'contributions'}
          </p>
          <OpenSourceList items={openSourceContributions} />
        </div>
      </div>
    </Container>
  );
}
