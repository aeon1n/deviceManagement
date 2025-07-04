<script lang="ts">
    import { isOpen } from "$lib/menu.svelte";
    import { onMount } from "svelte";
  import SidebarContent from "./SidebarContent.svelte";

    let open = false;
    $:open = $isOpen;

    onMount(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") isOpen.set(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    });
</script>

{#if open}
    <button
        type="button"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
        aria-label="Close sidebar"
        on:click={() => isOpen.set(false)}
        tabindex="0"
    ></button>
{/if}

<div
    class="fixed top-0 left-0 h-full w-[75%] bg-neutral-950 z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
    class:translate-x-0={open}
    class:-translate-x-full={!open}
>
   <SidebarContent />
</div>

<aside class="w-2/10 h-auto md:h-screen border-r-2 border-neutral-800 overflow-auto hidden lg:block text-sm">
    <SidebarContent />
</aside>