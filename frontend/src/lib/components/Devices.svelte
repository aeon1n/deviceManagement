  <script lang="ts">
    import { deleteDevice, type Device } from "$lib/api/Devices.svelte";
    import { deviceFormState } from "$lib/menu.svelte";
    import { fetchDevices } from "$lib/stores/deviceStore";

    export let device: Device;

    const { id, name, ip, os, roomId, roomName, status } = device;

    async function deleteDeviceHandler(id:number){
      try {
        await deleteDevice(id);
      }catch (error){
        console.log(error);
      }finally {
        fetchDevices();
      }
    }

    async function editDeviceHandler() {
      deviceFormState.set({
        isOpen: true,
        isEditing: true,
        device: {id,name,ip,os,roomId,roomName,status}
      })
    }

  </script>

  <div class="bg-neutral-900/75 rounded-xl py-3 px-6 shadow-lg w-full">
    <div class="flex justify-between items-start gap-2">
      <div class="flex flex-col">
        <span class="inline-flex items-center whitespace-nowrap px-2 py-0.5 rounded-full text-xs font-medium {status === "online" ? "bg-green-900 text-green-200":"bg-red-900 text-red-200"} w-fit">
          <span class="flex h-2 w-2 mr-1 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full {status === "online" ? "bg-green-400":"bg-red-400"} opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 {status === "online" ? "bg-green-500":"bg-red-500"}"></span>
          </span>
          {status === "online" ? "Online":"Offline"}
        </span>
        <h3 class="font-semibold text-white mt-2">{name}</h3>
        <div>
          <a href="/" class="text-xs font-medium hover:underline">{ip}</a>
          <span>&#183;</span>
          <a href="/" class="text-xs font-medium hover:underline">Room {roomName}</a>
        </div>
        <span class="text-xs font-medium">OS: {os}</span>
      </div>
      <div class="flex gap-2">
        <button aria-label="Start" class="p-2 rounded-md text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 transition cursor-pointer" onclick={editDeviceHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </svg>
        </button>
        <button aria-label="Delete" class="p-2 rounded-md text-red-500 bg-red-500/10 hover:bg-red-500/20 transition cursor-pointer" onclick={() => deleteDeviceHandler(id!)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-full flex justify-end mt-2">
      <small class="text-gray-400 text-xs">created 12 days ago</small>
    </div>
  </div>
