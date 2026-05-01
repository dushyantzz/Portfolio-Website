import type { OpenSourceContribution } from '@/config/OpenSource';
import Github from '@/components/svgs/Github';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface OpenSourceListProps {
  items: OpenSourceContribution[];
}

export function OpenSourceList({ items }: OpenSourceListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.repositoryUrl} className="h-full">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-xl">{item.project}</CardTitle>
              {item.badge ? (
                <span className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 text-xs font-medium">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
              {item.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="border-border mt-auto border-t pt-6">
            <a
              href={item.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <Github className="size-4" />
              Repository
              <ArrowUpRight className="size-3.5 opacity-70" />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
