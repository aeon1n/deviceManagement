<script lang="ts">
  import Devices from "$lib/components/Devices.svelte";
  import { onMount } from "svelte";
  import { devices, loading, error, fetchDevices } from "$lib/stores/deviceStore";
  import AreaChart from "$lib/components/AreaChart.svelte";

  onMount(() => {
    fetchDevices();
  });

</script>
<h1 class="text-2xl font-bold mb-1 text-emerald-600 flex gap-2 items-center">
  <i>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
      <path d="M16.5 7.5h-9v9h9v-9Z" />
      <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
    </svg>
  </i>
  Manage Devices</h1>
<h2 class="text-md text-neutral-300 mb-6">Easily add, edit, or remove your devices below.</h2>

<!-- <div class="overflow-x-auto">
  <table class="table-auto  w-full">
    <thead class="text-left text-sm font-medium">
      <tr>
        <th class="px-4 py-3 whitespace-nowrap">Icon</th>
        <th class="px-4 py-3 whitespace-nowrap">Computer Name</th>
        <th class="px-4 py-3 whitespace-nowrap">IP Address</th>
        <th class="px-4 py-3 whitespace-nowrap">OS</th>
        <th class="px-4 py-3 whitespace-nowrap">Room</th>
        <th class="px-4 py-3 whitespace-nowrap">Network Monitor</th>
        <th class="px-4 py-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody class="text-md">
      {#if $loading}
        <tr>
          <td colspan="7" class="px-4 py-3 whitespace-nowrap">
            {#each Array(3) as _, i}
              <div
                role="status"
                class="w-full animate-pulse flex gap-3 mb-4"
                aria-live="polite"
                style="width: {80 - i * 10}%" 
              >
                <div class="h-2.5 bg-gray-700 rounded-full w-full"></div>
                <span class="sr-only">Loading...</span>
              </div>
            {/each}
          </td>
        </tr>
      {:else if $error}
        <tr>
          <td colspan="7" class="px-4 py-3 text-red-500 text-center">
            Fehler beim Laden der Geräte: {error}
          </td>
        </tr>
      {:else if $devices.length === 0}
        <tr>
          <td colspan="7" class="px-4 py-3 text-gray-400 text-center italic">
            Keine Geräte gefunden.
          </td>
        </tr>
      {:else}
        {#each $devices as device}
          <Devices
            name={device.name}
            ip={device.ip}
            os={device.os}
            room={device.roomName}
            status={device.status}
          />
        {/each}
      {/if}
    </tbody>
  </table>
</div> -->

<div class="w-full flex flex-col md:flex-row gap-2">
  <div class="bg-neutral-900/75 rounded-xl py-3 px-6 shadow-lg md:w-1/2 w-full">
    <div class="flex justify-between items-start gap-2">
      <div class="flex flex-col">
        <span class="inline-flex items-center whitespace-nowrap px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 w-fit">
          <span class="flex h-2 w-2 mr-1 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Online
        </span>
        <h3 class="text-lg font-semibold text-white mt-2">Lenovo Workstation 332</h3>
        <div>
          <a href="/" class="text-sm font-medium hover:underline">192.168.2.1</a>
          <span>&#183;</span>
          <a href="/" class="text-sm font-medium hover:underline">Room ITA-7</a>
        </div>
      </div>
      <div class="flex gap-2">
        <button aria-label="Start" class="p-2 rounded-md text-blue-500 hover:bg-blue-500/10 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </svg>
        </button>
        <button aria-label="Pause" class="p-2 rounded-md text-red-500 hover:bg-red-500/10 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-6">
      <AreaChart />
    </div>
    <div class="w-full flex justify-end mt-2">
      <small class="text-gray-400">created 12 days ago</small>
    </div>
  </div>
</div>


