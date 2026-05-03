import Github from '@/components/svgs/Github';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { OpenSourceContribution } from '@/config/OpenSource';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface OpenSourceListProps {
  items: OpenSourceContribution[];
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function OpenSourceList({ items }: OpenSourceListProps) {
  return (
    <div className="flex flex-col gap-12">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <article className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-foreground text-xl font-bold tracking-tight md:text-2xl">
                    {item.project}
                  </h2>
                  <span className="text-muted-foreground text-sm">
                    {item.repositoryLabel}
                  </span>
                </div>
                <p className="text-secondary text-sm md:text-base">{item.role}</p>
              </div>
              <div className="text-secondary shrink-0 space-y-0.5 md:text-right">
                <p className="text-sm">{item.mergedLabel}</p>
                {item.metaRight ? (
                  <p className="text-muted-foreground text-sm">{item.metaRight}</p>
                ) : null}
              </div>
            </div>

            <div>
              <h3 className="text-foreground mb-3 text-base font-semibold tracking-tight">
                What I&apos;ve done
              </h3>
              <div className="text-secondary flex flex-col gap-2.5 text-[15px] leading-relaxed">
                {item.accomplishments.map((line, i) => (
                  <p
                    key={`${item.id}-acc-${i}`}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:bg-current before:opacity-50 before:content-['']"
                    dangerouslySetInnerHTML={{
                      __html: parseDescription(line),
                    }}
                  />
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-fit gap-2" asChild>
              <a
                href={item.prUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4 opacity-80" />
                {item.prLinkLabel}
                <ArrowUpRight className="size-3.5 opacity-70" />
              </a>
            </Button>
          </article>

          {index < items.length - 1 ? (
            <Separator className="bg-border/80" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
