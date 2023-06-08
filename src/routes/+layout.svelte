<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		Modal,
		AppShell,
		AppBar,
		LightSwitch,
		Drawer,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/Sidebar.svelte';
	const drawerSettings: DrawerSettings = {
		id: '',
		// Provide your property overrides:
		position: 'right',
		width: 'w-56',
		padding: 'p-4',
		height: 'overflow-y-hidden',
		rounded: 'rounded-xl'
	};
	const drawerOpen = () => {
		drawerStore.open(drawerSettings);
	};
</script>

<!-- App Shell -->
<Modal />
<Drawer class="overflow-y-hidden"><div class="mx-4 h-full mb-4"><Sidebar /></div></Drawer>
<AppShell
	slotSidebarRight="dark:bg-surface-700 bg-surface-200 w-0 lg:w-56 lg:p-4 overflow-y-hidden "
>
	<svelte:fragment slot="sidebarRight">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">RCS Bible Reader</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
