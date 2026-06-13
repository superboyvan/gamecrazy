import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero, ReviewsSection } from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: pageMeta(
      `${site.name} Reviews`,
      "Read community reviews for Game Crazy, Leesburg's welcoming board game store and tabletop lounge.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Player Reviews"
        title="People like this place."
        text="The recurring theme is simple: friendly staff, friendly players, and a store that helps people find a seat."
      />
      <ReviewsSection showIntro={false} />
    </SiteLayout>
  );
}
