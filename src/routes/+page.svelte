<script lang="ts">
	import { search } from '$lib/controller';
	import { storeVerse, storeSearchText } from '$lib/model';
	let thisVerse: HTMLInputElement;
	$: verse = $storeVerse;
	$: searchText = $storeSearchText;
	const doSearch = () => {
		const myVerse = searchText ? searchText : 'John 3:16-21';
		search(myVerse);
	};
	const selectInput = () => {
		thisVerse.select();
	};
</script>

<div class="container flex h-full mx-auto pr-4 min-w-400 sm:mr-4">
	<div class="my-10 w-full">
		<label class="label">
			<span class="mx-4">Enter a Verse Reference</span>
			<form on:submit|preventDefault={doSearch}>
				<div class="flex">
					<input
						class="input mx-4"
						on:focus={selectInput}
						bind:this={thisVerse}
						bind:value={searchText}
						placeholder="John 3:16-21"
					/>
					<button type="submit" class="btn variant-filled-primary">Lookup Verse</button>
				</div>
			</form>
		</label>
		<div class="mx-4 my-10">
			{#if verse}{@html verse}{/if}
		</div>
	</div>
</div>
