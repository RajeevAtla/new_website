import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type Theme = 'rajevlight' | 'rajevdark';

const storageKey = 'website-theme';
const themeStore = writable<Theme>('rajevdark');

const applyTheme = (value: Theme, persist = true) => {
	if (!browser) return;
	document.documentElement.dataset.theme = value;
	document.documentElement.style.colorScheme = value === 'rajevdark' ? 'dark' : 'light';
	if (persist) {
		localStorage.setItem(storageKey, value);
	}
};

if (browser) {
	const stored = (localStorage.getItem(storageKey) as Theme | null) ?? undefined;
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const system = systemPrefersDark ? 'rajevdark' : 'rajevlight';
	const initial = stored ?? system;

	themeStore.set(initial);
	applyTheme(initial, false);

	themeStore.subscribe((value) => applyTheme(value));

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	const onSystemChange = (event: MediaQueryListEvent) => {
		if (!localStorage.getItem(storageKey)) {
			themeStore.set(event.matches ? 'rajevdark' : 'rajevlight');
		}
	};
	media.addEventListener('change', onSystemChange);
}

export const theme = {
	subscribe: themeStore.subscribe
};

export const setTheme = (value: Theme) => themeStore.set(value);

export const toggleTheme = () => {
	const next = get(themeStore) === 'rajevdark' ? 'rajevlight' : 'rajevdark';
	themeStore.set(next);
};
