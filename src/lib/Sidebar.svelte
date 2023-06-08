<script lang="ts">
	import { modalStore, drawerStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import { search } from './controller';
	import sidebarData from './model';
	import PropsModal from './PropsModal.svelte';
	$: sidebarItems = $sidebarData;

	const modalComponent: ModalComponent = {
		ref: PropsModal
	};
	const modal: ModalSettings = {
		type: 'component',
		// Pass the component directly:
		component: modalComponent
	};
</script>

<div class="py-10 h-full">
	<h3>Search History</h3>
	<ul class="my-4">
		{#each sidebarItems as item}
			<li>
				<button
					class="searchItem"
					on:click={() => {
						search(item);
						drawerStore.close();
					}}>{item}</button
				>
			</li>
		{/each}
	</ul>
</div>
<button
	class="btn variant-filled w-48 bottom-4 lg:bottom-0 sticky"
	on:click={() => {
		modalStore.trigger(modal);
	}}>Search Options</button
>
