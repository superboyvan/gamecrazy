import type React from "react";
import { navLinks, site } from "@/content/site";
import { ScrollReveal } from "./reveal";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell min-h-screen bg-hero overflow-x-hidden">
      <SiteHeader />
      <main className="page-enter">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a
          href="/"
          className="brand-mark group flex items-center gap-3"
          aria-label="Game Crazy home"
        >
          <span className="brand-image-wrap">
            <img
              src={site.brandLogo}
              alt="Game Crazy"
              className="h-12 w-auto rounded-xl object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden rounded-full bg-rainbow px-4 py-2 text-sm font-black text-background shadow-neon transition hover:-translate-y-0.5 hover:scale-105 sm:inline-flex"
        >
          {site.phone}
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <ScrollReveal
      variant="fade"
      as="footer"
      className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground"
    >
      <img
        src={site.brandLogo}
        alt="Game Crazy"
        className="mx-auto mb-4 h-20 w-auto rounded-2xl object-contain opacity-90"
      />
      <p>
        © {new Date().getFullYear()} {site.name} LLC · {site.address} · {site.tagline}
      </p>
    </ScrollReveal>
  );
}
