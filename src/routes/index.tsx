import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  AboutSection,
  EventsSection,
  GallerySection,
  HomeHero,
  Marquee,
  ReviewsSection,
  VisitSection,
} from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      `${site.name} - Board Game Store & Lounge in Leesburg, FL`,
      "Never Be Board Again. Game Crazy is Leesburg's tabletop store and lounge for MTG, D&D, board games, miniatures, and weekly events.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <HomeHero />
      <Marquee />
      <AboutSection />
      <EventsSection limit={3} />
      <GallerySection limit={4} />
      <ReviewsSection limit={3} />
      <VisitSection />
    </SiteLayout>
  );
}
