<script lang="ts">
	import { base } from '$app/paths';
	import { PageSection, projects, siteConfig } from '$lib';

	const featured = projects.slice(0, 2);
	const { title, tagline, description, socials } = siteConfig;

	const resolve = (path: string) => `${base}${path}`;
</script>

<section class="mx-auto max-w-5xl px-6 pb-12 pt-20">
	<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{tagline}</p>
	<h1 class="mt-6 text-4xl font-semibold text-primary sm:text-5xl">
		Hi, I'm {title.split(' ')[0]}. I turn research ideas into production ML systems.
	</h1>
	<p class="mt-6 max-w-2xl text-lg leading-relaxed text-secondary">
		{description}
	</p>
	<div class="mt-8 flex flex-wrap gap-3">
		{#each socials as social}
			<a
				class="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
				href={social.href}
				target="_blank"
				rel="noopener"
			>
				{social.title}
			</a>
		{/each}
	</div>
</section>

<PageSection
	eyebrow="Highlights"
	title="Selected projects"
	description="A snapshot of the work I enjoy: scaling machine learning workflows, building intelligent tools, and shipping reliable user experiences."
>
	<div class="grid gap-6 md:grid-cols-2">
		{#each featured as project}
			<article class="flex h-full flex-col gap-4 rounded-2xl border border-surface/40 bg-surface/60 p-6 shadow-lg shadow-black/10">
				<p class="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">{project.period}</p>
				<h3 class="text-xl font-semibold text-primary">{project.title}</h3>
				<p>{project.summary}</p>
				<ul class="flex flex-wrap gap-2 text-xs text-secondary/70">
					{#each project.tags as tag}
						<li class="rounded-full border border-primary/20 px-3 py-1">{tag}</li>
					{/each}
				</ul>
				<div class="mt-auto flex flex-wrap gap-3 text-sm font-medium">
					{#each project.links as link}
						<a class="text-primary transition hover:text-primary/70" href={link.href} target="_blank" rel="noopener">{link.title}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
	<p class="mt-8 text-sm text-secondary/70">
		Curious for more? <a class="underline decoration-dotted underline-offset-4 hover:text-primary" href={resolve('/projects')}>Browse the full projects archive.</a>
	</p>
</PageSection>

<PageSection
	eyebrow="How I help"
	title="Ways to collaborate"
	description="I partner with teams to accelerate ML research, harden data pipelines, and deliver the tooling that keeps models in production."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each ['ML platform and tooling', 'End-to-end data and evaluation pipelines', 'Rapid prototyping for AI products'] as service}
			<div class="rounded-2xl border border-primary/10 bg-primary/5 p-5 text-sm leading-relaxed text-secondary">
				{service}
			</div>
		{/each}
	</div>
</PageSection>

<PageSection
	eyebrow="Stay in touch"
	title="Let's collaborate"
	description="Share details about your roadmap or research direction. I reply quickly to thoughtful inquiries."
>
	<a class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-background transition hover:bg-primary/90" href={`mailto:${siteConfig.email}`}>
		Start a conversation
		<span aria-hidden="true">-></span>
	</a>
</PageSection>
