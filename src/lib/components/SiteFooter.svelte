<script lang="ts">
	import { siteConfig } from '$lib/config/site';

	const { title, socials, email } = siteConfig;
	const year = new Date().getFullYear();
</script>

<footer class="border-t bg-base-100 py-8 text-sm text-base-content/70">
	<div class="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<p class="font-semibold text-base-content">{title}</p>
			<p>&copy; {year} {title}</p>
			<a class="link" href={`mailto:${email}`}>{email}</a>
		</div>
		<ul class="flex flex-wrap gap-3">
			{#each socials as social}
				<li>
					<a class="link" href={social.href} rel="noopener" target="_blank">{social.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
