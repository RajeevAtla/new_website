<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { navLinks, siteConfig } from '$lib/config/site';

	const { title, tagline } = siteConfig;

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
</script>

<header class="border-b border-surface/40 bg-surface/30 backdrop-blur">
	<div class="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
		<a href={resolveHref('/')} class="block">
			<p class="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">{tagline}</p>
			<h1 class="text-2xl font-semibold text-primary transition hover:text-primary/80">{title}</h1>
		</a>
		<nav>
			<ul class="flex flex-wrap items-center gap-3 text-sm font-medium">
				{#each navLinks as link}
					{#key link.href}
						<li>
							<a
								class="rounded-full px-4 py-2 transition hover:bg-primary/10 hover:text-primary"
								class:font-semibold={currentPath === link.href}
								href={resolveHref(link.href)}
							>
								{link.title}
							</a>
						</li>
					{/key}
				{/each}
			</ul>
		</nav>
	</div>
</header>
