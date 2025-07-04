<script lang="ts">
  import Devices from "$lib/components/Devices.svelte";
  import { onMount } from "svelte";
  import { devices, loading, error, fetchDevices } from "$lib/stores/deviceStore";

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
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
    {#if $loading}
      <div class="col-span-full flex flex-col items-center justify-center py-10 gap-2 text-gray-400">
        <div class="w-6 h-6 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-sm">Lade Geräte...</span>
      </div>
    {:else if $error}
      <div class="col-span-full bg-red-800/20 text-red-300 border border-red-700 rounded p-4">
        <p class="font-semibold">Fehler beim Laden der Geräte:</p>
        <pre class="text-sm mt-1 break-words">{error}</pre>
      </div>
    {:else if $devices.length === 0}
      <div class="col-span-full text-gray-400 text-center py-6">
        <p class="text-sm">Keine Geräte gefunden.</p>
      </div>
    {:else}
      {#each $devices as device}
        <Devices
          id={device.id}
          name={device.name}
          ip={device.ip}
          os={device.os}
          room={device.roomName}
          status={device.status}
        />
      {/each}
    {/if}
  </div>



