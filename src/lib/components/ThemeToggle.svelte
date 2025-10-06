<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import type { Theme } from '$lib/stores/theme';

	let currentTheme: Theme = 'dark';
	$: currentTheme = $theme;
	$:
	label = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
</script>

<button
	type="button"
	class="rounded-full border border-primary/40 bg-surface/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
	on:click={toggleTheme}
	aria-pressed={currentTheme === 'dark'}
	title={label}
>
	<span aria-hidden="true">{currentTheme === 'dark' ? 'Light' : 'Dark'}</span>
	<span class="sr-only">{label}</span>
</button>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
