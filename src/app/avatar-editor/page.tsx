'use client';

import Container from '@/components/common/Container';
import { heroConfig } from '@/config/Hero';
import { ctaConfig } from '@/config/CTA';
import Image from 'next/image';
import { useMemo, useState } from 'react';

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function AvatarEditorPage() {
  const [x, setX] = useState(50);
  const [y, setY] = useState(35);

  const objectPosition = useMemo(() => `${x}% ${y}%`, [x, y]);

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Avatar Editor</h1>
          <p className="text-muted-foreground">
            Adjust the crop by changing <code>x%</code> and <code>y%</code>. Then
            copy the value into:
            <code className="ml-2">src/config/hero-data.ts</code> and{' '}
            <code>src/config/CTA.tsx</code>.
          </p>
        </header>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-black/10 dark:ring-white/10">
            <Image
              src={heroConfig.avatar}
              alt="Avatar preview"
              fill
              sizes="160px"
              className="object-cover"
              style={{ objectPosition }}
              priority
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Horizontal (x)</span>
                <span className="text-muted-foreground text-sm">{x}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={x}
                onChange={(e) => setX(clamp(Number(e.target.value), 0, 100))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Vertical (y)</span>
                <span className="text-muted-foreground text-sm">{y}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={y}
                onChange={(e) => setY(clamp(Number(e.target.value), 0, 100))}
                className="w-full"
              />
            </div>

            <div className="rounded-md border border-black/10 bg-black/5 p-3 text-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-muted-foreground text-xs">
                Use this value:
              </div>
              <div className="mt-1 font-mono font-semibold">
                {objectPosition}
              </div>
            </div>

            <div className="text-muted-foreground text-xs">
              Current config values:{' '}
              <code>{heroConfig.avatarObjectPosition}</code> (Hero) and{' '}
              <code>{ctaConfig.profileObjectPosition}</code> (CTA)
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

