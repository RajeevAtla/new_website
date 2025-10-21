<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { navLinks, siteConfig } from '$lib/config/site';

	const { title } = siteConfig;

	const resolveHref = (href: string) => {
		if (/^https?:\/\//.test(href) || href.startsWith('mailto:')) {
			return href;
		}

		if (href === '/') {
			return base || '/';
		}

		return `${base}${href}`;
	};

	$: currentPath = (() => {
		const pathname = $page.url.pathname;
		if (pathname.startsWith(base)) {
			const sliced = pathname.slice(base.length) || '/';
			return sliced.startsWith('/') ? sliced : `/${sliced}`;
		}
		return pathname || '/';
	})();

	let mobileOpen = false;
	const toggleMobile = () => (mobileOpen = !mobileOpen);
	const closeMobile = () => (mobileOpen = false);
</script>

<header class="border-b bg-base-100/90 backdrop-blur">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
		<a href={resolveHref('/')} class="text-lg font-semibold text-primary">
			{title}
		</a>
		<nav class="hidden items-center gap-2 text-sm font-medium sm:flex">
			{#each navLinks as link}
				<a
					href={resolveHref(link.href)}
					class={`btn btn-ghost btn-sm ${currentPath === link.href ? 'btn-active text-primary' : 'text-base-content/70 hover:text-primary'}`}
				>
					{link.title}
				</a>
			{/each}
			<ThemeToggle />
		</nav>
		<div class="flex items-center gap-2 sm:hidden">
			<ThemeToggle />
			<button
				type="button"
				class="btn btn-ghost btn-sm"
				on:click={toggleMobile}
				aria-expanded={mobileOpen}
				aria-controls="mobile-nav"
			>
				<span aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
					{#if mobileOpen}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
							<path d="M6.343 5.929a1 1 0 0 1 1.414 0L12 10.172l4.243-4.243a1 1 0 1 1 1.414 1.414L13.414 11.586l4.243 4.243a1 1 0 1 1-1.414 1.414L12 13l-4.243 4.243a1 1 0 0 1-1.414-1.414l4.243-4.243-4.243-4.243a1 1 0 0 1 0-1.414Z" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
							<path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z" />
						</svg>
					{/if}
				</span>
				<span class="sr-only">Toggle navigation</span>
			</button>
		</div>
	</div>
	{#if mobileOpen}
		<ul id="mobile-nav" class="mx-auto mt-2 w-full max-w-5xl space-y-2 px-4 pb-4 text-sm">
			{#each navLinks as link}
				<li>
					<a
						href={resolveHref(link.href)}
						class={`btn btn-ghost btn-sm w-full justify-start ${currentPath === link.href ? 'btn-active text-primary' : ''}`}
						on:click={closeMobile}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
