import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const storageKey = 'website-theme';
const themeStore = writable<Theme>('dark');

const applyTheme = (value: Theme, persist = true) => {
	if (!browser) return;
	document.documentElement.dataset.theme = value;
	document.documentElement.style.colorScheme = value;
	if (persist) {
		localStorage.setItem(storageKey, value);
	}
};

if (browser) {
	const stored = (localStorage.getItem(storageKey) as Theme | null) ?? undefined;
	const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const initial = stored ?? system;

	themeStore.set(initial);
	applyTheme(initial, false);

	themeStore.subscribe((value) => applyTheme(value));

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	const onSystemChange = (event: MediaQueryListEvent) => {
		if (!localStorage.getItem(storageKey)) {
			themeStore.set(event.matches ? 'dark' : 'light');
		}
	};
	media.addEventListener('change', onSystemChange);
}

export const theme = {
	subscribe: themeStore.subscribe
};

export const setTheme = (value: Theme) => themeStore.set(value);

export const toggleTheme = () => {
	const next = get(themeStore) === 'dark' ? 'light' : 'dark';
	themeStore.set(next);
};
