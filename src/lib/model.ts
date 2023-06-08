import { writable } from 'svelte/store';

export const sidebarData = writable<string[]>([]);
export const storeVerse = writable<string | null>();
export const storeNumbers = writable<boolean>(false);
export const storeHeadings = writable<boolean>(false);
export const storeExtras = writable<boolean>(false);
export const storeSearchText = writable<string>('');

export const setNumbers = (set: boolean) => {
	storeNumbers.set(set);
};

export const setSearchText = (text: string) => {
	storeSearchText.set(text);
};

export const setHeadings = (set: boolean) => {
	storeHeadings.set(set);
};

export const setExtras = (set: boolean) => {
	storeExtras.set(set);
};

export const addHistory = (search: string) => {
	sidebarData.update((data) => {
		if (data.includes(search)) {
			return data;
		} else {
			return [...data, search];
		}
	});
};

export const clearHistory = () => {
	sidebarData.update(() => {
		return [];
	});
};

export const updateVerse = (text: string) => {
	storeVerse.set(text);
};
export default sidebarData;
