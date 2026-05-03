/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info in `hero-data.ts`:
 *    name, title, avatar, subtitleMiddle, spotify, skills, buttons
 *
 * 2. Add social links in `hero-data.ts` → `socialLinksMeta`
 *
 * 3. Icons for skills are mapped below in `skillComponents`.
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

import { heroConfig, socialLinksMeta } from './hero-data';

export { heroConfig };

export const skillComponents = {
  Python,
  ReactIcon,
  NextJs,
  MongoDB,
  TypeScript,
};

const socialIconByName: Record<(typeof socialLinksMeta)[number]['name'], React.ReactNode> =
  {
    LinkedIn: <LinkedIn />,
    Github: <Github />,
    Email: <Mail />,
  };

export const socialLinks = socialLinksMeta.map((link) => ({
  name: link.name,
  href: link.href,
  icon: socialIconByName[link.name],
}));
