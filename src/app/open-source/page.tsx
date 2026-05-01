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
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Open Source
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Contributions to libraries and tools I rely on — security fixes,
            testing, and correctness.
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Contributions
            <span className="text-muted-foreground ml-2 text-sm font-normal">
              ({openSourceContributions.length}{' '}
              {openSourceContributions.length === 1 ? 'entry' : 'entries'})
            </span>
          </h2>
          <OpenSourceList items={openSourceContributions} />
        </div>
      </div>
    </Container>
  );
}
