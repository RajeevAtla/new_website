import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const inferredBase = repoName ? `/${repoName}` : '';
const basePath = process.env.BASE_PATH ?? (process.env.GITHUB_PAGES ? inferredBase : '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : basePath
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
