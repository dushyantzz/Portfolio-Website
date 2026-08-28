# Graph Report - . (2026-08-28)

## Corpus Check

- 10 files · ~1,141,356 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 972 nodes · 1713 edges · 93 communities (75 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)

- [[_COMMUNITY_Blog Components & UI Primitives|Blog Components & UI Primitives]]
- [[_COMMUNITY_Dependencies & Node Modules|Dependencies & Node Modules]]
- [[_COMMUNITY_Global Layout & Analytics|Global Layout & Analytics]]
- [[_COMMUNITY_Mobile-Aware Layout Primitives|Mobile-Aware Layout Primitives]]
- [[_COMMUNITY_Interactive Overlays (Chat, BackToTop, Drawer)|Interactive Overlays (Chat, BackToTop, Drawer)]]
- [[_COMMUNITY_Utility Helpers (cn) & Breadcrumb UI|Utility Helpers (cn) & Breadcrumb UI]]
- [[_COMMUNITY_Code Copy & Experience Section|Code Copy & Experience Section]]
- [[_COMMUNITY_Avatar Editor & Command Palette|Avatar Editor & Command Palette]]
- [[_COMMUNITY_Alert Dialog & Calendar UI|Alert Dialog & Calendar UI]]
- [[_COMMUNITY_Utils & Form Input Primitives|Utils & Form Input Primitives]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Gears & Devices Showcase|Gears & Devices Showcase]]
- [[_COMMUNITY_Project Data Resolvers|Project Data Resolvers]]
- [[_COMMUNITY_Workspace Aliases (components.json)|Workspace Aliases (components.json)]]
- [[_COMMUNITY_Section Heading & Projects Base|Section Heading & Projects Base]]
- [[_COMMUNITY_Skills & Tech Icon Mappings|Skills & Tech Icon Mappings]]
- [[_COMMUNITY_Menubar UI|Menubar UI]]
- [[_COMMUNITY_Resume Config & Project Navigation|Resume Config & Project Navigation]]
- [[_COMMUNITY_Project Components (ChallengesLearnings)|Project Components (Challenges/Learnings)]]
- [[_COMMUNITY_Context Menu UI|Context Menu UI]]
- [[_COMMUNITY_Dropdown Menu UI|Dropdown Menu UI]]
- [[_COMMUNITY_Dev Dependencies & Lint Setup|Dev Dependencies & Lint Setup]]
- [[_COMMUNITY_Package Scripts|Package Scripts]]
- [[_COMMUNITY_Chat API & Rate Limiting|Chat API & Rate Limiting]]
- [[_COMMUNITY_Carousel UI|Carousel UI]]
- [[_COMMUNITY_Hero Config & Social Links|Hero Config & Social Links]]
- [[_COMMUNITY_Certificates Page & Achievements|Certificates Page & Achievements]]
- [[_COMMUNITY_Metadata Generation|Metadata Generation]]
- [[_COMMUNITY_Knip (Unused Code Detection)|Knip (Unused Code Detection)]]
- [[_COMMUNITY_Listed Projects & Core Next.js Stack|Listed Projects & Core Next.js Stack]]
- [[_COMMUNITY_Container, Footer & Contact|Container, Footer & Contact]]
- [[_COMMUNITY_Open Source Contributions|Open Source Contributions]]
- [[_COMMUNITY_Navigation Menu UI|Navigation Menu UI]]
- [[_COMMUNITY_Blog Posts & Tag Concepts|Blog Posts & Tag Concepts]]
- [[_COMMUNITY_DRDO Logo, Resume PDF & Serena Config|DRDO Logo, Resume PDF & Serena Config]]
- [[_COMMUNITY_GitHub Activity Component|GitHub Activity Component]]
- [[_COMMUNITY_Contact API & Rate Limiting|Contact API & Rate Limiting]]
- [[_COMMUNITY_Landing Page (Hero, CTA, Social)|Landing Page (Hero, CTA, Social)]]
- [[_COMMUNITY_Setup Page & Steps Config|Setup Page & Steps Config]]
- [[_COMMUNITY_Oneko Cat Animation|Oneko Cat Animation]]
- [[_COMMUNITY_Lint-Staged Configuration|Lint-Staged Configuration]]
- [[_COMMUNITY_Prettier Configuration|Prettier Configuration]]
- [[_COMMUNITY_Toggle & Toggle Group UI|Toggle & Toggle Group UI]]
- [[_COMMUNITY_Umami Analytics Hook & Types|Umami Analytics Hook & Types]]
- [[_COMMUNITY_Setup Visual Icons (Code, Gear)|Setup Visual Icons (Code, Gear)]]
- [[_COMMUNITY_Project Content & External Links|Project Content & External Links]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Clean-Next Script|Clean-Next Script]]
- [[_COMMUNITY_Accordion UI|Accordion UI]]
- [[_COMMUNITY_Alert UI|Alert UI]]
- [[_COMMUNITY_Telegram Test Script|Telegram Test Script]]
- [[_COMMUNITY_Blog How to be me|Blog: How to be me]]
- [[_COMMUNITY_Profile Image Editor|Profile Image Editor]]
- [[_COMMUNITY_Husky Git Hooks|Husky Git Hooks]]
- [[_COMMUNITY_Skill Component|Skill Component]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_My Journey (MDX)|My Journey (MDX)]]
- [[_COMMUNITY_README|README]]
- [[_COMMUNITY_Appwrite MCP Server Project|Appwrite MCP Server Project]]
- [[_COMMUNITY_I'm a chill guy Project|I'm a chill guy Project]]
- [[_COMMUNITY_FestX Project|FestX Project]]
- [[_COMMUNITY_Intent JS Project|Intent JS Project]]
- [[_COMMUNITY_Moonstone 2K25 Project|Moonstone 2K25 Project]]
- [[_COMMUNITY_NotesBuddy Project|NotesBuddy Project]]
- [[_COMMUNITY_Pasandida Aurat Project|Pasandida Aurat Project]]
- [[_COMMUNITY_Syncify Project|Syncify Project]]
- [[_COMMUNITY_The Quest Project|The Quest Project]]
- [[_COMMUNITY_VSC Extensions|VSC Extensions]]
- [[_COMMUNITY_Lint Workflow|Lint Workflow]]

