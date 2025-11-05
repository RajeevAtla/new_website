<script lang="ts">
	import '../app.css';
	import { SiteFooter, SiteHeader, siteConfig } from '$lib';
	import favicon from '$lib/assets/favicon.svg';

	const { children } = $props();
</script>

<svelte:head>
	<title>{siteConfig.title}</title>
	<meta name="description" content={siteConfig.description} />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<SiteHeader />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<SiteFooter />
</div>
