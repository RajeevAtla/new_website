export type ProjectLink = {
	title: string;
	href: string;
};

export type Project = {
	slug: string;
	title: string;
	summary: string;
	period: string;
	tags: string[];
	links: ProjectLink[];
};

export const projects: Project[] = [
	{
		slug: "dexmcp",
		title: "dexMCP",
		summary:
			"Open Model Context Protocol server with strongly typed tool definitions powering reusable automation across DSPy and LangChain clients.",
		period: "2025",
		tags: ["Python", "LangChain", "DSPy", "MCP"],
		links: [{ title: "Project", href: "https://bit.ly/dexmcp" }],
	},
	{
		slug: "supercongan",
		title: "SuperconGAN",
		summary:
			"PyTorch GAN that models superconductivity datasets and ships as a PyPI package adopted across 60k+ downloads.",
		period: "2024",
		tags: ["PyTorch", "Generative AI", "Python"],
		links: [{ title: "Project", href: "https://bit.ly/3z7JaqZ" }],
	},
	{
		slug: "imdb-sentiment",
		title: "IMDB Sentiment Analysis",
		summary:
			"Team-built NLP pipeline with TF-IDF bigrams that reaches 90.5% accuracy on 25k movie reviews.",
		period: "2023",
		tags: ["NLP", "Scikit-Learn", "Python"],
		links: [{ title: "Project", href: "https://bit.ly/3C3RpWK" }],
	},
	{
		slug: "cityscape",
		title: "Cityscape",
		summary:
			"HackExeter-winning Flutter app delivering 100+ curated city tours backed by a MongoDB and Express API.",
		period: "2021",
		tags: ["Flutter", "Node.js", "MongoDB"],
		links: [{ title: "Project", href: "https://bit.ly/3OZjJ07" }],
	},
	{
		slug: "eyeq",
		title: "EyeQ",
		summary:
			"Elixir and Rust powered transcription service that processes gigabyte-scale media with sub-3 second latency.",
		period: "2020",
		tags: ["Elixir", "Rust", "Docker"],
		links: [{ title: "Project", href: "https://bit.ly/3RsAyBL" }],
	},
];
