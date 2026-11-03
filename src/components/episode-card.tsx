import type { Episode } from "@/content/podcast";

type EpisodeCardProps = {
  episode: Episode;
  index?: number;
  featured?: boolean;
};

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

export function EpisodeCard({
  episode,
  index,
  featured = false,
}: EpisodeCardProps) {
  return (
    <article className={`episode-card${featured ? " episode-card-featured" : ""}`}>
      <div className="episode-card-topline">
        <span className="episode-number">
          Episode {String((index ?? 0) + 1).padStart(2, "0")}
        </span>
        {featured ? <span className="featured-label">Featured frequency</span> : null}
      </div>
      <div className="episode-card-content">
        <p className="eyebrow">
          <time dateTime={episode.publishedAt}>
            {formatPublishedDate(episode.publishedAt)}
          </time>
        </p>
        <h2>{episode.title}</h2>
        <p className="episode-summary">{episode.summary}</p>
      </div>
      {featured ? (
        <span aria-hidden="true" className="episode-signal-mark">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      ) : null}
    </article>
  );
}
