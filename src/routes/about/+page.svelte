<script lang="ts">
	import { experience, PageSection, skills, siteConfig } from '$lib';
</script>

<PageSection
	eyebrow="About"
	title={`Meet the person behind ${siteConfig.title}`}
	description="I explore large-scale machine learning, intelligent tooling, and the infrastructure that keeps models useful."
>
	<p>
		I am a US-based machine learning engineer and Computer Engineering MS student at Rutgers University. My work spans multimodal AI,
		generative models, and the data platforms needed to support them. I enjoy connecting research ideas with production-grade
		systems that real users can depend on.
	</p>
</PageSection>

<PageSection
	eyebrow="Education"
	title="Rutgers University"
	description="Blending computer engineering, data science, and machine learning to build practical AI systems."
>
	<ul class="space-y-4 text-secondary">
		<li>
			<strong>MS in Computer Engineering</strong> (Machine Learning specialization), 2025 - present. Coursework highlights include
			Reinforcement Learning, Multimodal AI, and High Performance/Distributed Computing.
		</li>
		<li>
			<strong>BS in Computer Science, Computer Engineering, and Data Science</strong>, 2021 - 2025. Recipient of the Eleanor and Samuel
			Sneath Endowed Scholarship; completed advanced study in AI, Distributed Deep Learning, and Statistical Learning.
		</li>
	</ul>
</PageSection>

<PageSection
	eyebrow="Journey"
	title="Experience snapshot"
	description="Highlights from recent roles delivering reliable software and machine learning systems."
>
	<ul class="space-y-6">
		{#each experience as role}
			<li class="rounded-2xl border border-surface/40 bg-surface/60 p-6">
				<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{role.period}</p>
				<h3 class="mt-2 text-xl font-semibold text-primary">{role.title} - {role.company}</h3>
				<p class="mt-3 text-secondary">{role.description}</p>
			</li>
		{/each}
	</ul>
</PageSection>

<PageSection
	eyebrow="Toolkit"
	title="Skills at a glance"
	description="The languages, frameworks, and cloud platforms I reach for when building ML solutions."
>
	<div class="grid gap-6 md:grid-cols-3">
		{#each skills as category}
			<div class="rounded-2xl border border-primary/10 bg-primary/5 p-5">
				<h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{category.title}</h3>
				<ul class="mt-4 space-y-2 text-sm text-secondary">
					{#each category.skills as skill}
						<li>- {skill}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>
