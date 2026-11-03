import type { Metadata } from "next";
import { EpisodeCard } from "@/components/episode-card";
import { episodes, podcast } from "@/content/podcast";

export const metadata: Metadata = {
  title: "Episodes",
  description: `Explore all 20 Curious Frequency episodes about ${podcast.subject.toLowerCase()}`,
};

export default function EpisodesPage() {
  return (
    <div className="page-width">
      <header className="page-intro">
        <p className="page-kicker">The archive / 001—020</p>
        <h1>
          Ideas worth
          <br />
          <em>staying for.</em>
        </h1>
        <p>
          Twenty small invitations to look a little closer at the everyday things
          around us.
        </p>
      </header>

      <div aria-label={`${episodes.length} episodes`} className="catalog-count">
        <span>Full frequency</span>
        <span>{String(episodes.length).padStart(2, "0")} episodes</span>
      </div>
      <section aria-label="All episodes" className="episode-grid">
        {episodes.map((episode, index) => (
          <EpisodeCard
            episode={episode}
            featured={episode.id === podcast.featuredEpisodeId}
            index={index}
            key={episode.id}
          />
        ))}
      </section>
    </div>
  );
}
