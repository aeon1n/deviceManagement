import { writable } from "svelte/store";
import type { Device } from "./api/Devices.svelte";

export const isOpen = writable(false);
export const isOpenCreatePopUp = writable(false);

export const deviceFormState = writable<{
  isOpen: boolean;
  isEditing: boolean;
  device?: Device;
}>({
  isOpen: false,
  isEditing: false,
  device: undefined,
});
