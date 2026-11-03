# User-Facing Route Contract

The site publishes these static routes. Internal navigation uses site-relative links and remains
available across all routes.

| Route | Contract |
|-------|----------|
| `/` | Identifies the podcast, displays exactly one featured episode from the catalog, and links to the episode catalog. |
| `/episodes` | Displays exactly 20 distinct episodes; each has a title, short summary, and mocked publication date. |
| `/about` | Explains the podcast's subject and purpose. |
| `/faq` | Displays at least five common questions paired with answers. |

## Shared Interaction Requirements

- A visitor can navigate to all four routes from the shared site navigation.
- Links and controls are operable by keyboard, with visible focus.
- Pages remain readable and usable at 320px and 1280px widths without horizontal scrolling.
- The featured episode on `/` is one of the catalog entries on `/episodes`.
- The static deployment must serve each generated route without requiring a server-side data API.

This contract describes public web pages, not an external API. Content field constraints are defined
in [data-model.md](../data-model.md); user flows are specified in [spec.md](../spec.md).
