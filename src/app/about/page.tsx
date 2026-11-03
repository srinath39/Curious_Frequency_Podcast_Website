import type { Metadata } from "next";
import { podcast } from "@/content/podcast";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${podcast.name}, a show for the curious.`,
};

export default function AboutPage() {
  return (
    <div className="page-width about-page">
      <header className="about-heading">
        <div>
          <p className="page-kicker">A note on the signal</p>
          <h1>
            The world is
            <br />
            <em>full of why.</em>
          </h1>
        </div>
        <div aria-hidden="true" className="about-stamp">
          A show for
          <span>the curious</span>
        </div>
      </header>

      <section aria-labelledby="about-copy-title" className="about-copy">
        <h2 id="about-copy-title">The short version</h2>
        <div>
          <p>
            {podcast.name} is a show about {podcast.subject.toLowerCase()}
          </p>
          <p>{podcast.purpose}</p>
          <p>
            Each episode starts somewhere familiar—a sound, a habit, an object on
            your desk—and follows the thread into a bigger story. No specialist
            knowledge needed. Just a little room for wonder.
          </p>
        </div>
      </section>
    </div>
  );
}
