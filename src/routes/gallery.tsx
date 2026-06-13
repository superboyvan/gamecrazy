import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { GallerySection, PageHero } from "@/components/site/sections";
import { pageMeta, site } from "@/content/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: pageMeta(
      `${site.name} Gallery`,
      "Peek inside Game Crazy's Leesburg lounge, board game shelves, tables, storefront, and tabletop community spaces.",
    ),
    links: [{ rel: "icon", href: site.brandLogo }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="A store with table presence."
        text="Shelves, tables, lounge corners, and game-night energy - the good little details that make a local shop feel alive."
      />
      <GallerySection showIntro={false} />
    </SiteLayout>
  );
}
