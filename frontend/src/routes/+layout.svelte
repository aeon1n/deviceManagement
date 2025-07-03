<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/ui/Navbar.svelte';
  import Sidebar from '$lib/components/ui/Sidebar.svelte';
  import Popup from '$lib/components/ui/Popup.svelte';
	
	let { children } = $props();
</script>

<div class="flex flex-col md:flex-row min-h-screen bg-neutral-950 text-neutral-200">
  <aside
    class="w-full md:w-1/6
           h-auto md:h-screen
           border-r-2 border-neutral-800
           overflow-auto
           "
  >
    <Sidebar />
  </aside>

  <main class="flex-1 flex flex-col min-h-screen">
    <header class="sticky top-0 z-10 border-b-2 border-neutral-800 h-12">
      <Navbar />
    </header>

    <div class="flex-1 overflow-auto p-4 md:p-8">
      {@render children()}
    </div>
  </main>
</div>

<Popup />
