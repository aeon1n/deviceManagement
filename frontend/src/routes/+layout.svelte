<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/ui/Navbar.svelte';
  import Sidebar from '$lib/components/ui/Sidebar.svelte';
  import Popup from '$lib/components/ui/Popup.svelte';
	
	let { children } = $props();
</script>

<header>
	<Navbar />
</header>
<main class="flex flex-col md:flex-row px-4 md:px-8 mt-6">
	<aside class="basis-1/6">
		<Sidebar />
	</aside>
	<div class="basis-5/6 md:pl-12">
		{@render children()}
	</div>
</main>
<Popup />
