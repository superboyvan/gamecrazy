import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { EventsSection, PageHero, VisitSection } from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: pageMeta(
      `${site.name} Events`,
      "See Game Crazy's weekly tabletop schedule for MTG Commander, board game night, RPGs, craft night, and open play.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Weekly Events"
        title="Find your table."
        text="From Commander pods to board game nights and painting sessions, there is always a reason to roll in."
        cta={{ href: site.phoneHref, label: "Call to Confirm Times" }}
      />
      <EventsSection showIntro={false} />
      <VisitSection />
    </SiteLayout>
  );
}
