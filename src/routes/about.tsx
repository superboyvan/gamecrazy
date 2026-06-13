import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { AboutSection, PageHero } from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta(
      `About ${site.name}`,
      "Learn about Game Crazy's Leesburg board game lounge, tabletop community, and Market of Marion roots.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Game Crazy"
        title="Built for the table."
        text="A friendly local store where players can discover games, meet people, and settle into a community that loves the hobby."
      />
      <AboutSection />
    </SiteLayout>
  );
}
