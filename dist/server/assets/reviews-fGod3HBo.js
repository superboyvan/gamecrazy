import { l as SiteLayout, o as PageHero, s as ReviewsSection } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/reviews.tsx?tsr-split=component
function ReviewsPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Player Reviews",
		title: "People like this place.",
		text: "The recurring theme is simple: friendly staff, friendly players, and a store that helps people find a seat."
	}), /* @__PURE__ */ jsx(ReviewsSection, { showIntro: false })] });
}
//#endregion
export { ReviewsPage as component };
