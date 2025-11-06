import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			letterSpacing: {
				eyebrow: "0.3em",
				caps: "0.2em",
			},
		},
	},
} satisfies Config;
