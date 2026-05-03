'use client';

import { navbarConfig } from '@/config/Navbar';
import { useCommandPalette } from '@/components/common/command-palette';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

/** Inline flex fallback so the bar stays readable before Tailwind CSS finishes loading (FOUC). */
const navRowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '1rem',
  rowGap: '0.75rem',
  width: '100%',
};

const navClusterStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  columnGap: '1rem',
  rowGap: '0.5rem',
  minWidth: 0,
};

const navLinksStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '0.35rem 1rem',
};

const actionsStyle: React.CSSProperties = {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  columnGap: '0.5rem',
};

export default function Navbar() {
  const { openPalette } = useCommandPalette();
  const [modKey, setModKey] = useState('Ctrl');

  useEffect(() => {
    const isMac =
      typeof navigator !== 'undefined' &&
      /Mac|iPhone|iPad|iPod/i.test(navigator.platform ?? navigator.userAgent);
    setModKey(isMac ? '⌘' : 'Ctrl');
  }, []);

  return (
    <header
      role="banner"
      className="bg-background/80 sticky top-0 z-50 border-b border-transparent py-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
    >
      <Container className="max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3" style={navRowStyle}>
          <div
            className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2"
            style={navClusterStyle}
          >
            <Link href="/" className="inline-block shrink-0">
              <Image
                className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:border-zinc-700 dark:bg-yellow-300"
                src={navbarConfig.logo.src}
                alt={navbarConfig.logo.alt}
                width={navbarConfig.logo.width}
                height={navbarConfig.logo.height}
              />
            </Link>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1" style={navLinksStyle} aria-label="Main">
              {navbarConfig.navItems.map((item) => (
                <Link
                  className={cn(
                    'text-foreground/90 inline-block whitespace-nowrap transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4',
                  )}
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="flex shrink-0 items-center gap-2 sm:gap-3"
            style={actionsStyle}
          >
            <button
              type="button"
              onClick={() => openPalette()}
              className={cn(
                'border-border bg-muted/40 text-muted-foreground hover:bg-muted/70 inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm transition-colors',
                'dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-800',
              )}
              aria-label="Open command palette"
            >
              <Search className="size-4 shrink-0 opacity-80" />
              <kbd className="text-muted-foreground pointer-events-none hidden select-none items-center gap-0.5 rounded border border-zinc-600 bg-zinc-950 px-1.5 py-0.5 font-mono text-[11px] font-medium text-zinc-400 sm:inline-flex dark:border-zinc-600 dark:bg-black">
                <span className="text-xs">{modKey}</span>K
              </kbd>
            </button>
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </div>
      </Container>
    </header>
  );
}
