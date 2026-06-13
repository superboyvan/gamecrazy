import { a as Marquee, c as VisitSection, i as HomeHero, l as SiteLayout, n as EventsSection, r as GallerySection, s as ReviewsSection, t as AboutSection } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(HomeHero, {}),
		/* @__PURE__ */ jsx(Marquee, {}),
		/* @__PURE__ */ jsx(AboutSection, {}),
		/* @__PURE__ */ jsx(EventsSection, { limit: 3 }),
		/* @__PURE__ */ jsx(GallerySection, { limit: 4 }),
		/* @__PURE__ */ jsx(ReviewsSection, { limit: 3 }),
		/* @__PURE__ */ jsx(VisitSection, {})
	] });
}
//#endregion
export { Index as component };
