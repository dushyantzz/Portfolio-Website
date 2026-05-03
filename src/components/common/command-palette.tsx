'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { siteConfig } from '@/config/Meta';
import { cn } from '@/lib/utils';
import {
  Briefcase,
  Boxes,
  Compass,
  FolderGit2,
  Github,
  Home,
  Laptop,
  Mail,
  Share2,
  FileUser,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { toast } from 'sonner';

type CommandPaletteContextValue = {
  openPalette: () => void;
  closePalette: () => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null,
);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error('useCommandPalette must be used within CommandPaletteProvider');
  }
  return ctx;
}

function CommandPaletteDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  const run = useCallback(
    (fn: () => void) => {
      onOpenChange(false);
      fn();
    },
    [onOpenChange],
  );

  const githubUrl = `https://github.com/${siteConfig.author.github}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          'gap-0 overflow-hidden border-zinc-700 bg-zinc-950 p-0 text-zinc-100 shadow-2xl sm:max-w-[560px]',
          'dark:border-zinc-700 dark:bg-zinc-950',
        )}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Command palette</DialogTitle>
          <DialogDescription>
            Search navigation and quick actions
          </DialogDescription>
        </DialogHeader>
        <Command
          className={cn(
            'rounded-none border-0 bg-transparent',
            '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-zinc-500',
            '[&_[cmdk-input-wrapper]]:border-b [&_[cmdk-input-wrapper]]:border-zinc-800',
            '[&_[cmdk-item]]:rounded-lg [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:aria-selected:bg-zinc-800/90 [&_[cmdk-item]]:data-[selected=true]:bg-zinc-800/90',
          )}
          loop
        >
          <CommandInput
            placeholder="Type a command or search..."
            className="h-12 border-0 text-zinc-100 placeholder:text-zinc-500"
          />
          <CommandList className="max-h-[min(60vh,440px)] px-1 py-2">
            <CommandEmpty className="py-8 text-zinc-500">
              No results found.
            </CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem
                value="home Go to Home homepage"
                keywords={['home', 'h']}
                onSelect={() => run(() => router.push('/'))}
                className="cursor-pointer gap-3"
              >
                <Home className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Home</span>
                  <span className="text-xs text-zinc-500">
                    Navigate to the homepage
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  H
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="work experience"
                keywords={['work', 'w', 'jobs']}
                onSelect={() => run(() => router.push('/work-experience'))}
                className="cursor-pointer gap-3"
              >
                <Briefcase className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Work</span>
                  <span className="text-xs text-zinc-500">
                    View work experience
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  W
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="open source contributions oss"
                keywords={['open', 'source', 'o', 'github pr']}
                onSelect={() => run(() => router.push('/open-source'))}
                className="cursor-pointer gap-3"
              >
                <FolderGit2 className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">
                    Go to Open Source
                  </span>
                  <span className="text-xs text-zinc-500">
                    Contributions and pull requests
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  O
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="projects portfolio"
                keywords={['projects', 'p']}
                onSelect={() => run(() => router.push('/projects'))}
                className="cursor-pointer gap-3"
              >
                <Boxes className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Projects</span>
                  <span className="text-xs text-zinc-500">
                    Browse featured projects
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  P
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="journey blog timeline"
                keywords={['journey', 'j', 'timeline']}
                onSelect={() => run(() => router.push('/journey'))}
                className="cursor-pointer gap-3"
              >
                <BookOpen className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Journey</span>
                  <span className="text-xs text-zinc-500">
                    Timeline, certs, milestones
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  J
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="resume cv"
                keywords={['resume', 'r', 'cv']}
                onSelect={() => run(() => router.push('/resume'))}
                className="cursor-pointer gap-3"
              >
                <FileUser className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Resume</span>
                  <span className="text-xs text-zinc-500">
                    View and download resume
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  R
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="gears hardware setup tools"
                keywords={['gears', 'g', 'hardware']}
                onSelect={() => run(() => router.push('/gears'))}
                className="cursor-pointer gap-3"
              >
                <Laptop className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Gears</span>
                  <span className="text-xs text-zinc-500">
                    Devices and tools I use
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  G
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="setup vscode cursor editor"
                keywords={['setup', 's', 'vscode', 'cursor']}
                onSelect={() => run(() => router.push('/setup'))}
                className="cursor-pointer gap-3"
              >
                <Compass className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Setup</span>
                  <span className="text-xs text-zinc-500">
                    Editor configuration guide
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  S
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="contact email message"
                keywords={['contact', 'c', 'hire']}
                onSelect={() => run(() => router.push('/contact'))}
                className="cursor-pointer gap-3"
              >
                <MessageCircle className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Go to Contact</span>
                  <span className="text-xs text-zinc-500">
                    Send a message
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  C
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandGroup heading="Actions" className="mt-1">
              <CommandItem
                value="copy email mail"
                keywords={['email', 'copy', 'e']}
                onSelect={() =>
                  run(() => {
                    void navigator.clipboard.writeText(siteConfig.author.email);
                    toast.success('Email copied to clipboard');
                  })
                }
                className="cursor-pointer gap-3"
              >
                <Mail className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Copy Email</span>
                  <span className="text-xs text-zinc-500">
                    Copy email address to clipboard
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  ⇧E
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="share page link url"
                keywords={['share', 'link']}
                onSelect={() =>
                  run(() => {
                    const url = window.location.href;
                    if (navigator.share) {
                      void navigator.share({
                        title: document.title,
                        url,
                      }).catch(() => {
                        void navigator.clipboard.writeText(url);
                        toast.success('Link copied to clipboard');
                      });
                    } else {
                      void navigator.clipboard.writeText(url);
                      toast.success('Link copied to clipboard');
                    }
                  })
                }
                className="cursor-pointer gap-3"
              >
                <Share2 className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">Share Page</span>
                  <span className="text-xs text-zinc-500">
                    Share or copy the current page URL
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  ⇧S
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                value="github profile code"
                keywords={['github', 'gh']}
                onSelect={() =>
                  run(() => {
                    window.open(githubUrl, '_blank', 'noopener,noreferrer');
                  })
                }
                className="cursor-pointer gap-3"
              >
                <Github className="size-4 shrink-0 text-zinc-400" />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="font-medium text-zinc-100">
                    View GitHub Profile
                  </span>
                  <span className="text-xs text-zinc-500">
                    Open GitHub in a new tab
                  </span>
                </div>
                <CommandShortcut className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  ⇧G
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export function CommandPaletteProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openPalette = useCallback(() => setOpen(true), []);
  const closePalette = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const value = useMemo(
    () => ({ openPalette, closePalette }),
    [openPalette, closePalette],
  );

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
      <CommandPaletteDialog open={open} onOpenChange={setOpen} />
    </CommandPaletteContext.Provider>
  );
}
