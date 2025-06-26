<script lang="ts">
    import { isOpen } from '$lib/menu.svelte';
    import { isOpenCreatePopUp } from '$lib/menu.svelte';
    import { get } from 'svelte/store';

    function openCreatePopUp() {
        isOpenCreatePopUp.update(value => !value);
    }

    function toggleOpen() {
        isOpen.update(value => !value);
    }
</script>

<nav class="bg-neutral-900 h-14 w-full flex justify-between px-4 md:px-8 items-center">
    <div class="flex gap-2 md:gap-0 h-full items-center w-full">
        <button class="sidebar-toggle md:hidden h-full flex items-center" on:click={toggleOpen} aria-label="open sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </button>
        <div class="logo">
            <h1 class="text-xl">
                <span class="font-bold">Device</span>Manager
            </h1>
        </div>
        <div class="search hidden md:block ml-3 w-[30%]">
            <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            class="bg-white/5 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-neutral-700"
            />
        </div>
    </div>
    <div class="shortcuts flex gap-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        <button class="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center" aria-label="create new device" on:click={openCreatePopUp}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</nav>