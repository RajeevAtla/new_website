export type NavLink = {
	title: string;
	href: string;
	description?: string;
};

export type SocialLink = {
	title: string;
	href: string;
};

export const siteConfig = {
	title: "Rajeev Atla",
	tagline: "Machine learning engineer & Rutgers MS student",
	description:
		"Exploring large-scale AI systems, multimodal models, and intelligent tooling while studying Computer Engineering at Rutgers.",
	email: "rajeevatla101@gmail.com",
	location: "New Brunswick, NJ",
	socials: <SocialLink[]>[
		{ title: "GitHub", href: "https://github.com/RajeevAtla" },
		{ title: "LinkedIn", href: "https://www.linkedin.com/in/rajeev-atla" },
		{ title: "Website", href: "https://rajeevatla.com" },
		{ title: "Blog", href: "https://rajeevatla.com/blog"},
	],
};

export const navLinks: NavLink[] = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{ title: "Projects", href: "/projects" },
	{ title: "Contact", href: "/contact" },
];