## God Nodes (most connected - your core abstractions)

1. `cn()` - 238 edges
2. `Container()` - 23 edges
3. `Button()` - 23 edges
4. `Separator()` - 18 edges
5. `compilerOptions` - 16 edges
6. `scripts` - 15 edges
7. `useHapticFeedback()` - 13 edges
8. `generateMetadata()` - 12 edges
9. `buttonVariants` - 9 edges
10. `TypeScript()` - 8 edges

## Surprising Connections (you probably didn't know these)

- `Dushyant Resume (PDF)` --references--> `Portfolio-Website Project` [INFERRED]
  public/dushyant-resume.pdf → .serena/project.yml
- `DRDO Official Logo (Root Copy)` --semantically_similar_to--> `DRDO Official Logo (Public Assets Copy)` [INFERRED] [semantically similar]
  drdo-official-seeklogo.svg → public/assets/drdo-official-seeklogo.svg
- `Valorant Remastered` --references--> `TypeScript()` [INFERRED]
  src/data/projects/valorant-remastered.mdx → src/components/technologies/TypeScript.tsx
- `Ram's Space - Poetry & Blog Platform` --references--> `NextJs()` [INFERRED]
  src/data/projects/poems-blog.mdx → src/components/technologies/NextJs.tsx
- `That Startup - Pitch & Connect Platform` --references--> `NextJs()` [INFERRED]
  src/data/projects/that-startup.mdx → src/components/technologies/NextJs.tsx

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **DRDO Logo Duplicated Across Project Root and Public Assets** — drdo_official_seeklogo_svg, public_assets_drdo_official_seeklogo_svg [INFERRED 0.95]

## Communities (93 total, 18 thin omitted)

### Community 0 - "Blog Components & UI Primitives"

