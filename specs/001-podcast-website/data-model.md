# Data Model: Modern Podcast Website

All records are embedded as static content and are public. There is no persistence layer or
visitor-submitted data.

## Podcast

| Field | Type | Constraints |
|-------|------|-------------|
| name | string | Required; the initial sample name is “Curious Frequency”. |
| subject | string | Required; describes the show's subject and audience. |
| purpose | string | Required; explains why the show exists. |
| featuredEpisodeId | string | Required; references exactly one episode in the catalog. |

**Relationships**: One podcast has exactly 20 episodes and references one of them as featured.

## Episode

| Field | Type | Constraints |
|-------|------|-------------|
| id | string | Required; unique within the catalog and stable for references. |
| title | string | Required; distinct for each episode. |
| summary | string | Required; concise fictional editorial text. |
| publishedAt | date string | Required; valid mocked date, not guaranteed to match a real schedule. |

**Collection rules**:

- The catalog contains exactly 20 episodes.
- Episode IDs and titles are unique.
- Dates may repeat and are not required to be sequential.
- `Podcast.featuredEpisodeId` MUST resolve to one catalog episode; the featured episode is not a
  twenty-first record.

## FAQ Item

| Field | Type | Constraints |
|-------|------|-------------|
| id | string | Required; unique within the FAQ collection. |
| question | string | Required; a clearly stated visitor question. |
| answer | string | Required; a concise, fictional sample answer. |

**Collection rules**: Include at least five FAQ items. The initial topics cover the show, episode
schedule, listening options, and contacting the creators.

## Static Lifecycle

Content is authored in the local source module, included at build time, and delivered as static
page content. Updating content requires rebuilding and redeploying the site. No create, update, or
delete flows are exposed to visitors.
