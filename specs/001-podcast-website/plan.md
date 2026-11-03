# Implementation Plan: Modern Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2026-11-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-podcast-website/spec.md`

## Summary

Build a polished, responsive podcast website with a featured episode, a catalog of exactly 20
episodes, and About and FAQ pages. Use Next.js App Router with static export; keep all mock content
in the project, with no database, backend, or external feed.

The repository currently has no application scaffold or package manifest. Initialize a TypeScript
Next.js app, then create the shared site frame, embedded content, pages, and browser validation.

## Technical Context

**Language/Version**: TypeScript, using the supported version selected by the Next.js scaffold

**Primary Dependencies**: Next.js App Router, React, Playwright for browser-level validation

**Storage**: Embedded TypeScript content module; no database or runtime storage

**Testing**: `next build`, `npm run lint`, `npm run typecheck`, and browser verification of routes,
content, responsive layouts, and keyboard navigation

**Target Platform**: Static web host serving the generated `out/` directory; mobile and desktop
browsers

**Project Type**: Static multi-page web application

**Performance Goals**: Meet SC-007: essential content visible within three seconds on a 10 Mbps
connection for at least 95 out of 100 visits

**Constraints**: `output: 'export'`; content is public and bundled with the site; no server-only
features, database, external feed, audio playback, accounts, or personal-data collection

**Scale/Scope**: Four routes, one podcast, exactly 20 episodes, at least five FAQ entries

## Constitution Check

*Gate: evaluated before research and again after design.*

| Principle | Plan alignment |
|-----------|----------------|
| Static-First | Next.js generates static assets; no backend or runtime database is introduced. |
| Accessible and Responsive | Semantic pages, keyboard-operable navigation, visible focus, and viewport validation are required. |
| Client-Side Safety | Content is public mock content; no secrets or unsafe user-generated HTML are needed. |
| Verified Changes | Validate the production export and user-facing flows with automated/browser checks. |
| Simplicity | One app, local content, minimal dependencies, and no unnecessary service layers. |

**Gate result**: PASS. No constitution exceptions are required.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── site-routes.md
└── tasks.md             # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── about/page.tsx
│   ├── episodes/page.tsx
│   ├── faq/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── episode-card.tsx
│   ├── site-footer.tsx
│   └── site-header.tsx
└── content/
    └── podcast.ts
public/
└── (locally supplied visual assets, if any)
tests/
└── (no test suite requested; use the project checks and browser verification)
```

**Structure Decision**: Use one Next.js project with the App Router under `src/app`, reusable site
components under `src/components`, and all static podcast data under `src/content`. The required
pages are directly represented by static routes. Browser tests live separately under `tests/e2e`.

## Complexity Tracking

No constitution violations or added architectural complexity require justification.