Cohesion: 0.05
Nodes (48): BlogCard(), BlogCardProps, BlogComponents, BlogContentProps, BlogListProps, Certificate, CertificatesGalleryProps, journeyConfig (+40 more)

### Community 1 - "Dependencies & Node Modules"

Cohesion: 0.03
Nodes (67): dependencies, @calcom/embed-react, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, eventsource-parser (+59 more)

### Community 2 - "Global Layout & Analytics"

Cohesion: 0.06
Nodes (34): getUmamiConfig(), UmamiAnalytics(), metadata, CommandPaletteProvider(), useCommandPalette(), Footer(), actionsStyle, Navbar() (+26 more)

### Community 3 - "Mobile-Aware Layout Primitives"

Cohesion: 0.06
Nodes (37): useIsMobile(), Input(), Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay() (+29 more)

### Community 4 - "Interactive Overlays (Chat, BackToTop, Drawer)"

Cohesion: 0.07
Nodes (32): BackToTop(), ChatBubble(), initialMessages, Message, FontSizeControls(), HapticFeedbackType, useHapticFeedback(), ChatBubbleIcon() (+24 more)

### Community 5 - "Utility Helpers (cn) & Breadcrumb UI"

Cohesion: 0.08
Nodes (31): cn(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), InputOTP() (+23 more)

### Community 6 - "Code Copy & Experience Section"

Cohesion: 0.08
Nodes (23): CodeCopyButton(), CodeCopyButtonProps, ExperienceBase, experiencesBase, Experience, techIconByName, Technology, ExperienceCard() (+15 more)

### Community 7 - "Avatar Editor & Command Palette"

Cohesion: 0.11
Nodes (21): CommandPaletteContext, CommandPaletteContextValue, CommandPaletteDialog(), ctaConfig, CallToActionProps, Command(), CommandDialog(), CommandEmpty() (+13 more)

### Community 8 - "Alert Dialog & Calendar UI"

Cohesion: 0.09
Nodes (18): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle() (+10 more)

### Community 9 - "Utils & Form Input Primitives"

Cohesion: 0.09
Nodes (8): Checkbox(), HoverCardContent(), PopoverContent(), Progress(), ResizableHandle(), ResizablePanelGroup(), Slider(), Switch()

### Community 10 - "TypeScript Configuration"

Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 11 - "Gears & Devices Showcase"

Cohesion: 0.17
Nodes (10): devices, software, webExtensions, Headphones(), Keyboard(), Laptop(), Monitor(), Mouse() (+2 more)

### Community 12 - "Project Data Resolvers"

Cohesion: 0.17
Nodes (17): getAllProjectCaseStudies(), getAllTechnologies(), getProjectCaseStudiesByTechnology(), getProjectCaseStudyBySlug(), getProjectCaseStudySlugs(), getProjectNavigation(), getPublishedProjectCaseStudies(), getRelatedProjectCaseStudies() (+9 more)

### Community 13 - "Workspace Aliases (components.json)"

Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 14 - "Section Heading & Projects Base"

Cohesion: 0.21
Nodes (8): SectionHeading(), SectionHeadingProps, ProjectBase, projectsBase, metadata, ProjectList(), ProjectListProps, ProjectsSection()

### Community 15 - "Skills & Tech Icon Mappings"

Cohesion: 0.23
Nodes (9): mySkills, projects, projectTechIcons, AWS(), MongoDB(), NodeJs(), Python(), ReactIcon() (+1 more)

### Community 16 - "Menubar UI"

Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 17 - "Resume Config & Project Navigation"

Cohesion: 0.21
Nodes (8): resumeConfig, ProjectNavigation(), ProjectNavigationProps, metadata, ProjectCaseStudyPageProps, ArrowLeft(), ArrowUUpRight(), Button()

### Community 18 - "Project Components (Challenges/Learnings)"

Cohesion: 0.16
Nodes (6): ProjectComponents, TechnologyComponents, Bun(), JavaScript(), PostgreSQL(), Prisma()

### Community 19 - "Context Menu UI"

Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 20 - "Dropdown Menu UI"

Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 21 - "Dev Dependencies & Lint Setup"

