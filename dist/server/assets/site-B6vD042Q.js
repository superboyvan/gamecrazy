//#region src/assets/game-crazy-logo.png
var game_crazy_logo_default = "/assets/game-crazy-logo-BGdeYODy.png";
//#endregion
//#region src/assets/game-crazy-board-wall.webp
var game_crazy_board_wall_default = "/assets/game-crazy-board-wall-CkbAxxqH.webp";
//#endregion
//#region src/assets/game-crazy-game-night.webp
var game_crazy_game_night_default = "/assets/game-crazy-game-night-D90Wbg4l.webp";
//#endregion
//#region src/assets/game-crazy-lounge-shelf.webp
var game_crazy_lounge_shelf_default = "/assets/game-crazy-lounge-shelf-BMsjxWXM.webp";
//#endregion
//#region src/assets/game-crazy-market-booth.webp
var game_crazy_market_booth_default = "/assets/game-crazy-market-booth-CFthiWZO.webp";
//#endregion
//#region src/assets/game-crazy-storefront.webp
var game_crazy_storefront_default = "/assets/game-crazy-storefront-aRADH9c7.webp";
//#endregion
//#region src/content/site.ts
var site = {
	name: "Game Crazy",
	tagline: "Never Be Board Again!!!",
	location: "Leesburg, Florida",
	phone: "(352) 461-3361",
	phoneHref: "tel:3524613361",
	email: "billy5bolling5@gmail.com",
	emailHref: "mailto:billy5bolling5@gmail.com",
	address: "2222 W Main St, Leesburg, FL 34748",
	directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=2222+W+Main+St,+Leesburg,+FL+34748",
	mapUrl: "https://www.google.com/maps?q=2222+W+Main+St,+Leesburg,+FL+34748",
	brandLogo: game_crazy_logo_default
};
var navLinks = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Events",
		href: "/events"
	},
	{
		label: "Gallery",
		href: "/gallery"
	},
	{
		label: "Reviews",
		href: "/reviews"
	},
	{
		label: "Visit",
		href: "/visit"
	}
];
var stats = [
	{
		value: "4.7★",
		label: "Google Rating"
	},
	{
		value: "80+",
		label: "Google Reviews"
	},
	{
		value: "13yrs",
		label: "Serving Players"
	},
	{
		value: "$5",
		label: "Unlimited Lounge Play"
	}
];
var events = [
	{
		day: "MON",
		title: "Open Play",
		time: "12 - 9 PM",
		color: "neon-pink",
		detail: "Grab a table, try a new game, and settle into the lounge."
	},
	{
		day: "WED",
		title: "MTG Commander",
		time: "6 - 10 PM",
		color: "neon-blue",
		detail: "Casual Commander pods for regulars, new players, and deck tinkerers."
	},
	{
		day: "THU",
		title: "Board Game Night",
		time: "6 - 9 PM",
		color: "neon-green",
		detail: "Learn something new or bring an old favorite for the table."
	},
	{
		day: "FRI",
		title: "D&D / RPG Night",
		time: "6 - 10 PM",
		color: "neon-purple",
		detail: "Roll dice, meet a party, and find your next campaign story."
	},
	{
		day: "SAT",
		title: "MTG Casual Commander",
		time: "12 - 5 PM",
		color: "neon-orange",
		detail: "Weekend games with a friendly, welcoming Commander crowd."
	},
	{
		day: "SUN",
		title: "Craft & Paint Night",
		time: "2 - 6 PM",
		color: "neon-yellow",
		detail: "Paint minis, build terrain, sleeve cards, or just make cool stuff."
	}
];
var reviews = [
	{
		name: "Taylor Hardaway",
		text: "We love coming here! The owner is nice and knowledgeable, and the themed nights are a blast. Wonderful community full of non-judgment."
	},
	{
		name: "Brandon Soares",
		text: "Game Crazy is not just a store but a fantastic community. You do not need your own group to play - they help you find one."
	},
	{
		name: "Aviva Chepurny",
		text: "Very impressed with this hidden treasure. Billy has a great personality and all the tools we need to have a great time and not break the bank."
	},
	{
		name: "Rob Munsey",
		text: "I love this place! Has a huge selection of single MTG cards, especially older ones, plus set boosters and precons."
	},
	{
		name: "Michael K",
		text: "Super awesome owner Billy shared his passion for board games with us. We visited, became members, and rented games to take home."
	},
	{
		name: "Robert Ivancovich",
		text: "Great store, the staff and community are friendly to new players, with plenty of MTG and games to choose from."
	}
];
var galleryItems = [
	{
		src: game_crazy_lounge_shelf_default,
		alt: "Game Crazy lounge shelves",
		title: "The Lounge",
		className: "md:col-span-2 md:row-span-2"
	},
	{
		src: game_crazy_game_night_default,
		alt: "Players gathered around a game table",
		title: "Game Nights",
		className: "md:col-span-2"
	},
	{
		src: game_crazy_market_booth_default,
		alt: "Game Crazy booth at Market of Marion",
		title: "Market Roots",
		className: "md:col-span-2"
	},
	{
		src: game_crazy_storefront_default,
		alt: "Game Crazy storefront",
		title: "Leesburg Storefront",
		className: "md:col-span-2"
	},
	{
		src: game_crazy_board_wall_default,
		alt: "Shelves of board games",
		title: "Board Game Wall",
		className: "md:col-span-2"
	}
];
var features = [
	{
		eyebrow: "Play First",
		title: "Try before you buy",
		text: "Browse the shelves, pick a game, and learn it at the table before committing."
	},
	{
		eyebrow: "Find People",
		title: "No group required",
		text: "Weekly events make it easier to meet players without the awkward quest-giver energy."
	},
	{
		eyebrow: "Bring Family",
		title: "Comfortable lounge",
		text: "Tables, seating, friendly help, and a community that makes room for new folks."
	}
];
function pageMeta(title, description) {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:image",
			content: site.brandLogo
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: site.brandLogo
		}
	];
}
//#endregion
export { pageMeta as a, stats as c, navLinks as i, features as n, reviews as o, galleryItems as r, site as s, events as t };
