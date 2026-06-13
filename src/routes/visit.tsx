import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero, VisitSection } from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: pageMeta(
      `Visit ${site.name}`,
      "Find Game Crazy at 2222 W Main St in Leesburg, FL. Get directions, call the store, or plan your next tabletop visit.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Visit the Store"
        title="Roll up to Leesburg."
        text="Need directions, hours, or a quick event check? Everything you need for the next visit is here."
        cta={{ href: site.directionsUrl, label: "Get Directions" }}
      />
      <VisitSection />
    </SiteLayout>
  );
}
