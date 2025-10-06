<script lang="ts">
	import { PageSection, siteConfig } from '$lib';
</script>

<PageSection
	eyebrow="Contact"
	title="Start a conversation"
	description="Tell me about the ML problem, research challenge, or product idea you want to explore. I typically respond within two business days."
>
	<div class="space-y-6">
		<div class="rounded-2xl border border-primary/10 bg-primary/5 p-6">
			<h3 class="text-lg font-semibold text-primary">Email</h3>
			<p class="mt-2 text-secondary">
				Send a note to <a class="underline decoration-dotted underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with your goals, timeline, and any background context.
			</p>
		</div>
		<div class="rounded-2xl border border-surface/40 bg-surface/60 p-6">
			<h3 class="text-lg font-semibold text-primary">What to include</h3>
			<ul class="mt-3 space-y-2 text-sm text-secondary">
				<li>- The problem you're solving or opportunity you're exploring</li>
				<li>- The state of the project today (idea, prototype, production)</li>
				<li>- Timelines, constraints, and teammates involved</li>
			</ul>
		</div>
	</div>
</PageSection>
