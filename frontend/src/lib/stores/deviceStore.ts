import { writable } from "svelte/store";
import type { Device } from "$lib/api/Devices.svelte";
import { getAllDevices } from "$lib/api/Devices.svelte";

const devices = writable<Device[]>([]);
const loading = writable<boolean>(true);
const error = writable<string | null>(null);

async function fetchDevices() {
  loading.set(true);
  error.set(null);
  try {
    const data = await getAllDevices();
    devices.set(data);
  } catch (e) {
    error.set(e instanceof Error ? e.message : String(e));
  } finally {
    loading.set(false);
  }
}

export { devices, loading, error, fetchDevices };
