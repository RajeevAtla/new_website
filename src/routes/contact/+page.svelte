<script lang="ts">
	import { PageSection, siteConfig } from '$lib';
</script>

<svelte:head>
	<title>{siteConfig.title} | Contact</title>
	<meta
		name="description"
		content="Reach out to Rajeev Atla to discuss machine learning roadmaps, research collaborations, or production AI tooling."
	/>
</svelte:head>

<PageSection
	eyebrow="Contact"
	title="Start a conversation"
	description="Tell me about the ML problem, research challenge, or product idea you want to explore. I typically respond within two business days."
>
	<div class="space-y-4">
		<div class="rounded-xl border border-base-200 bg-base-100 p-5">
			<h3 class="text-lg font-semibold text-primary">Email</h3>
			<p class="mt-2 text-sm text-base-content/80">
				Send a note to <a class="link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with your goals, timeline, and any background context.
			</p>
			<a class="btn btn-primary btn-sm mt-3" href={`mailto:${siteConfig.email}`}>Compose email</a>
		</div>
		<div class="rounded-xl border border-base-200 bg-base-100 p-5">
			<h3 class="text-lg font-semibold text-primary">What helps</h3>
			<ul class="mt-2 space-y-2 text-sm text-base-content/80 list-disc pl-5">
				<li>Problem space or opportunity you're exploring</li>
				<li>Current stage (idea, prototype, production)</li>
				<li>Timelines, constraints, and teammates involved</li>
			</ul>
		</div>
		<div class="rounded-xl border border-base-200 bg-base-100 p-5">
			<h3 class="text-lg font-semibold text-primary">Prefer a form?</h3>
			<p class="mt-2 text-sm text-base-content/80">
				Plug in services like <a class="link" href="https://formspree.io/" target="_blank" rel="noopener">Formspree</a> or
				<a class="link" href="https://www.netlify.com/products/forms/" target="_blank" rel="noopener">Netlify Forms</a> once you're ready to capture submissions directly on the site.
			</p>
		</div>
	</div>
</PageSection>
