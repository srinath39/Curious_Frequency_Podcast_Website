import { EpisodeCard } from "@/components/episode-card";
import { featuredEpisode, podcast } from "@/content/podcast";

export default function Home() {
  return (
    <div className="page-width">
      <section aria-labelledby="home-title" className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span aria-hidden="true" className="live-dot" />
            An independent podcast for the curious
          </p>
          <h1 id="home-title">
            Curiosity
            <br />
            <em>sounds like this.</em>
          </h1>
          <p className="hero-description">
            {podcast.subject} {podcast.purpose}
          </p>
          <div className="hero-actions">
            <a className="button-dark" href="/episodes">
              Explore all episodes <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="/about">
              Get to know the show
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="hero-art">
          <span className="hero-orbit" />
          <span className="hero-art-word">
            <span>Signal / 001</span>
            <span>stay curious</span>
          </span>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">A good place to begin</p>
            <h2 id="featured-heading">This week&apos;s frequency</h2>
          </div>
          <a className="text-link" href="/episodes">
            See all 20 episodes <span aria-hidden="true">↗</span>
          </a>
        </div>
        <EpisodeCard episode={featuredEpisode} index={0} featured />
      </section>
    </div>
  );
}
