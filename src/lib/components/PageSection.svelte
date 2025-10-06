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

<section class="mx-auto w-full max-w-5xl px-4 py-12">
	<header class="mb-8 space-y-3">
		{#if eyebrow}
			<span class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{eyebrow}</span>
		{/if}
		<h2 class="text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
		{#if description}
			<p class="max-w-3xl text-base text-base-content/80 leading-relaxed">{description}</p>
		{/if}
	</header>
	<div class="space-y-6">
		{@render children?.()}
	</div>
</section>
