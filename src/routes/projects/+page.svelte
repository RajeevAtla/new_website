<script lang="ts">
	import { PageSection, projects } from '$lib';
</script>

<PageSection
	eyebrow="Projects"
	title="Selected work and experiments"
	description="Machine learning research, data infrastructure, and product experiments that capture how I build reliable AI systems."
>
	<div class="space-y-6">
		{#each projects as project}
			<article class="rounded-2xl border border-surface/40 bg-surface/60 p-6 shadow-lg shadow-black/10">
				<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<h3 class="text-2xl font-semibold text-primary">{project.title}</h3>
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{project.period}</p>
				</div>
				<p class="mt-3 text-secondary">{project.summary}</p>
				<ul class="mt-4 flex flex-wrap gap-2 text-xs text-secondary/70">
					{#each project.tags as tag}
						<li class="rounded-full border border-primary/20 px-3 py-1">{tag}</li>
					{/each}
				</ul>
				<div class="mt-6 flex flex-wrap gap-3 text-sm font-medium">
					{#each project.links as link}
						<a class="text-primary transition hover:text-primary/70" href={link.href} target="_blank" rel="noopener">{link.title}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</PageSection>
