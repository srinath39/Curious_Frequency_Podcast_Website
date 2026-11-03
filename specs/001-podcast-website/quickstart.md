# Quickstart: Modern Podcast Website

## Prerequisites

- Node.js and npm versions supported by the selected Next.js release.
- Project dependencies installed from the root `package.json`.

## Run Locally

1. Install dependencies with `npm install`.
2. Start the development site with `npm run dev`.
3. Visit `/`, `/episodes`, `/about`, and `/faq` on the local development URL.

Expected: all four pages render, navigation works, the landing page shows one featured episode,
and the catalog shows 20 episodes.

## Validate the Static Site

1. Run `npm run build`.
2. Confirm the build succeeds and generates the `out/` directory with the four route pages.
3. Run `npm run lint` and `npm run typecheck`.
4. Preview the exported files with a static file server, for example `npx --yes serve out`.
5. In a browser, check the routes and content, then inspect layouts at 320px and 1280px and
   navigate the pages using only the keyboard.

Expected: the exported site does not depend on a database, feed, or server-side content API.
Checks confirm all four routes, 20 distinct episodes with mocked dates, featured/catalog
membership, FAQ minimum, keyboard navigation, and layouts at 320px and 1280px.
The static host must serve each clean route (`/episodes`, `/about`, and `/faq`) from its matching
exported `.html` file, as described in the [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports).

## Design References

- Route behaviors: [contracts/site-routes.md](./contracts/site-routes.md)
- Embedded content and validation rules: [data-model.md](./data-model.md)
- User journeys and measurable success criteria: [spec.md](./spec.md)
