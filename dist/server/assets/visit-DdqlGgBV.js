import { s as site } from "./site-B6vD042Q.js";
import { c as VisitSection, l as SiteLayout, o as PageHero } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/visit.tsx?tsr-split=component
function VisitPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "Visit the Store",
		title: "Roll up to Leesburg.",
		text: "Need directions, hours, or a quick event check? Everything you need for the next visit is here.",
		cta: {
			href: site.directionsUrl,
			label: "Get Directions"
		}
	}), /* @__PURE__ */ jsx(VisitSection, {})] });
}
//#endregion
export { VisitPage as component };
