<script lang="ts">
  import { getAllDevices } from "$lib/api/Devices.svelte";
  import Devices from "$lib/components/Devices.svelte";
  import type { Device } from "$lib/api/Devices.svelte";
  import { onMount } from "svelte";

  let devices: Device[] = [];
  let loading = true;
  let error: string | null = null;

  async function fetchDevices() {
    loading = true;
    error = null;
    try {
      const res = await fetch("http://localhost:8080/devices");
      if (!res.ok) throw new Error("Failed to fetch devices");
      devices = await res.json();
    } catch (e) {
      if (e instanceof Error) {
        error = e.message;
      } else {
        error = String(e);
      }
    } finally {
      loading = false;
    }
  }

  fetchDevices();

</script>
<h1 class="text-2xl font-bold mb-1">Manage Devices</h1>
<h2 class="text-lg text-neutral-400 mb-6">Easily add, edit, or remove your devices below.</h2>

<div class="overflow-x-auto">
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
      {#if loading}
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
      {:else if error}
        <tr>
          <td colspan="7" class="px-4 py-3 text-red-500 text-center">
            Fehler beim Laden der Geräte: {error}
          </td>
        </tr>
      {:else if devices.length === 0}
        <tr>
          <td colspan="7" class="px-4 py-3 text-gray-400 text-center italic">
            Keine Geräte gefunden.
          </td>
        </tr>
      {:else}
        {#each devices as device}
          <Devices
            name={device.name}
            ip={device.ip}
            os={device.os}
            room={device.room}
            status={device.status}
          />
        {/each}
      {/if}
    </tbody>
  </table>
</div>
