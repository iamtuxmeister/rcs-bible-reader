import { ESV_TOKEN } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const numbers = url.searchParams.get('numbers') === 'true' ? true : false;
	const extras = url.searchParams.get('extras') === 'true' ? true : false;
	const headings = url.searchParams.get('headings') === 'true' ? true : false;
	const myVerse = url.searchParams.get('verse');
	const includePassageReferences = '&include-passage-references=' + true;
	const includeChapterNumbers = '&include-chapter-numbers=' + numbers;
	const includeVerseNumbers = '&include-verse-numbers=' + numbers;
	const includeHeadings = '&include-headings=' + headings;
	const includeSubheadings = '&include-subheadings=' + headings;
	const includeFootnotes = '&include-footnotes=' + extras;
	const includeAudioLink = '&include-audio-link=' + extras;
	const type = 'html'; // text | html
	const opts = `${includeVerseNumbers}${includePassageReferences}${includeFootnotes}${includeHeadings}${includeSubheadings}${includeChapterNumbers}${includeAudioLink}`;
	const headers = new Headers();
	headers.set('Authorization', `Token ${ESV_TOKEN}`);
	const ret = await fetch(`https://api.esv.org/v3/passage/${type}/?q=${myVerse}${opts}`, {
		headers,
		method: 'GET'
	});
	const verse = await ret.json();
	return json(verse);
};
