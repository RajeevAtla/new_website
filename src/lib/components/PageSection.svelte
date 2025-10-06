<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionProps = {
		eyebrow?: string;
		title: string;
		description?: string;
		children?: Snippet;
	};

	const props = $props();
	const { eyebrow, title, description, children } = props as SectionProps;
</script>

<section class="mx-auto max-w-5xl px-6 py-16">
	<header class="mb-10 max-w-3xl space-y-3">
		{#if eyebrow}
			<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{eyebrow}</p>
		{/if}
		<h2 class="text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
		{#if description}
			<p class="text-base text-secondary leading-relaxed">{description}</p>
		{/if}
	</header>
	<div class="space-y-6 text-secondary text-base leading-relaxed">
		{@render children?.()}
	</div>
</section>
