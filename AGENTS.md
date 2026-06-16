# AGENTS.md — Baduy Heritage

A cultural blog + commerce site about the Baduy (Urang Kanekes) indigenous tribe of Banten, Indonesia. Built with TanStack Start on Netlify.

## Architecture

```
/
├── content/posts/          # Markdown blog posts (content-collections)
├── public/
│   └── contact-form.html   # Static form HTML for Netlify Forms detection
├── src/
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── __root.tsx      # Root layout: Navbar + Footer
│   │   ├── index.tsx       # Homepage (hero, featured posts, trips/merch teasers)
│   │   ├── blog.tsx        # Blog listing page
│   │   ├── posts.$slug.tsx # Individual post page
│   │   ├── about.tsx       # About page (tribe info + site mission)
│   │   ├── contact.tsx     # Contact/booking form (Netlify Forms via AJAX)
│   │   ├── trips.tsx       # Open trip packages with itineraries
│   │   ├── merchandise.tsx # Products/crafts catalog
│   │   └── category.$category.tsx  # Category-filtered blog listing
│   ├── lib/utils.ts        # Tailwind cn() utility
│   └── styles.css          # Global CSS with Tailwind v4 @theme tokens
├── content-collections.ts  # Content schema definition
└── vite.config.ts          # Build config with all plugins
```

## Key Conventions

### Routing
File-based routing via TanStack Router. `__root.tsx` holds the persistent Navbar + Footer shell. Dynamic routes use `.$param` naming.

### Styling
Tailwind CSS v4 with `@theme` CSS variables in `styles.css`. Custom scales: `forest-*` (greens), `earth-*` (browns/creams). Fonts: Playfair Display (display), Lato (body), EB Garamond (prose).

### Content Management
Blog posts are `.md` files in `content/posts/`. Schema in `content-collections.ts`. Import via `import { allPosts } from 'content-collections'`. Slugs auto-generated from title.

### Netlify Forms
Contact form submits via `fetch` to `/contact-form.html` with `application/x-www-form-urlencoded`. Static skeleton in `public/contact-form.html` is required for Netlify build-time detection. Forms don't work in local dev.

### Data
No database. Trips and merch data are constants in their route files. If data needs to be editable, migrate to content-collections or add `@netlify/database`.

## Non-Obvious Decisions
- Merchandise filter buttons are visual only — no JS filtering implemented yet
- Google Fonts loaded via CSS `@import` (render-blocking — self-host if perf is critical)
- `marked()` used for blog prose rendering with `dangerouslySetInnerHTML` (safe: author-controlled content only)
- Language throughout UI is Indonesian (Bahasa Indonesia)

---

## Original Template Notes

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   └── posts
│       └── beach.md  # Blog post: beach adventure.
├── public
│   ├── beach.jpg
│   ├── favicon.ico
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
├── src
│   ├── components
│   │   ├── ui
│   │   │   └── card.tsx  # Card UI component.
│   │   ├── blog-posts.tsx  # Blog post list/card display component.
│   │   ├── Header.tsx  # Site header with nav.
│   │   ├── HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
│   │   └── VacayAssistant.tsx  # AI assistant for blog Q&A.
│   ├── lib
│   │   ├── blog-ai-hook.ts  # useBlogChat hook for /api/blog-chat.
│   │   ├── blog-tools.ts  # AI tools: getPostBySlug, getAllBlogPosts, getPostsByCategory for VacayAssistant.
│   │   └── utils.ts  # cn() helper for conditional Tailwind class merging.
│   ├── routes
│   │   ├── __root.tsx  # Root layout: Header, styles, TanStack Devtools.
│   │   ├── api.blog-chat.ts  # POST handler for blog AI chat with getPostBySlug, getAllBlogPosts tools.
│   │   ├── category.$category.tsx  # Category route: posts filtered by category.
│   │   ├── index.tsx  # Blog home: post list, VacayAssistant.
│   │   └── posts.$slug.tsx  # Post detail route: single post by slug.
│   ├── router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
│   └── styles.css  # Global styles: Tailwind, prose, highlight.js.
├── .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
├── AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
├── content-collections.ts  # Content Collections config: posts schema (title, summary, categories, slug, image, date).
├── netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
├── package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
└── vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` → `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### Content Collections

Markdown files in `content/posts/` are type-safe blog posts:

- Frontmatter validated against Zod schemas in `content-collections.ts`
- Imported as typed array: `import { allPosts } from 'content-collections'`
- Each post has: `title`, `summary`, `categories[]`, `slug`, `image`, `date`, `content`

### VacayAssistant AI Integration

**Tools available to AI:**
- `getCurrentBlogPost` - Get full content and metadata of the current blog post by slug
- `getAllBlogPosts` - List all posts with titles, summaries, categories
- `searchBlogPosts` - Search posts by title, summary, or categories

## Environment Variables

For AI: ANTHROPIC_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, or OLLAMA_BASE_URL (same as ai add-on).

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` — app name displayed in the header
- `src/components/HeaderNav.tsx` — app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` — the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.
