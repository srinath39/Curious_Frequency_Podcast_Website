# Research: Modern Podcast Website

## Static Export Configuration

- **Decision**: Configure Next.js with `output: 'export'`; production builds emit the static
  `out/` directory for deployment.
- **Rationale**: This produces deployable static assets and matches the user's no-database,
  embedded-content requirement and the constitution's Static-First principle.
- **Alternatives considered**: A server-hosted Next.js deployment was rejected because it adds a
  runtime that this content-only site does not need.
- **Source**: [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)

## Content and Routing

- **Decision**: Keep episode, podcast, and FAQ content in local typed source data and render the
  four fixed pages at build time. Use site-relative internal links.
- **Rationale**: There is no real feed or dynamic source. The specified four pages do not require
  generated episode detail routes.
- **Constraints**: If dynamic episode routes are added later, every route must be enumerated at
  build time with `generateStaticParams()`. Content changes require a new build and deploy.
- **Source**: [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports),
  [Next.js Link](https://nextjs.org/docs/app/api-reference/components/link)

## Static-Export Limitations

- **Decision**: Do not use request-dependent route handlers, cookies, rewrites, redirects, headers,
  Proxy, ISR, Draft Mode, Server Actions, or dynamic routes that are not generated at build time.
- **Rationale**: These features depend on a server/runtime behavior unavailable to a static export.
- **Source**: [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)

## Responsive Presentation and Media

- **Decision**: Use responsive CSS layouts and local/static assets only. No audio assets or playback
  are in scope. If artwork is supplied, use static public assets and avoid server-dependent image
  optimization.
- **Rationale**: CSS media queries and a static file layout support the required responsive
  behavior without runtime services.
- **Source**: [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using),
  [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports),
  [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)

## Deployment Paths

- **Decision**: Use the default non-trailing-slash output unless the chosen static host requires
  directory-style pages; verify host routing when a deployment target is selected.
- **Rationale**: No host is specified. `trailingSlash: true` is available for hosts that expect
  directory-style routes, but committing to that behavior without a host is unnecessary.
- **Source**: [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports)
