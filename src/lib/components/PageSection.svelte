<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionProps = {
		eyebrow?: string;
		title: string;
		description?: string;
		children?: Snippet;
	};

	const section = $props() as SectionProps;
</script>

<section class="mx-auto w-full max-w-5xl px-4 py-12">
	<header class="mb-8 space-y-3">
		{#if section.eyebrow}
			<span class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
				{section.eyebrow}
			</span>
		{/if}
		<h2 class="text-3xl font-semibold text-primary sm:text-4xl">{section.title}</h2>
		{#if section.description}
			<p class="max-w-3xl text-base text-base-content/80 leading-relaxed">{section.description}</p>
		{/if}
	</header>
	<div class="space-y-6">
		{@render section.children?.()}
	</div>
</section>
