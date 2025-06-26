<script lang="ts">
  import { isOpen, isOpenCreatePopUp } from "$lib/menu.svelte";
  import { onMount } from "svelte";

    let open = false;
    $:open = $isOpenCreatePopUp;

    onMount(() => {
    const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") isOpenCreatePopUp.set(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
});
</script>

{#if open}
	<div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div class="bg-neutral-900 text-white rounded-md shadow-2xl w-full max-w-xl px-4 sm:px-6 py-6 sm:py-8 border border-neutral-800 mx-2">
            <h2 class="text-xl font-semibold text-white/90 mb-2">Add New Device</h2>
            <p class="text-sm text-white/ mb-6">Enter the details for the new device below.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-neutral-900 border border-blue-600 rounded-xl p-5 shadow hover:shadow-lg transition duration-200">
                    <div class="flex items-center gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3" />
                    </svg>
                    <h2 class="text-lg font-semibold text-white">Server</h2>
                    </div>
                    <p class="text-sm text-neutral-400">A short description of the server role or purpose.</p>
                </div>
                <div class="bg-neutral-900 border border-neutral-700 rounded-xl p-5 shadow hover:shadow-lg transition duration-200">
                    <div class="flex items-center gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25" />
                    </svg>
                    <h2 class="text-lg font-semibold text-white">Computer</h2>
                    </div>
                    <p class="text-sm text-neutral-400">A short description of the computer or workstation.</p>
                </div>
            </div>
            <form class="mt-6 flex flex-col gap-2">

            <!-- Computer Name -->
            <div class="space-y-1">
                <label for="computerName" class="block text-sm text-neutral-300">Computer Name</label>
                <input
                type="text"
                id="computerName"
                placeholder="e.g. PC-101"
                class="w-full bg-neutral-800 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            <!-- IP Address -->
            <div class="space-y-1">
                <label for="ipAddress" class="block text-sm text-neutral-300">IP Address</label>
                <input
                type="text"
                id="ipAddress"
                placeholder="e.g. 192.168.1.101"
                class="w-full bg-neutral-800 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
            </div>

            <!-- Operating System -->
            <div class="space-y-1">
                <label for="os" class="block text-sm text-neutral-300">Operating System</label>
                <select
                id="os"
                class="w-full bg-neutral-800 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                <option value="">Select OS</option>
                <option>Windows 11</option>
                <option>Ubuntu 22.04</option>
                <option>macOS Ventura</option>
                </select>
            </div>

            <!-- Room -->
            <div class="space-y-1">
                <label for="room" class="block text-sm text-neutral-300">Room</label>
                <select
                id="room"
                class="w-full bg-neutral-800 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                <option value="">Select Room</option>
                <option>Lab A</option>
                <option>Lab B</option>
                <option>Office 2</option>
                </select>
            </div>

            <!-- Actions -->
            <div class="flex justify-end gap-3 pt-4">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md transition">
                Create
                </button>
                <button type="button" class="bg-neutral-700 hover:bg-neutral-600 text-white text-sm px-5 py-2 rounded-md transition">
                Cancel
                </button>
            </div>
            </form>
        </div>
	</div>
{/if}
