// TODO: fill in real names, photos (paths under public/), and links.
// Leave `photos` empty and `link.url` empty until you have real ones — the UI skips empty fields.

export interface FavoriteCategory {
	id: string;
	label: string;
	blurb?: string;
	names?: string[];
	lists?: { heading: string; items: string[] }[];
	outro?: string;
	photos?: string[];
	link?: { label: string; url: string };
}

export const favoriteCategories: FavoriteCategory[] = [
	{
		id: "football",
		label: "Football",
		blurb:
			"I've supported Arsenal since I was a kid. Thierry Henry was the only footballer I knew back then — and just as I started learning more about the game, Mesut Özil moved to Arsenal. He's the one who really reeled me in to watching football, and I've been a die-hard Arsenal fan since. After years of waiting, watching them finally win the Premier League was one of the best sports moments of my life.",
		photos: ["/interests/arsenal-1.jpg", "/interests/arsenal-2.jpg", "/interests/arsenal-3.jpg", "/interests/arsenal-4.jpg"],
		link: { label: "Arsenal's title celebrations", url: "https://www.youtube.com/watch?v=rlW4mzzmoes" },
	},
	{
		id: "f1",
		label: "F1",
		names: ["TODO"],
	},
	{
		id: "basketball",
		label: "Basketball",
		names: ["TODO"],
	},
	{
		id: "books-movies",
		label: "Books & Movies",
		lists: [
			{ heading: "Books I'd recommend", items: ["The Anarchy", "Il Deserto", "Fathers and Sons", "A Gentleman in Moscow"] },
			{
				heading: "Top 4 movies right now (always changing)",
				items: ["The Batman", "Dune: Part Two", "The Godfather Part II", "Interstellar"],
			},
			{
				heading: "Honorable mentions",
				items: ["Incendies", "Arrival", "Oppenheimer", "Scarface", "The Godfather"],
			},
		],
		outro: "If it's not obvious by now, I'm a big Villeneuve and Nolan fan.",
	},
	{
		id: "travel",
		label: "Travel & Hikes",
		photos: [],
	},
];
