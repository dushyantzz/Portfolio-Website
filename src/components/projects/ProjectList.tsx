import Github from '@/components/svgs/Github';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { ProjectBase } from '@/config/projects-base';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface ProjectListProps {
  items: ProjectBase[];
  className?: string;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ProjectList({ items, className }: ProjectListProps) {
  if (items.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-12 ${className ?? ''}`}>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <article className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-foreground text-xl font-bold tracking-tight md:text-2xl">
                    {item.title}
                  </h2>
                  <span className="text-muted-foreground text-sm">
                    {item.repositoryLabel}
                  </span>
                </div>
                <p className="text-secondary text-sm md:text-base">{item.tagline}</p>
              </div>
              <div className="text-secondary shrink-0 space-y-0.5 md:text-right">
                <p className="text-sm">{item.statusLabel}</p>
                {item.metaRight ? (
                  <p className="text-muted-foreground text-sm">{item.metaRight}</p>
                ) : null}
              </div>
            </div>

            <div>
              <h3 className="text-foreground mb-3 text-base font-semibold tracking-tight">
                What it does
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

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Github className="size-4 opacity-80" />
                  {item.primaryLinkLabel}
                  <ArrowUpRight className="size-3.5 opacity-70" />
                </a>
              </Button>
              {item.demoUrl &&
              item.demoUrl !== item.link &&
              item.demoLinkLabel ? (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.demoLinkLabel}
                    <ArrowUpRight className="size-3.5 opacity-70" />
                  </a>
                </Button>
              ) : null}
            </div>
          </article>

          {index < items.length - 1 ? (
            <Separator className="bg-border/80" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
