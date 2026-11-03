import { podcast } from "@/content/podcast";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">{podcast.name}</p>
          <p className="footer-note">Stay curious. Keep listening.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          <a href="/">Home</a>
          <a href="/episodes">Episodes</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
        </nav>
        <p className="footer-credit">An independent little corner of the internet.</p>
      </div>
    </footer>
  );
}
