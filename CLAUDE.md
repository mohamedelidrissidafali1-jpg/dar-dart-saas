# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Dar D'art** — a Next.js SaaS application. Currently in early scaffolding stage.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

No test runner is configured yet.

## Architecture

- **Framework**: Next.js 16 with the App Router (`src/app/`)
- **Styling**: Tailwind CSS v4 (configured via `postcss.config.mjs`, no `tailwind.config` file — uses the new CSS-first config approach)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`
- **TypeScript**: strict mode, `moduleResolution: bundler`
- **Path alias**: `@/*` resolves to `./src/*`

## Key conventions

- `src/app/layout.tsx` is the root layout — `<html>` and `<body>` live here; the body uses `flex flex-col min-h-full`
- Dark mode is supported via Tailwind's `dark:` variant (no explicit `darkMode` config needed with Tailwind v4)
- `next.config.ts` is currently empty — add Next.js config there (TypeScript, not `.js`)
