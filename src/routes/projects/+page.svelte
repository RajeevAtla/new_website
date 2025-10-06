<script lang="ts">
	import { PageSection, projects } from '$lib';
</script>

<PageSection
	eyebrow="Projects"
	title="Selected work and experiments"
	description="Machine learning research, data infrastructure, and product experiments that capture how I build reliable AI systems."
>
	<div class="space-y-4">
		{#each projects as project}
			<article class="space-y-3 rounded-xl border border-base-200 bg-base-100 p-5">
				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<h3 class="text-xl font-semibold text-primary">{project.title}</h3>
					<p class="text-xs uppercase tracking-[0.2em] text-primary/70">{project.period}</p>
				</div>
				<p class="text-sm text-base-content/80">{project.summary}</p>
				<div class="flex flex-wrap gap-2 text-xs text-base-content/60">
					{#each project.tags as tag}
						<span class="rounded-full border border-base-200 px-3 py-1">{tag}</span>
					{/each}
				</div>
				<div class="flex flex-wrap gap-3 text-sm font-medium">
					{#each project.links as link}
						<a class="link" href={link.href} target="_blank" rel="noopener">{link.title}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</PageSection>
