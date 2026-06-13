import { events, features, galleryItems, reviews, site, stats } from "@/content/site";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  text,
  cta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <FloatingShapes />
      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal variant="scale">
          <img
            src={site.brandLogo}
            alt="Game Crazy"
            className="logo-panel mx-auto mb-8 h-40 w-auto max-w-full rounded-3xl object-contain md:h-56"
          />
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
          <p className="mb-4 text-sm font-black tracking-[0.3em] text-accent">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={240}>
          <h1 className="text-5xl leading-none md:text-7xl">
            <span className="text-rainbow">{title}</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={360}>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">{text}</p>
        </ScrollReveal>
        {cta ? (
          <ScrollReveal variant="up" delay={480}>
            <a
              href={cta.href}
              className="mt-9 inline-flex rounded-full bg-rainbow px-8 py-4 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105"
            >
              {cta.label}
            </a>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-14 md:pt-20">
      <FloatingShapes />
      <div className="relative mx-auto max-w-6xl text-center">
        <ScrollReveal variant="scale">
          <img
            src={site.brandLogo}
            alt="Game Crazy logo"
            className="logo-panel mx-auto mb-7 h-44 w-auto max-w-full rounded-3xl object-contain md:h-64 lg:h-72"
          />
        </ScrollReveal>
        <ScrollReveal variant="up" delay={150}>
          <p className="mb-4 text-sm font-black tracking-[0.3em] text-accent md:text-base">
            {site.location.toUpperCase()} · SINCE 2012
          </p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={300}>
          <h1 className="text-5xl leading-none md:text-7xl lg:text-8xl">
            <span className="text-rainbow">Never Be</span>
            <br />
            <span className="text-foreground">Board Again.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={450}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A hidden-gem board game store and lounge with MTG, D&D, weekly events, and a community
            that actually wants you at the table.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={600}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/visit"
              className="rounded-full bg-rainbow px-8 py-4 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105"
            >
              Find the Store
            </a>
            <a
              href="/events"
              className="rounded-full border-2 border-border px-8 py-4 font-black transition hover:-translate-y-1 hover:border-primary"
            >
              See Weekly Events
            </a>
          </div>
        </ScrollReveal>
        <StaggerContainer className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 text-sm text-muted-foreground md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} variant="flip">
              <Stat value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function Marquee() {
  const words = [
    "MAGIC: THE GATHERING",
    "★",
    "DUNGEONS & DRAGONS",
    "★",
    "BOARD GAMES",
    "★",
    "MINIATURES",
    "★",
    "CARD SLEEVES",
    "★",
    "DICE",
    "★",
    "PUZZLES",
    "★",
    "RPG NIGHTS",
    "★",
  ];

  return (
    <ScrollReveal variant="fade">
      <div className="overflow-hidden border-y border-border bg-background/40 py-4">
        <div className="flex animate-marquee whitespace-nowrap font-display text-2xl">
          {Array(2)
            .fill(null)
            .map((_, repeat) => (
              <div key={repeat} className="flex items-center gap-10 px-5">
                {words.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className={index % 2 ? "text-accent" : "text-rainbow"}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function AboutSection({ showFeatures = true }: { showFeatures?: boolean }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <ScrollReveal variant="left">
          <div>
            <SectionIntro eyebrow="About the Store" title="A local hidden gem in Lake County." />
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Game Crazy is built for players who want to try board games, card games, and
                tabletop adventures before they buy them.
              </p>
              <p>
                After 13 years at the Market of Marion, Billy and Dana built a permanent Leesburg
                home for the thousands of gamers they met along the way.
              </p>
              <p>
                The lounge encourages social interaction, family time, and low-pressure discovery
                for gamers of every experience level.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="right" delay={160}>
          <div className="relative">
            <img
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              className="magnetic-card aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
            />
            <div className="absolute -bottom-6 -left-4 rotate-[-6deg] rounded-2xl bg-rainbow p-1 shadow-neon md:-left-6">
              <div className="rounded-xl bg-background px-6 py-4">
                <p className="font-display text-2xl text-rainbow">$5</p>
                <p className="text-xs font-black">UNLIMITED LOUNGE PLAY</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      {showFeatures ? <FeatureGrid /> : null}
    </section>
  );
}

export function FeatureGrid() {
  return (
    <StaggerContainer className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
      {features.map((feature) => (
        <StaggerItem key={feature.title} variant="scale">
          <article className="glow-card h-full rounded-3xl border border-border bg-card/80 p-6 shadow-card">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent">
              {feature.eyebrow}
            </p>
            <h3 className="text-2xl">{feature.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{feature.text}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function EventsSection({
  limit,
  showIntro = true,
}: {
  limit?: number;
  showIntro?: boolean;
}) {
  const visibleEvents = limit ? events.slice(0, limit) : events;

  return (
    <section className="bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="mb-14 text-center">
            <SectionIntro
              eyebrow="What's Happening"
              title="Weekly Events"
              text="Themed nights for every kind of player. No group? No problem - the community makes room."
              centered
            />
          </div>
        ) : null}
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <StaggerItem key={event.day} variant="up">
              <article className="glow-card group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-2 hover:border-primary">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
                  style={{ background: `var(--${event.color})` }}
                />
                <p className="font-display text-5xl" style={{ color: `var(--${event.color})` }}>
                  {event.day}
                </p>
                <h3 className="mt-2 text-xl font-black">{event.title}</h3>
                <p className="mt-1 font-bold text-muted-foreground">{event.time}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{event.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal variant="fade" delay={160}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Schedule may vary - call {site.phone} to confirm event times.
          </p>
        </ScrollReveal>
        {limit ? <SectionCta href="/events" label="View the full event schedule" /> : null}
      </div>
    </section>
  );
}

export function GallerySection({
  limit,
  showIntro = true,
}: {
  limit?: number;
  showIntro?: boolean;
}) {
  const visibleItems = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="mb-14 text-center">
            <SectionIntro eyebrow="Inside the Lounge" title="Where the Games Live" centered />
          </div>
        ) : null}
        <StaggerContainer className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
          {visibleItems.map((item) => (
            <StaggerItem key={item.title} className={item.className} variant="scale">
              <figure className="gallery-card group relative h-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 font-black">
                  {item.title}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {limit ? <SectionCta href="/gallery" label="Open the full gallery" /> : null}
      </div>
    </section>
  );
}

export function ReviewsSection({
  limit,
  showIntro = true,
}: {
  limit?: number;
  showIntro?: boolean;
}) {
  const visibleReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <section className="bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="mb-14 text-center">
            <SectionIntro eyebrow="★★★★★ 4.7 On Google" title="Loved by the Community" centered />
          </div>
        ) : null}
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review) => (
            <StaggerItem key={review.name} variant="flip">
              <figure className="glow-card h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-2 hover:shadow-neon">
                <div className="mb-3 text-accent">★★★★★</div>
                <blockquote className="leading-relaxed text-muted-foreground">
                  "{review.text}"
                </blockquote>
                <figcaption className="mt-4 font-black">- {review.name}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {limit ? <SectionCta href="/reviews" label="Read more reviews" /> : null}
      </div>
    </section>
  );
}

export function VisitSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <ScrollReveal variant="left">
          <div>
            <SectionIntro eyebrow="Come Play" title="Visit Us in Leesburg" />
            <div className="space-y-5 text-lg">
              <InfoRow label="Address" value={site.address} />
              <InfoRow label="Phone" value={site.phone} href={site.phoneHref} />
              <InfoRow label="Email" value={site.email} href={site.emailHref} />
              <InfoRow label="Hours" value="Call ahead for today's table schedule" />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-rainbow px-6 py-3 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105"
              >
                Get Directions
              </a>
              <a
                href={site.phoneHref}
                className="rounded-full border-2 border-border px-6 py-3 font-black transition hover:-translate-y-1 hover:border-primary"
              >
                Call the Store
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="right" delay={160}>
          <a href={site.mapUrl} target="_blank" rel="noreferrer" className="block group">
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="magnetic-card aspect-[4/3] w-full rounded-3xl object-cover shadow-card transition group-hover:scale-[1.02]"
            />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <ScrollReveal variant="up">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      </ScrollReveal>
      <ScrollReveal variant="up" delay={100}>
        <h2 className="mb-6 text-4xl md:text-5xl">{title}</h2>
      </ScrollReveal>
      {text ? (
        <ScrollReveal variant="up" delay={200}>
          <p className="text-muted-foreground">{text}</p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}

function SectionCta({ href, label }: { href: string; label: string }) {
  return (
    <ScrollReveal variant="up" delay={160}>
      <div className="mt-10 text-center">
        <a
          href={href}
          className="inline-flex rounded-full border-2 border-border px-6 py-3 font-black transition hover:-translate-y-1 hover:border-primary hover:text-rainbow"
        >
          {label}
        </a>
      </div>
    </ScrollReveal>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 px-4 py-5 shadow-card">
      <p className="font-display text-3xl text-rainbow">{value}</p>
      <p className="mt-1 text-xs font-bold tracking-widest">{label}</p>
    </div>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} className="transition hover:text-rainbow">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="rounded-2xl border border-border bg-card/50 p-4">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">{label}</p>
      <p className="mt-1 text-foreground">{content}</p>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-10 top-20 h-16 w-16 rounded-2xl bg-neon-pink/30 animate-float" />
      <div
        className="absolute right-20 top-40 h-12 w-12 rounded-xl bg-neon-yellow/30 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 h-20 w-20 rounded-3xl bg-neon-blue/20 animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-32 right-1/4 h-10 w-10 rounded-full bg-neon-green/25 animate-float"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}
