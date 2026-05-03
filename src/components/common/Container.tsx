import { cn } from '@/lib/utils';
import React from 'react';

export default function Container({
  children,
  className,
  fadeIn,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  /** Optional entrance animation (off by default to avoid FOUC / invisible first paint). */
  fadeIn?: boolean;
}) {
  return (
    <div
      className={cn(
        'container mx-auto max-w-3xl px-4',
        fadeIn && 'animate-fade-in-blur',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
