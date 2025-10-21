<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import type { Theme } from '$lib/stores/theme';

	let currentTheme: Theme = 'rajevdark';
	$: currentTheme = $theme;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	$: effectiveTheme = mounted ? currentTheme : 'rajevdark';
	$: label = effectiveTheme === 'rajevdark' ? 'Switch to light mode' : 'Switch to dark mode';
</script>

<button
	type="button"
	class="btn btn-ghost btn-sm gap-2"
	on:click={toggleTheme}
	aria-pressed={effectiveTheme === 'rajevdark'}
	title={label}
>
	<span aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
		{#if effectiveTheme === 'rajevdark'}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
				<path
					d="M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Zm0-11a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM12 3a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1Zm0 20a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm9-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1Zm13.364-7.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm-11.314 11.314a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0Zm11.314 2.121a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM6.757 6.757a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 6.05 4.636l.707.707a1 1 0 0 1 0 1.414Z"
				/>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
				<path
					d="M12.02 21.5a9.5 9.5 0 0 1-8.953-12.4 1 1 0 0 1 1.623-.43 6.5 6.5 0 0 0 9.64-8.386 1 1 0 0 1 .907-1.385A9.5 9.5 0 0 1 21.5 12c0 5.247-4.256 9.5-9.48 9.5Zm-6.469-10.373A7.5 7.5 0 1 0 17.5 6.5a8.5 8.5 0 0 1-11.949-.373Z"
				/>
			</svg>
		{/if}
	</span>
	<span>{effectiveTheme === 'rajevdark' ? 'Light' : 'Dark'}</span>
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
