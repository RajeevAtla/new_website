export type SkillCategory = {
	title: string;
	skills: string[];
};

export const skills: SkillCategory[] = [
	{
		title: "Languages",
		skills: [
			"Python",
			"R",
			"SQL",
			"Java",
			"Scala",
			"C/C++",
			"Rust",
			"Elixir",
			"MATLAB",
			"Bash",
		],
	},
	{
		title: "Machine Learning",
		skills: [
			"PyTorch",
			"TensorFlow",
			"Keras",
			"LangChain",
			"LangGraph",
			"Scikit-Learn",
			"NumPy",
			"Pandas",
		],
	},
	{
		title: "Data Visualization",
		skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
	},
	{
		title: "Cloud & DevOps",
		skills: [
			"AWS",
			"Azure",
			"Vercel",
			"Docker",
			"Kubernetes",
			"GitHub Actions",
		],
	},
	{
		title: "Tools & Databases",
		skills: [
			"Jupyter",
			"Apache Kafka",
			"Git",
			"Linux (Ubuntu)",
			"PostgreSQL",
			"MongoDB",
			"Jira",
		],
	},
];
