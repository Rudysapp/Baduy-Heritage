# Baduy Heritage

A cultural blog website dedicated to the Baduy tribe of Banten, Indonesia — featuring editorial content, open trip packages, traditional crafts marketplace, and a contact/booking form.

## About

Baduy Heritage is a platform to introduce, celebrate, and preserve the culture of the Baduy (Urang Kanekes) people, an indigenous community in Lebak, Banten who maintain ancient Sundanese traditions in harmony with nature.

## Key Technologies

- **TanStack Start** — Full-stack React framework with file-based routing
- **Content Collections** — Markdown-based content management for blog posts
- **Tailwind CSS v4** — Utility-first CSS with custom earth-tone design tokens
- **Netlify Forms** — Serverless form handling for the contact/booking inquiry form
- **Vite** — Build tooling

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, featured posts, trip packages teaser, merch teaser |
| `/blog` | Blog listing with all cultural articles |
| `/posts/:slug` | Individual blog post page |
| `/about` | About the Baduy tribe and the platform's mission |
| `/trips` | Open trip packages with itineraries and FAQ |
| `/merchandise` | Traditional crafts and products catalog |
| `/contact` | Inquiry and trip booking form (Netlify Forms) |
| `/category/:category` | Posts filtered by category |

## Running Locally

```bash
npm install
npm run dev
```

The development server starts at [http://localhost:3000](http://localhost:3000).

> **Note:** Netlify Forms only works after deploying to Netlify. The contact form will not submit in local development.

## Content

Blog posts are Markdown files in `content/posts/`. Each post requires frontmatter:

```yaml
---
date: YYYY-MM-DD
title: "Post Title"
summary: "Short description"
categories:
  - Budaya
image: placeholder.png
---
```

## Design

Earth-tone palette inspired by the natural environment of the Kendeng mountains:
- Forest green (`#1f4717` → `#2a5e1f`)  
- Warm brown/earth (`#4e3420` → `#d4b896`)
- Cream/parchment (`#faf7f2`)

Fonts: Playfair Display (headings), Lato (body), EB Garamond (article prose).
