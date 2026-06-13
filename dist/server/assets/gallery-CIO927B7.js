import { l as SiteLayout, o as PageHero, r as GallerySection } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
function GalleryPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Gallery",
		title: "A store with table presence.",
		text: "Shelves, tables, lounge corners, and game-night energy - the good little details that make a local shop feel alive."
	}), /* @__PURE__ */ jsx(GallerySection, { showIntro: false })] });
}
//#endregion
export { GalleryPage as component };
