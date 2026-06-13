import { s as site } from "./site-B6vD042Q.js";
import { c as VisitSection, l as SiteLayout, n as EventsSection, o as PageHero } from "./sections-BMFHTXMm.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/events.tsx?tsr-split=component
function EventsPage() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			eyebrow: "Weekly Events",
			title: "Find your table.",
			text: "From Commander pods to board game nights and painting sessions, there is always a reason to roll in.",
			cta: {
				href: site.phoneHref,
				label: "Call to Confirm Times"
			}
		}),
		/* @__PURE__ */ jsx(EventsSection, { showIntro: false }),
		/* @__PURE__ */ jsx(VisitSection, {})
	] });
}
//#endregion
export { EventsPage as component };
