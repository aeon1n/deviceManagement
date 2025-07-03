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

<nav class="w-full h-full flex justify-end items-center px-4 md:px-8">
<div class="flex gap-2 items-center">
  <button
    aria-label="notifications"
    class="cursor-pointer bg-neutral-600/25 px-2 py-2 rounded-md text-gray-400 hover:bg-neutral-500/30 hover:text-gray-200 transition-all duration-150 ease-in-out"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
      <path
        fill-rule="evenodd"
        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <button
    aria-label="create device"
    class="cursor-pointer bg-neutral-600/25 px-2 py-2 rounded-md text-gray-400 hover:bg-neutral-500/30 hover:text-gray-200 transition-all duration-150 ease-in-out"
    on:click={openCreatePopUp}
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
      <path
        fill-rule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <span
    class="cursor-pointer group font-semibold text-emerald-500 flex gap-1 items-center justify-center bg-neutral-600/25 px-4 py-1 rounded-md hover:bg-neutral-500/30 transition-colors duration-150 ease-in-out cursor-default"
  >
    <i class="transition-transform group-hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
        <path
          fill-rule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653ZM6.145 17.812A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </i>
    <span class="group-hover:underline transition-all duration-150">helloworld@gmail.com</span>
  </span>
</div>
</nav>