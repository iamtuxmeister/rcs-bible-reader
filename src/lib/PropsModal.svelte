<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { modalStore, drawerStore } from '@skeletonlabs/skeleton';
	import { search } from './controller';
	import {
		storeSearchText,
		storeNumbers,
		setNumbers,
		storeHeadings,
		setHeadings,
		storeExtras,
		setExtras
	} from './model';
	$: numbers = $storeNumbers;
	$: headings = $storeHeadings;
	$: extras = $storeExtras;
	$: searchText = $storeSearchText;

	export let parent: any;
	export let background = undefined;

	const onFormSubmit = () => {
		setNumbers(numbers);
		setHeadings(headings);
		setExtras(extras);
		search(searchText);
		modalStore.close();
		drawerStore.close();
	};

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = `border border-surface-500 p-4 space-y-4 rounded-container-token ${background}`;
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<header class={cHeader}>Search Options</header>
		<form class="modal-form {cForm}">
			<SlideToggle name="numbers" bind:checked={numbers} active="bg-primary-500"
				>Verse Numbers</SlideToggle
			>
			<SlideToggle name="slide" bind:checked={headings} active="bg-primary-500"
				>Section Headings</SlideToggle
			>
			<SlideToggle name="slide" bind:checked={extras} active="bg-primary-500"
				>Extra Options</SlideToggle
			>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Update</button>
    </footer>
	</div>
	<slot />
{/if}
