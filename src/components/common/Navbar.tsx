'use client';

import { navbarConfig } from '@/config/Navbar';
import { useCommandPalette } from '@/components/common/command-palette';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

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
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:border-zinc-700 dark:bg-yellow-300"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="text-foreground/90 transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
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
  );
}