Cohesion: 0.13
Nodes (15): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, lint-staged, prettier, prettier-plugin-tailwindcss, tailwindcss (+7 more)

### Community 22 - "Package Scripts"

Cohesion: 0.13
Nodes (15): scripts, build, clean, dev, dev:fresh, dev:turbo, format, format:all (+7 more)

### Community 23 - "Chat API & Rate Limiting"

Cohesion: 0.20
Nodes (9): chatSchema, checkRateLimit(), getClientIP(), POST(), rateLimitStore, sanitizeInput(), about, chatSuggestions (+1 more)

### Community 24 - "Carousel UI"

Cohesion: 0.19
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 25 - "Hero Config & Social Links"

Cohesion: 0.22
Nodes (6): heroConfig, socialLinksMeta, skillComponents, socialIconByName, LinkedIn(), Mail()

### Community 26 - "Certificates Page & Achievements"

Cohesion: 0.21
Nodes (6): metadata, achievementsConfig, certificates, experiences, Separator(), metadata

### Community 27 - "Metadata Generation"

Cohesion: 0.23
Nodes (9): generateMetadata(), getPageMetadata(), PageMeta, pageMetadata, JourneyPage(), metadata, getJourneyContent(), journeyDirectory (+1 more)

### Community 28 - "Knip (Unused Code Detection)"

Cohesion: 0.18
Nodes (10): entry, ignore, ignoreDependencies, ignoreExportsUsedInFile, interface, type, project, $schema (+2 more)

### Community 29 - "Listed Projects & Core Next.js Stack"

Cohesion: 0.22
Nodes (7): Ram's Space - Poetry & Blog Platform, That Startup - Pitch & Connect Platform, Valorant Remastered, NextJs(), Sanity(), TailwindCss(), TypeScript()

### Community 30 - "Container, Footer & Contact"

Cohesion: 0.29
Nodes (4): Container(), contactConfig, footerConfig, metadata

### Community 31 - "Open Source Contributions"

Cohesion: 0.31
Nodes (5): OpenSourceContribution, openSourceContributions, OpenSourceList(), OpenSourceListProps, metadata

### Community 32 - "Navigation Menu UI"

Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 33 - "Blog Posts & Tag Concepts"

Cohesion: 0.33
Nodes (9): Better Frontend Part 1: Learn development and design principles, JavaScript for Frontend Development: A Beginner's Guide, Next.JS Data Fetching mistakes & Security vulnerabilities, Routing in Next.js (App Router) - A Complete Guide (2025), Tag: design, Tag: development, Tag: frontend, Tag: javascript (+1 more)

### Community 34 - "DRDO Logo, Resume PDF & Serena Config"

Cohesion: 0.25
Nodes (9): DRDO Official Logo (Root Copy), Defence Research and Development Organisation (DRDO), DRDO Official Logo (Public Assets Copy), Dushyant Resume (PDF), Serena Local Project Override, Serena Project Configuration, Portfolio-Website Project, TypeScript Language Server (+1 more)

### Community 35 - "GitHub Activity Component"

Cohesion: 0.29
Nodes (4): githubConfig, ActivityCalendar, ContributionItem, GitHubContributionResponse

### Community 36 - "Contact API & Rate Limiting"

Cohesion: 0.36
Nodes (6): checkRateLimit(), contactSchema, getClientIP(), POST(), rateLimitStore, sendToTelegram()

### Community 37 - "Landing Page (Hero, CTA, Social)"

Cohesion: 0.33
Nodes (4): socialLinks, siteConfig, CTA(), Hero()

### Community 38 - "Setup Page & Steps Config"

Cohesion: 0.38
Nodes (3): steps, metadata, CheckCircle()

### Community 39 - "Oneko Cat Animation"

Cohesion: 0.52
Nodes (5): frame(), idle(), onAnimationFrame(), resetIdleAnimation(), setSprite()

### Community 40 - "Lint-Staged Configuration"

Cohesion: 0.29
Nodes (6): lint-staged, _.{js,jsx,ts,tsx}, _.{json,md}, name, private, version

