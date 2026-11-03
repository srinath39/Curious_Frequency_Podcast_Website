const navigation = [
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a aria-label="Curious Frequency home" className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span>
            curious
            <br />
            frequency<span className="brand-period">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="/episodes">
            Find your frequency <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
