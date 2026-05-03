/** Serializable hero config — safe for API routes (no JSX). */

export const heroConfig = {
  name: 'Dushyant',
  displayName: 'Dushyant',
  title: 'An AI/ML developer.',
  avatar: '/assets/logo.png',
  subtitleMiddle: 'B.Tech IT · JSSATE Noida',
  spotify: {
    enabled: false as boolean,
    line: '',
    href: '' as string,
  },
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
  ],
  buttons: [
    {
      variant: 'outline' as const,
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default' as const,
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinksMeta = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dushyantkv508/',
  },
  {
    name: 'Github',
    href: 'https://github.com/dushyantzz',
  },
  {
    name: 'Email',
    href: 'mailto:dushyantkv508@gmail.com',
  },
] as const;
