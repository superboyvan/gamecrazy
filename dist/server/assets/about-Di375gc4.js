import { l as SiteLayout, o as PageHero, t as AboutSection } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		eyebrow: "About Game Crazy",
		title: "Built for the table.",
		text: "A friendly local store where players can discover games, meet people, and settle into a community that loves the hobby."
	}), /* @__PURE__ */ jsx(AboutSection, {})] });
}
//#endregion
export { AboutPage as component };
