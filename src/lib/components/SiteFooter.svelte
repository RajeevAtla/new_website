<script lang="ts">
	import { siteConfig } from '$lib/config/site';

	const { title, socials, email } = siteConfig;
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-surface/40 bg-surface/30 py-10 text-sm text-secondary/80">
	<div class="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<p class="font-semibold text-secondary">&copy; {year} {title}</p>
			<a class="hover:text-primary" href={`mailto:${email}`}>{email}</a>
		</div>
		<ul class="flex flex-wrap gap-3">
			{#each socials as social}
				<li>
					<a class="rounded-full px-3 py-2 transition hover:bg-primary/10 hover:text-primary" href={social.href} rel="noopener" target="_blank">
						{social.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
