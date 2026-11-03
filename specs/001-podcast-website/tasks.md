# Tasks: Modern Podcast Website

**Input**: Design documents from `specs/001-podcast-website/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/`, and
`quickstart.md`

**Organization**: Tasks are grouped by user story so each story can be implemented and reviewed as
an independent increment. No standalone test-writing tasks are included because the feature
specification does not request TDD or automated test suites.

## Phase 1: Setup

**Purpose**: Initialize the Next.js App Router application without disturbing Spec Kit files.

- [X] T001 Initialize the root TypeScript Next.js app with npm scripts and dependencies in `package.json`, TypeScript options in `tsconfig.json`, Next.js type references in `next-env.d.ts`, and the root application shell in `src/app/layout.tsx`.
- [X] T002 Configure static export with `output: 'export'` in `next.config.ts` and ensure `npm run build` creates the deployable `out/` directory without server-dependent features.

## Phase 2: Foundational

**Purpose**: Build shared static content and site infrastructure required by all user stories.

- [X] T003 [P] Define podcast, episode, and FAQ content and TypeScript types in `src/content/podcast.ts`; podcast name, subject, purpose, and featured episode ID are required; create exactly 20 episodes with unique IDs and titles, each with a required concise summary and valid mocked date string; dates may repeat and need not be sequential; featured episode ID must reference exactly one catalog episode; include at least five FAQ items with unique IDs and required question and answer strings.
- [X] T004 [P] Implement the shared responsive site shell in `src/app/layout.tsx`, `src/app/globals.css`, `src/components/site-header.tsx`, and `src/components/site-footer.tsx`; provide navigation to `/`, `/episodes`, `/about`, and `/faq`, semantic landmarks, visible keyboard focus, readable high-contrast editorial styling, bold typography, one vivid accent color, and layouts that work at 320px and 1280px without horizontal scrolling.
- [X] T005 Create a reusable episode presentation component in `src/components/episode-card.tsx` that displays an episode title, concise summary, and mocked publication date accessibly; consume the episode shape from `src/content/podcast.ts` (depends on T003).

## Phase 3: User Story 1 - Discover the Featured Episode (Priority: P1) 🎯 MVP

**Goal**: Present the podcast identity and exactly one prominent featured episode on the landing
page, with a clear route to the catalog.

**Independent Test**: Open `/`; confirm the podcast name and subject are identifiable, exactly one
episode is marked featured, that episode belongs to the catalog, and the catalog can be reached in
one navigation action.

- [X] T006 [US1] Build the landing page in `src/app/page.tsx` using podcast metadata and the featured episode from `src/content/podcast.ts`; display exactly one prominent featured episode using `src/components/episode-card.tsx` and provide a direct link to `/episodes`.

## Phase 4: User Story 2 - Browse Episodes (Priority: P1)

**Goal**: Let visitors browse all 20 fictional episodes and see each title, summary, and mocked
publication date.

**Independent Test**: Open `/episodes`; confirm exactly 20 distinct entries appear with a title,
summary, and mocked date, including the same featured episode shown on `/`.

- [X] T007 [US2] Build the episode catalog page in `src/app/episodes/page.tsx`; render all 20 records from `src/content/podcast.ts` with `src/components/episode-card.tsx`, without adding a separate featured record or loading a real feed.

## Phase 5: User Story 3 - Learn About the Podcast (Priority: P2)

**Goal**: Explain the podcast's subject and purpose to prospective listeners.

**Independent Test**: Open `/about`; confirm the page explains the show's subject and purpose and
can be reached using shared navigation.

- [X] T008 [US3] Build the About page in `src/app/about/page.tsx` using the podcast name, subject, and purpose from `src/content/podcast.ts`; provide a concise editorial introduction and maintain the shared responsive layout.

## Phase 6: User Story 4 - Find Answers to Common Questions (Priority: P3)

**Goal**: Provide at least five clearly paired common questions and answers.

**Independent Test**: Open `/faq`; confirm at least five questions are visibly paired with their
answers and the page is reachable using shared navigation.

- [X] T009 [US4] Build the FAQ page in `src/app/faq/page.tsx` from the FAQ items in `src/content/podcast.ts`; render each question and answer as an accessible, clearly distinguished pair and maintain the shared responsive layout.

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Confirm the application can be delivered as static assets and document how to run it.

- [X] T010 Run `npm run build` from the repository root and resolve build or static-export errors in `package.json`, `next.config.ts`, or the affected `src/` files; confirm the generated `out/` directory contains the `/`, `/episodes`, `/about`, and `/faq` routes.
- [X] T011 Align `specs/001-podcast-website/quickstart.md` with the actual scripts and commands in `package.json`; document local startup, static build, output location, and how to preview the exported pages.

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No prerequisites; T001 precedes T002 because the static-export configuration uses the initialized Next.js project.
- **Foundational (Phase 2)**: Begins after setup. T003 and T004 are independent and can run in parallel; T005 depends on T003.
- **User Stories (Phases 3-6)**: Begin after foundational tasks are complete. Each story can then be implemented independently.
- **Polish (Phase 7)**: Begins after the pages are implemented; T010 verifies the completed application and T011 documents its actual commands.

### User Story Dependencies

- **US1 (P1)**: Depends on shared content, shell, and episode card; independent of US2-US4.
- **US2 (P1)**: Depends on shared content, shell, and episode card; independent of US1, US3, and US4.
- **US3 (P2)**: Depends on shared content and site shell; independent of US1, US2, and US4.
- **US4 (P3)**: Depends on shared content and site shell; independent of US1-US3.

### Dependency Graph

```text
T001 → T002 → ┬→ T003 → T005 ─┬→ T006 (US1) ─┐
              │               └→ T007 (US2) ─┤
              └→ T004 ───────────┬→ T006      ├→ T010 → T011
                                 ├→ T007      │
                                 ├→ T008 (US3)┤
                                 └→ T009 (US4)┘
```

### Parallel Execution Examples

After T002, start **T003** and **T004** in parallel because they modify different files. After T003,
complete **T005**. Once T003-T005 are complete, the four user stories can proceed independently:

```text
US1: T006 — landing page
US2: T007 — episode catalog
US3: T008 — About page
US4: T009 — FAQ page
```

## Implementation Strategy

### MVP First (User Story 1)

1. Complete T001-T005 to establish the static Next.js app, shared content, and site shell.
2. Complete T006 to deliver the featured-episode landing page.
3. Check the US1 independent-test criteria before continuing.

### Incremental Delivery

1. Add T007 for the complete 20-episode catalog.
2. Add T008 for podcast background.
3. Add T009 for the FAQ.
4. Complete T010-T011 to verify the static output and document the final quickstart.
