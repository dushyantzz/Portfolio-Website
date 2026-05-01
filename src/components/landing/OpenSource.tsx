import { OpenSourceList } from '@/components/open-source/OpenSourceList';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { openSourceContributions } from '@/config/OpenSource';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function OpenSource() {
  const featured = openSourceContributions.slice(0, 2);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Open Source" />
      <div className="mt-8">
        <OpenSourceList items={featured} />
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/open-source">All open source work</Link>
        </Button>
      </div>
    </Container>
  );
}
