import { a as pageMeta, s as site } from "./site-B6vD042Q.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-CdhDVmSr.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${site.name} - ${site.tagline}` },
			{
				name: "description",
				content: "Game Crazy is a Leesburg tabletop game store and lounge for board games, MTG, D&D, miniatures, and weekly community events."
			},
			{
				name: "author",
				content: site.name
			},
			{
				property: "og:title",
				content: `${site.name} - ${site.tagline}`
			},
			{
				property: "og:description",
				content: "Leesburg tabletop game store and lounge. Play before you buy."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: site.brandLogo
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: site.brandLogo
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bungee&family=Space+Grotesk:wght@400;500;700;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/visit.tsx
var $$splitComponentImporter$5 = () => import("./visit-DdqlGgBV.js");
var Route$5 = createFileRoute("/visit")({
	head: () => ({
		meta: pageMeta(`Visit ${site.name}`, "Find Game Crazy at 2222 W Main St in Leesburg, FL. Get directions, call the store, or plan your next tabletop visit."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/reviews.tsx
var $$splitComponentImporter$4 = () => import("./reviews-fGod3HBo.js");
var Route$4 = createFileRoute("/reviews")({
	head: () => ({
		meta: pageMeta(`${site.name} Reviews`, "Read community reviews for Game Crazy, Leesburg's welcoming board game store and tabletop lounge."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$3 = () => import("./gallery-CIO927B7.js");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({
		meta: pageMeta(`${site.name} Gallery`, "Peek inside Game Crazy's Leesburg lounge, board game shelves, tables, storefront, and tabletop community spaces."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/events.tsx
var $$splitComponentImporter$2 = () => import("./events-C22rHEYM.js");
var Route$2 = createFileRoute("/events")({
	head: () => ({
		meta: pageMeta(`${site.name} Events`, "See Game Crazy's weekly tabletop schedule for MTG Commander, board game night, RPGs, craft night, and open play."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-Di375gc4.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: pageMeta(`About ${site.name}`, "Learn about Game Crazy's Leesburg board game lounge, tabletop community, and Market of Marion roots."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DAaMMYBr.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: pageMeta(`${site.name} - Board Game Store & Lounge in Leesburg, FL`, "Never Be Board Again. Game Crazy is Leesburg's tabletop store and lounge for MTG, D&D, board games, miniatures, and weekly events."),
		links: [{
			rel: "icon",
			href: site.brandLogo
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var VisitRoute = Route$5.update({
	id: "/visit",
	path: "/visit",
	getParentRoute: () => Route$6
});
var ReviewsRoute = Route$4.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => Route$6
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$6
});
var EventsRoute = Route$2.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	EventsRoute,
	GalleryRoute,
	ReviewsRoute,
	VisitRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
