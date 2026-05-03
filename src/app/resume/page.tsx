import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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

export default function ResumePage() {
  return (
    <Container className="py-8 sm:py-12">
      <div className="space-y-6">
        <div className="space-y-3 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Full-page preview of my résumé. Use the button below if the embed
            does not load in your browser.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button asChild variant="default" size="default">
              <Link
                href={resumeConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                <ExternalLink className="mr-2 size-4" aria-hidden />
                Open PDF in new tab
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href={resumeConfig.url} download prefetch={false}>
                Download PDF
              </Link>
            </Button>
          </div>
        </div>
        <Separator />
        <div className="mx-auto w-full max-w-6xl">
          <iframe
            title="Résumé PDF"
            src={`${resumeConfig.url}#view=FitH`}
            className="border-border bg-muted/20 h-[min(88vh,920px)] min-h-[560px] w-full rounded-xl border shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
}
