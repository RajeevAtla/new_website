<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import type { Theme } from '$lib/stores/theme';

	let currentTheme: Theme = 'rajevdark';
	$: currentTheme = $theme;
	$:
	label = currentTheme === 'rajevdark' ? 'Switch to light mode' : 'Switch to dark mode';
</script>

<button
	type="button"
	class="btn btn-ghost btn-sm gap-2"
	on:click={toggleTheme}
	aria-pressed={currentTheme === 'rajevdark'}
	title={label}
>
	<span aria-hidden="true">{currentTheme === 'rajevdark' ? '🌞' : '🌙'}</span>
	<span>{currentTheme === 'rajevdark' ? 'Light' : 'Dark'}</span>
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
