import { c as stats, i as navLinks, n as features, o as reviews, r as galleryItems, s as site, t as events } from "./site-B6vD042Q.js";
import React, { createElement, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/hooks/useInView.ts
function useInView(options = {}) {
	const ref = useRef(null);
	const hasEntered = useRef(false);
	const [inView, setInView] = useState(false);
	const { once = false, resetOnScrollUp = true, root, rootMargin, threshold } = options;
	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				hasEntered.current = true;
				setInView(true);
				if (once) observer.disconnect();
				return;
			}
			if (!once && hasEntered.current) {
				const exitedBelowViewport = entry.boundingClientRect.top >= window.innerHeight;
				if (!resetOnScrollUp || exitedBelowViewport) setInView(false);
			}
		}, {
			root,
			rootMargin,
			threshold: threshold ?? .12
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [
		once,
		resetOnScrollUp,
		root,
		rootMargin,
		threshold
	]);
	return {
		ref,
		inView
	};
}
//#endregion
//#region src/components/site/reveal.tsx
function revealClass(variant) {
	return `anim-${variant}`;
}
function ScrollReveal({ children, className = "", variant = "up", delay = 0, as = "div" }) {
	const { ref, inView } = useInView();
	return createElement(as, {
		ref,
		className: `${revealClass(variant)} ${inView ? "anim-visible" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` }
	}, children);
}
function StaggerContainer({ children, className = "" }) {
	const { ref, inView } = useInView();
	const count = React.Children.count(children);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `stagger-children ${inView ? "stagger-visible" : ""} ${className}`,
		style: { "--stagger-count": count },
		children: React.Children.map(children, (child, index) => React.isValidElement(child) ? React.cloneElement(child, {
			inView,
			index,
			count
		}) : child)
	});
}
function StaggerItem({ children, className = "", inView, index = 0, count = 1, variant = "up" }) {
	return /* @__PURE__ */ jsx("div", {
		className: `${revealClass(variant)} ${inView ? "anim-visible" : ""} ${className}`,
		style: {
			"--i": index,
			"--stagger-count": count
		},
		children
	});
}
//#endregion
//#region src/components/site/layout.tsx
function SiteLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "site-shell min-h-screen bg-hero overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "page-enter",
				children
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ jsx("header", {
		className: "site-header sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "brand-mark group flex items-center gap-3",
					"aria-label": "Game Crazy home",
					children: /* @__PURE__ */ jsx("span", {
						className: "brand-image-wrap",
						children: /* @__PURE__ */ jsx("img", {
							src: site.brandLogo,
							alt: "Game Crazy",
							className: "h-12 w-auto rounded-xl object-contain"
						})
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-6 text-sm font-bold md:flex",
					children: navLinks.map((item) => /* @__PURE__ */ jsx("a", {
						href: item.href,
						className: "nav-link",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ jsx("a", {
					href: site.phoneHref,
					className: "hidden rounded-full bg-rainbow px-4 py-2 text-sm font-black text-background shadow-neon transition hover:-translate-y-0.5 hover:scale-105 sm:inline-flex",
					children: site.phone
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ jsxs(ScrollReveal, {
		variant: "fade",
		as: "footer",
		className: "border-t border-border px-6 py-10 text-center text-sm text-muted-foreground",
		children: [/* @__PURE__ */ jsx("img", {
			src: site.brandLogo,
			alt: "Game Crazy",
			className: "mx-auto mb-4 h-20 w-auto rounded-2xl object-contain opacity-90"
		}), /* @__PURE__ */ jsxs("p", { children: [
			"© ",
			(/* @__PURE__ */ new Date()).getFullYear(),
			" ",
			site.name,
			" LLC · ",
			site.address,
			" · ",
			site.tagline
		] })]
	});
}
//#endregion
//#region src/components/site/sections.tsx
function PageHero({ eyebrow, title, text, cta }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden px-6 py-20 md:py-28",
		children: [/* @__PURE__ */ jsx(FloatingShapes, {}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-4xl text-center",
			children: [
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "scale",
					children: /* @__PURE__ */ jsx("img", {
						src: site.brandLogo,
						alt: "Game Crazy",
						className: "logo-panel mx-auto mb-8 h-40 w-auto max-w-full rounded-3xl object-contain md:h-56"
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 120,
					children: /* @__PURE__ */ jsx("p", {
						className: "mb-4 text-sm font-black tracking-[0.3em] text-accent",
						children: eyebrow
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 240,
					children: /* @__PURE__ */ jsx("h1", {
						className: "text-5xl leading-none md:text-7xl",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-rainbow",
							children: title
						})
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 360,
					children: /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl",
						children: text
					})
				}),
				cta ? /* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 480,
					children: /* @__PURE__ */ jsx("a", {
						href: cta.href,
						className: "mt-9 inline-flex rounded-full bg-rainbow px-8 py-4 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105",
						children: cta.label
					})
				}) : null
			]
		})]
	});
}
function HomeHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden px-6 pb-24 pt-14 md:pt-20",
		children: [/* @__PURE__ */ jsx(FloatingShapes, {}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-6xl text-center",
			children: [
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "scale",
					children: /* @__PURE__ */ jsx("img", {
						src: site.brandLogo,
						alt: "Game Crazy logo",
						className: "logo-panel mx-auto mb-7 h-44 w-auto max-w-full rounded-3xl object-contain md:h-64 lg:h-72"
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 150,
					children: /* @__PURE__ */ jsxs("p", {
						className: "mb-4 text-sm font-black tracking-[0.3em] text-accent md:text-base",
						children: [site.location.toUpperCase(), " · SINCE 2012"]
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 300,
					children: /* @__PURE__ */ jsxs("h1", {
						className: "text-5xl leading-none md:text-7xl lg:text-8xl",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-rainbow",
								children: "Never Be"
							}),
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "Board Again."
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 450,
					children: /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl",
						children: "A hidden-gem board game store and lounge with MTG, D&D, weekly events, and a community that actually wants you at the table."
					})
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "up",
					delay: 600,
					children: /* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ jsx("a", {
							href: "/visit",
							className: "rounded-full bg-rainbow px-8 py-4 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105",
							children: "Find the Store"
						}), /* @__PURE__ */ jsx("a", {
							href: "/events",
							className: "rounded-full border-2 border-border px-8 py-4 font-black transition hover:-translate-y-1 hover:border-primary",
							children: "See Weekly Events"
						})]
					})
				}),
				/* @__PURE__ */ jsx(StaggerContainer, {
					className: "mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 text-sm text-muted-foreground md:grid-cols-4",
					children: stats.map((stat) => /* @__PURE__ */ jsx(StaggerItem, {
						variant: "flip",
						children: /* @__PURE__ */ jsx(Stat, {
							value: stat.value,
							label: stat.label
						})
					}, stat.label))
				})
			]
		})]
	});
}
function Marquee() {
	const words = [
		"MAGIC: THE GATHERING",
		"★",
		"DUNGEONS & DRAGONS",
		"★",
		"BOARD GAMES",
		"★",
		"MINIATURES",
		"★",
		"CARD SLEEVES",
		"★",
		"DICE",
		"★",
		"PUZZLES",
		"★",
		"RPG NIGHTS",
		"★"
	];
	return /* @__PURE__ */ jsx(ScrollReveal, {
		variant: "fade",
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden border-y border-border bg-background/40 py-4",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex animate-marquee whitespace-nowrap font-display text-2xl",
				children: Array(2).fill(null).map((_, repeat) => /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-10 px-5",
					children: words.map((word, index) => /* @__PURE__ */ jsx("span", {
						className: index % 2 ? "text-accent" : "text-rainbow",
						children: word
					}, `${word}-${index}`))
				}, repeat))
			})
		})
	});
}
function AboutSection({ showFeatures = true }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-6 py-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				variant: "left",
				children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionIntro, {
					eyebrow: "About the Store",
					title: "A local hidden gem in Lake County."
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 text-lg leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("p", { children: "Game Crazy is built for players who want to try board games, card games, and tabletop adventures before they buy them." }),
						/* @__PURE__ */ jsx("p", { children: "After 13 years at the Market of Marion, Billy and Dana built a permanent Leesburg home for the thousands of gamers they met along the way." }),
						/* @__PURE__ */ jsx("p", { children: "The lounge encourages social interaction, family time, and low-pressure discovery for gamers of every experience level." })
					]
				})] })
			}), /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "right",
				delay: 160,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsx("img", {
						src: galleryItems[4].src,
						alt: galleryItems[4].alt,
						className: "magnetic-card aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute -bottom-6 -left-4 rotate-[-6deg] rounded-2xl bg-rainbow p-1 shadow-neon md:-left-6",
						children: /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl bg-background px-6 py-4",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl text-rainbow",
								children: "$5"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs font-black",
								children: "UNLIMITED LOUNGE PLAY"
							})]
						})
					})]
				})
			})]
		}), showFeatures ? /* @__PURE__ */ jsx(FeatureGrid, {}) : null]
	});
}
function FeatureGrid() {
	return /* @__PURE__ */ jsx(StaggerContainer, {
		className: "mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3",
		children: features.map((feature) => /* @__PURE__ */ jsx(StaggerItem, {
			variant: "scale",
			children: /* @__PURE__ */ jsxs("article", {
				className: "glow-card h-full rounded-3xl border border-border bg-card/80 p-6 shadow-card",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-xs font-black uppercase tracking-[0.25em] text-accent",
						children: feature.eyebrow
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl",
						children: feature.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: feature.text
					})
				]
			})
		}, feature.title))
	});
}
function EventsSection({ limit, showIntro = true }) {
	const visibleEvents = limit ? events.slice(0, limit) : events;
	return /* @__PURE__ */ jsx("section", {
		className: "bg-card/30 px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [
				showIntro ? /* @__PURE__ */ jsx("div", {
					className: "mb-14 text-center",
					children: /* @__PURE__ */ jsx(SectionIntro, {
						eyebrow: "What's Happening",
						title: "Weekly Events",
						text: "Themed nights for every kind of player. No group? No problem - the community makes room.",
						centered: true
					})
				}) : null,
				/* @__PURE__ */ jsx(StaggerContainer, {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: visibleEvents.map((event) => /* @__PURE__ */ jsx(StaggerItem, {
						variant: "up",
						children: /* @__PURE__ */ jsxs("article", {
							className: "glow-card group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-2 hover:border-primary",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60",
									style: { background: `var(--${event.color})` }
								}),
								/* @__PURE__ */ jsx("p", {
									className: "font-display text-5xl",
									style: { color: `var(--${event.color})` },
									children: event.day
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-xl font-black",
									children: event.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 font-bold text-muted-foreground",
									children: event.time
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: event.detail
								})
							]
						})
					}, event.day))
				}),
				/* @__PURE__ */ jsx(ScrollReveal, {
					variant: "fade",
					delay: 160,
					children: /* @__PURE__ */ jsxs("p", {
						className: "mt-8 text-center text-sm text-muted-foreground",
						children: [
							"Schedule may vary - call ",
							site.phone,
							" to confirm event times."
						]
					})
				}),
				limit ? /* @__PURE__ */ jsx(SectionCta, {
					href: "/events",
					label: "View the full event schedule"
				}) : null
			]
		})
	});
}
function GallerySection({ limit, showIntro = true }) {
	const visibleItems = limit ? galleryItems.slice(0, limit) : galleryItems;
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [
				showIntro ? /* @__PURE__ */ jsx("div", {
					className: "mb-14 text-center",
					children: /* @__PURE__ */ jsx(SectionIntro, {
						eyebrow: "Inside the Lounge",
						title: "Where the Games Live",
						centered: true
					})
				}) : null,
				/* @__PURE__ */ jsx(StaggerContainer, {
					className: "grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4",
					children: visibleItems.map((item) => /* @__PURE__ */ jsx(StaggerItem, {
						className: item.className,
						variant: "scale",
						children: /* @__PURE__ */ jsxs("figure", {
							className: "gallery-card group relative h-full overflow-hidden rounded-2xl shadow-card",
							children: [/* @__PURE__ */ jsx("img", {
								src: item.src,
								alt: item.alt,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ jsx("figcaption", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 font-black",
								children: item.title
							})]
						})
					}, item.title))
				}),
				limit ? /* @__PURE__ */ jsx(SectionCta, {
					href: "/gallery",
					label: "Open the full gallery"
				}) : null
			]
		})
	});
}
function ReviewsSection({ limit, showIntro = true }) {
	const visibleReviews = limit ? reviews.slice(0, limit) : reviews;
	return /* @__PURE__ */ jsx("section", {
		className: "bg-card/30 px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [
				showIntro ? /* @__PURE__ */ jsx("div", {
					className: "mb-14 text-center",
					children: /* @__PURE__ */ jsx(SectionIntro, {
						eyebrow: "★★★★★ 4.7 On Google",
						title: "Loved by the Community",
						centered: true
					})
				}) : null,
				/* @__PURE__ */ jsx(StaggerContainer, {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: visibleReviews.map((review) => /* @__PURE__ */ jsx(StaggerItem, {
						variant: "flip",
						children: /* @__PURE__ */ jsxs("figure", {
							className: "glow-card h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-2 hover:shadow-neon",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-3 text-accent",
									children: "★★★★★"
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "leading-relaxed text-muted-foreground",
									children: [
										"\"",
										review.text,
										"\""
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "mt-4 font-black",
									children: ["- ", review.name]
								})
							]
						})
					}, review.name))
				}),
				limit ? /* @__PURE__ */ jsx(SectionCta, {
					href: "/reviews",
					label: "Read more reviews"
				}) : null
			]
		})
	});
}
function VisitSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ jsx(ScrollReveal, {
				variant: "left",
				children: /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionIntro, {
						eyebrow: "Come Play",
						title: "Visit Us in Leesburg"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5 text-lg",
						children: [
							/* @__PURE__ */ jsx(InfoRow, {
								label: "Address",
								value: site.address
							}),
							/* @__PURE__ */ jsx(InfoRow, {
								label: "Phone",
								value: site.phone,
								href: site.phoneHref
							}),
							/* @__PURE__ */ jsx(InfoRow, {
								label: "Email",
								value: site.email,
								href: site.emailHref
							}),
							/* @__PURE__ */ jsx(InfoRow, {
								label: "Hours",
								value: "Call ahead for today's table schedule"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ jsx("a", {
							href: site.directionsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-full bg-rainbow px-6 py-3 font-black text-background shadow-neon transition hover:-translate-y-1 hover:scale-105",
							children: "Get Directions"
						}), /* @__PURE__ */ jsx("a", {
							href: site.phoneHref,
							className: "rounded-full border-2 border-border px-6 py-3 font-black transition hover:-translate-y-1 hover:border-primary",
							children: "Call the Store"
						})]
					})
				] })
			}), /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "right",
				delay: 160,
				children: /* @__PURE__ */ jsx("a", {
					href: site.mapUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "block group",
					children: /* @__PURE__ */ jsx("img", {
						src: galleryItems[3].src,
						alt: galleryItems[3].alt,
						className: "magnetic-card aspect-[4/3] w-full rounded-3xl object-cover shadow-card transition group-hover:scale-[1.02]"
					})
				})
			})]
		})
	});
}
function SectionIntro({ eyebrow, title, text, centered = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: centered ? "mx-auto max-w-2xl text-center" : "",
		children: [
			/* @__PURE__ */ jsx(ScrollReveal, {
				variant: "up",
				children: /* @__PURE__ */ jsx("p", {
					className: "mb-4 text-sm font-black uppercase tracking-[0.25em] text-accent",
					children: eyebrow
				})
			}),
			/* @__PURE__ */ jsx(ScrollReveal, {
				variant: "up",
				delay: 100,
				children: /* @__PURE__ */ jsx("h2", {
					className: "mb-6 text-4xl md:text-5xl",
					children: title
				})
			}),
			text ? /* @__PURE__ */ jsx(ScrollReveal, {
				variant: "up",
				delay: 200,
				children: /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground",
					children: text
				})
			}) : null
		]
	});
}
function SectionCta({ href, label }) {
	return /* @__PURE__ */ jsx(ScrollReveal, {
		variant: "up",
		delay: 160,
		children: /* @__PURE__ */ jsx("div", {
			className: "mt-10 text-center",
			children: /* @__PURE__ */ jsx("a", {
				href,
				className: "inline-flex rounded-full border-2 border-border px-6 py-3 font-black transition hover:-translate-y-1 hover:border-primary hover:text-rainbow",
				children: label
			})
		})
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card/60 px-4 py-5 shadow-card",
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-display text-3xl text-rainbow",
			children: value
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-xs font-bold tracking-widest",
			children: label
		})]
	});
}
function InfoRow({ label, value, href }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card/50 p-4",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs font-black uppercase tracking-[0.25em] text-accent",
			children: label
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-foreground",
			children: href ? /* @__PURE__ */ jsx("a", {
				href,
				className: "transition hover:text-rainbow",
				children: value
			}) : value
		})]
	});
}
function FloatingShapes() {
	return /* @__PURE__ */ jsxs("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute left-10 top-20 h-16 w-16 rounded-2xl bg-neon-pink/30 animate-float" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute right-20 top-40 h-12 w-12 rounded-xl bg-neon-yellow/30 animate-float",
				style: { animationDelay: "2s" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-20 left-1/4 h-20 w-20 rounded-3xl bg-neon-blue/20 animate-float",
				style: { animationDelay: "4s" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-32 right-1/4 h-10 w-10 rounded-full bg-neon-green/25 animate-float",
				style: { animationDelay: "1s" }
			})
		]
	});
}
//#endregion
export { Marquee as a, VisitSection as c, HomeHero as i, SiteLayout as l, EventsSection as n, PageHero as o, GallerySection as r, ReviewsSection as s, AboutSection as t };
