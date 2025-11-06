<script lang="ts">
	import { base } from '$app/paths';
	import { PageSection, projects, siteConfig } from '$lib';

	const featured = projects.slice(0, 2);
	const { title, tagline, description, socials } = siteConfig;

	const resolve = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>{title} | {tagline}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="mx-auto w-full max-w-5xl px-4 py-16">
	<div class="space-y-6">
		<p class="text-xs uppercase tracking-eyebrow text-primary/70">{tagline}</p>
		<h1 class="text-4xl font-semibold text-primary sm:text-5xl">
			Hi, I'm {title.split(' ')[0]}. I turn research ideas into production ML systems.
		</h1>
		<p class="max-w-2xl text-base text-base-content/80 leading-relaxed">
			{description}
		</p>
		<div class="flex flex-wrap gap-3">
			{#each socials as social}
				<a class="btn btn-outline btn-sm btn-primary" href={social.href} target="_blank" rel="noopener">{social.title}</a>
			{/each}
		</div>
	</div>
</section>

<PageSection
	eyebrow="Highlights"
	title="Selected projects"
	description="A snapshot of the work I enjoy: scaling machine learning workflows, building intelligent tools, and shipping reliable user experiences."
>
	<div class="grid gap-4 md:grid-cols-2">
		{#each featured as project}
			<article class="space-y-3 rounded-xl border border-base-200 bg-base-100 p-5">
				<p class="text-xs uppercase tracking-caps text-primary/70">{project.period}</p>
				<h3 class="text-lg font-semibold text-primary">{project.title}</h3>
				<p class="text-sm text-base-content/80">{project.summary}</p>
				<div class="flex flex-wrap gap-2 text-xs text-base-content/60">
					{#each project.tags as tag}
						<span class="rounded-full border border-base-200 px-3 py-1">{tag}</span>
					{/each}
				</div>
				<div class="flex flex-wrap gap-3 text-sm font-medium">
					{#each project.links as link}
						<a class="link link-primary" href={link.href} target="_blank" rel="noopener">{link.title}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
	<p class="text-sm text-base-content/70">
		Curious for more? <a class="link link-primary" href={resolve('/projects')}>Browse the full projects archive.</a>
	</p>
</PageSection>

<PageSection
	eyebrow="How I help"
	title="Ways to collaborate"
	description="I partner with teams to accelerate ML research, harden data pipelines, and deliver the tooling that keeps models in production."
>
	<ul class="grid gap-3 md:grid-cols-3">
		{#each ['ML platform and tooling', 'End-to-end data and evaluation pipelines', 'Rapid prototyping for AI products'] as service}
			<li class="rounded-xl border border-base-200 bg-base-100 p-4 text-sm text-base-content/80">
				{service}
			</li>
		{/each}
	</ul>
</PageSection>

<PageSection
	eyebrow="Stay in touch"
	title="Let's collaborate"
	description="Share details about your roadmap or research direction. I reply quickly to thoughtful inquiries."
>
	<a class="btn btn-primary" href={`mailto:${siteConfig.email}`}>
		Start a conversation
	</a>
</PageSection>
