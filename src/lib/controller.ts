import {
	storeNumbers,
	storeHeadings,
	storeExtras,
	addHistory,
	updateVerse,
	setSearchText
} from './model';
let numbers: boolean;
storeNumbers.subscribe((data) => {
	numbers = data;
});
let headings: boolean;
storeHeadings.subscribe((data) => {
	headings = data;
});
let extras: boolean;
storeExtras.subscribe((data) => {
	extras = data;
});
export const search = async (myVerse: string) => {
	const ret = await fetch(
		`/api/verse?verse=${encodeURIComponent(
			myVerse
		)}&numbers=${numbers}&headings=${headings}&extras=${extras}`
	);
	const data = await ret.json();
	setSearchText(data.canonical);
	updateVerse(data.passages);
	if (data.passages.length) {
		addHistory(data.canonical);
	}
};
