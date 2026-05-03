'use client';

import CopyIcon from '@/components/svgs/Copy';
import { about } from '@/config/About';
import { heroConfig, socialLinks } from '@/config/Hero';
import { siteConfig } from '@/config/Meta';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { Music } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

import Container from '../common/Container';

export default function Hero() {
  const {
    name,
    displayName,
    title,
    avatar,
    subtitleMiddle,
    spotify,
  } = heroConfig;

  const headline = displayName ?? name;
  const roleLabel = title.replace(/\.\s*$/, '').trim();
  const email = siteConfig.author.email;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied');
    } catch {
      toast.error('Could not copy email');
    }
  }

  return (
    <Container className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-7 md:gap-8">
        {/* Header row only: avatar + identity — matches ramx-style reference */}
        <div className="flex items-start gap-6 md:gap-10 lg:gap-12">
          <Image
            src={avatar}
            alt={headline}
            width={128}
            height={128}
            priority
            className="size-28 shrink-0 rounded-full bg-amber-300 ring-2 ring-black/10 md:size-32 dark:bg-amber-400 dark:ring-white/10"
          />
          <header className="min-w-0 flex-1 space-y-3 pt-0.5">
            <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">
              {headline}
            </h1>
            <p className="text-secondary flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base">
              <span>{roleLabel}</span>
              <span className="text-muted-foreground/80" aria-hidden>
                ·
              </span>
              <span className="text-secondary">{subtitleMiddle}</span>
              <span className="text-muted-foreground/80" aria-hidden>
                ·
              </span>
              <a
                href={`mailto:${email}`}
                className="text-secondary hover:text-primary decoration-muted-foreground/40 hover:decoration-primary underline-offset-4 transition-colors hover:underline"
              >
                {email}
              </a>
              <button
                type="button"
                onClick={() => void copyEmail()}
                className="text-muted-foreground hover:text-foreground inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Copy email address"
              >
                <CopyIcon className="size-4 opacity-80" />
              </button>
            </p>
          </header>
        </div>

        {/* Intro + meta below the avatar row — no dead space under the picture */}
        <div className="flex flex-col gap-6 md:gap-7">
          <p className="text-secondary max-w-2xl text-base leading-relaxed md:text-lg">
            {about.description}
          </p>

          {spotify.enabled && spotify.line ? (
            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
              <Music
                className="size-5 shrink-0 text-[#1DB954]"
                aria-hidden
              />
              {spotify.href ? (
                <a
                  href={spotify.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  {spotify.line}
                </a>
              ) : (
                <span className="text-secondary">{spotify.line}</span>
              )}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={
                  link.href.startsWith('mailto:') ? undefined : '_blank'
                }
                rel={
                  link.href.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
                className={cn(
                  'text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-lg transition-colors',
                  'hover:bg-black/5 dark:hover:bg-white/10',
                )}
                aria-label={link.name}
              >
                <span className="size-6 opacity-90">{link.icon}</span>
              </Link>
            ))}
          </div>

          <nav className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <Link
              href="/resume"
              className="hover:text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline-offset-4 transition-colors hover:underline"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline-offset-4 transition-colors hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  );
}
