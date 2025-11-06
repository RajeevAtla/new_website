<script lang="ts">
	import { PageSection, siteConfig, skills } from '$lib';
</script>

<svelte:head>
	<title>{siteConfig.title} | About</title>
	<meta
		name="description"
		content="Learn about Rajeev Atla's background, Rutgers education, and the experience delivering production-grade machine learning systems."
	/>
</svelte:head>

<PageSection
	eyebrow="About"
	title={`Meet the person behind ${siteConfig.title}`}
	description="I explore large-scale machine learning, intelligent tooling, and the infrastructure that keeps models useful."
>
	<div class="space-y-4 text-base text-base-content/80">
		<p>
			I am a US-based machine learning engineer and Computer Engineering MS student at Rutgers University. My work spans multimodal AI,
			generative models, and the data platforms needed to support them. I enjoy connecting research ideas with production-grade systems
			that real users can depend on.
		</p>
	</div>
</PageSection>

<PageSection
	eyebrow="Education"
	title="Rutgers University"
	description="Blending computer engineering, data science, and machine learning to build practical AI systems."
>
	<ul class="space-y-4 text-sm text-base-content/80">
		<li class="rounded-xl border border-base-200 bg-base-100 p-4">
			<p class="text-xs uppercase tracking-caps text-primary/70">2025 - Present</p>
			<p class="font-semibold text-base-content">MS in Computer Engineering (Machine Learning specialization)</p>
			<p class="mt-2">
				Coursework highlights include Reinforcement Learning, Multimodal AI, and High Performance/Distributed Computing.
			</p>
		</li>
		<li class="rounded-xl border border-base-200 bg-base-100 p-4">
			<p class="text-xs uppercase tracking-caps text-primary/70">2021 - 2025</p>
			<p class="font-semibold text-base-content">BS in Computer Science, Computer Engineering, and Data Science</p>
			<p class="mt-2">
				Eleanor and Samuel Sneath Endowed Scholarship recipient; advanced study in AI, Distributed Deep Learning, and Statistical Learning.
			</p>
		</li>
	</ul>
</PageSection>

<PageSection
	eyebrow="Toolkit"
	title="Skills at a glance"
	description="The languages, frameworks, and cloud platforms I reach for when building ML solutions."
>
	<div class="grid gap-4 md:grid-cols-3">
		{#each skills as category}
			<div class="space-y-3 rounded-xl border border-base-200 bg-base-100 p-4">
				<p class="text-xs uppercase tracking-caps text-primary/70">{category.title}</p>
				<ul class="space-y-2 text-sm text-base-content/80">
					{#each category.skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>