### Community 41 - "Prettier Configuration"

Cohesion: 0.29
Nodes (6): plugins, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 42 - "Toggle & Toggle Group UI"

Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 43 - "Umami Analytics Hook & Types"

Cohesion: 0.47
Nodes (3): Window, AnalyticsEvent, AnalyticsEventData

### Community 44 - "Setup Visual Icons (Code, Gear)"

Cohesion: 0.47
Nodes (3): setup, Code(), Gear()

### Community 45 - "Project Content & External Links"

Cohesion: 0.47
Nodes (3): ProjectContent(), Github(), Website()

### Community 46 - "ESLint Config"

Cohesion: 0.40
Nodes (4): compat, **dirname, eslintConfig, **filename

### Community 47 - "Clean-Next Script"

Cohesion: 0.50
Nodes (4): pathsToRemove, rmWithRetries(), root, sleep()

### Community 48 - "Accordion UI"

Cohesion: 0.40
Nodes (3): AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 49 - "Alert UI"

Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 50 - "Telegram Test Script"

Cohesion: 0.40
Nodes (3): TelegramBotInfo, TelegramSendResponse, TelegramUpdate

### Community 51 - "Blog: How to be me"

Cohesion: 0.50
Nodes (4): How to be me - Learn, Build, and Crush it, Tag: advice, Tag: journey, Tag: life

## Knowledge Gaps

- **262 isolated node(s):** `husky.sh script`, `printWidth`, `tabWidth`, `trailingComma`, `singleQuote` (+257 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Utility Helpers (cn) & Breadcrumb UI` to `Blog Components & UI Primitives`, `Global Layout & Analytics`, `Mobile-Aware Layout Primitives`, `Interactive Overlays (Chat, BackToTop, Drawer)`, `Code Copy & Experience Section`, `Avatar Editor & Command Palette`, `Alert Dialog & Calendar UI`, `Utils & Form Input Primitives`, `Menubar UI`, `Resume Config & Project Navigation`, `Context Menu UI`, `Dropdown Menu UI`, `Carousel UI`, `Certificates Page & Achievements`, `Container, Footer & Contact`, `Navigation Menu UI`, `Landing Page (Hero, CTA, Social)`, `Toggle & Toggle Group UI`, `Accordion UI`, `Alert UI`?**
  _High betweenness centrality (0.281) - this node is a cross-community bridge._
- **Why does `Container()` connect `Container, Footer & Contact` to `Blog Components & UI Primitives`, `Global Layout & Analytics`, `Utility Helpers (cn) & Breadcrumb UI`, `Landing Page (Hero, CTA, Social)`, `Avatar Editor & Command Palette`, `Code Copy & Experience Section`, `Setup Page & Steps Config`, `Gears & Devices Showcase`, `Setup Visual Icons (Code, Gear)`, `Section Heading & Projects Base`, `Resume Config & Project Navigation`, `Certificates Page & Achievements`, `Metadata Generation`, `Open Source Contributions`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `Button()` connect `Resume Config & Project Navigation` to `Blog Components & UI Primitives`, `Global Layout & Analytics`, `GitHub Activity Component`, `Interactive Overlays (Chat, BackToTop, Drawer)`, `Utility Helpers (cn) & Breadcrumb UI`, `Code Copy & Experience Section`, `Mobile-Aware Layout Primitives`, `Alert Dialog & Calendar UI`, `Project Content & External Links`, `Section Heading & Projects Base`, `Carousel UI`, `Open Source Contributions`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `husky.sh script`, `printWidth`, `tabWidth` to the rest of the system?**
  _262 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog Components & UI Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.05030181086519115 - nodes in this community are weakly interconnected._
- **Should `Dependencies & Node Modules` be split into smaller, more focused modules?**
  _Cohesion score 0.029850746268656716 - nodes in this community are weakly interconnected._
- **Should `Global Layout & Analytics` be split into smaller, more focused modules?**
  _Cohesion score 0.05782312925170068 - nodes in this community are weakly interconnected._
