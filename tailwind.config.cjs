/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				rajevlight: {
					primary: '#2563eb',
					'primary-content': '#f8fafc',
					secondary: '#7c3aed',
					accent: '#f472b6',
					neutral: '#1f2937',
					'neutral-content': '#f8fafc',
					'base-100': '#f4f6ff',
					'base-200': '#e2e8f0',
					'base-300': '#cbd5f5',
					'base-content': '#1f2937'
				}
			},
			{
				rajevdark: {
					primary: '#38bdf8',
					'primary-content': '#041221',
					secondary: '#cbd5f5',
					accent: '#f472b6',
					neutral: '#0f172a',
					'neutral-content': '#cbd5f5',
					'base-100': '#050816',
					'base-200': '#0f172a',
					'base-300': '#1e293b',
					'base-content': '#cbd5f5'
				}
			}
		],
		darkTheme: 'rajevdark',
		lightTheme: 'rajevlight'
	}
};

