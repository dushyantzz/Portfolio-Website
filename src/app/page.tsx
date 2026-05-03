import Container from '@/components/common/Container';
import OpenSource from '@/components/landing/OpenSource';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Github />
      <OpenSource />
      <CTA />
      <Setup />
      <Journey />
    </Container>
  );
}
