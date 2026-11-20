# Throughline site

Astro (static) + SCSS. Labs posts are Markdown in `src/content/labs/`.

```sh
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # outputs dist/ (drafts excluded)
```

## Where things live

- Names, nav, CTA destinations: `src/config/site.ts`
- Palette, type, spacing: `src/styles/_tokens.scss` (auto-injected into every SCSS block)
- Components: `src/components/` (Header, Footer, Button, Card, Section, Hero, PostCard)
- Layouts: `src/layouts/` (BaseLayout, PostLayout)
- Labs schema: `src/content.config.ts`

## Labs post frontmatter

```yaml
title: Required
description: Required
date: 2026-11-12
author: Optional, defaults to owner in site config
tags: [attribution, teardown]
heroImage: /images/labs/example.png   # optional, file in public/
draft: false                          # true = dev only
```

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION=22`

`sass` is a dev dependency, so SCSS compiles during `astro build` on Cloudflare. No separate CSS step.
