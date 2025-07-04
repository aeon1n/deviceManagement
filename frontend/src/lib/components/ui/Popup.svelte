<script lang="ts">
import { isOpenCreatePopUp } from "$lib/menu.svelte";
import { onMount } from "svelte";
import { createDevice } from "$lib/api/Devices.svelte";
import { fetchDevices } from "$lib/stores/deviceStore";
import { getRooms, type Room } from "$lib/api/Rooms.svelte";

let roomsLoading = $state(true);

let name = $state("");
let ip = $state("");
let os = $state("");
let roomId = $state<number | null>(null);

let rooms: Room[] = $state([]);

function getRandomStatus(): "online" | "offline" {
    return Math.random() < 0.5 ? "online" : "offline";
}

    async function fetchAllRooms() {
        if (rooms.length > 0 && !roomsLoading) {
            return;
        }

        try {
            const fetchedRooms = await getRooms();
            rooms = fetchedRooms; 
        } catch (error) {
            console.error("Failed to load rooms:", error);
        } finally {
            roomsLoading = false;
        }
    }

onMount(() => {
    const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") isOpenCreatePopUp.set(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
});

async function onSubmitHandler(e: Event) {
    e.preventDefault();

    if (!name || !ip || !os || !roomId) {
    alert("Bitte alle Felder ausfüllen!");
    return;
}

const status = getRandomStatus();

await createDevice({
    name,
    ip,
    os,
    roomId: Number(roomId),
    status,
});

await fetchDevices();
    resetForm();
    isOpenCreatePopUp.set(false);
}

function resetForm() {
    name = "";
    ip = "";
    os = "";
    roomId = null;
}
</script>

{#if $isOpenCreatePopUp}
<div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    <div class="bg-neutral-950 text-white rounded-md shadow-2xl w-full max-w-xl px-4 sm:px-6 py-6 sm:py-8 border border-neutral-800 mx-2 overflow-y-auto">
        <h2 class="text-xl font-semibold text-white/90 mb-2">Add New Device</h2>
        <p class="text-sm text-white/ mb-6">Enter the details for the new device below.</p>

        <form class="mt-6 flex flex-col gap-2" onsubmit={onSubmitHandler}>
        <!-- Computer Name -->
        <div class="space-y-1">
            <label for="computerName" class="block text-sm text-neutral-300">Computer Name</label>
            <input
            type="text"
            id="computerName"
            bind:value={name}
            placeholder="e.g. PC-101"
            class="w-full bg-neutral-900 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>

        <!-- IP Address -->
        <div class="space-y-1">
            <label for="ipAddress" class="block text-sm text-neutral-300">IP Address</label>
            <input
            type="text"
            id="ipAddress"
            bind:value={ip}
            placeholder="e.g. 192.168.1.101"
            class="w-full bg-neutral-900 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>

        <!-- Operating System -->
        <div class="space-y-1">
            <label for="os" class="block text-sm text-neutral-300">Operating System</label>
            <select
            id="os"
            bind:value={os}
            class="w-full bg-neutral-900 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
            <option value="" disabled selected >Select OS</option>
            <option value="Windows 11">Windows 11</option>
            <option value="Windows 10">Windows 10</option>
            <option value="Windows Server 2022">Windows Server 2022</option>
            <option value="Windows Server 2019">Windows Server 2019</option>
            <option value="Ubuntu 22.04">Ubuntu 22.04</option>
            <option value="Ubuntu 20.04">Ubuntu 20.04</option>
            <option value="Ubuntu Server 22.04">Ubuntu Server 22.04</option>
            <option value="Ubuntu Server 20.04">Ubuntu Server 20.04</option>
            <option value="macOS Ventura">macOS Ventura</option>
            <option value="macOS Monterey">macOS Monterey</option>
            <option value="Red Hat Enterprise Linux 9">Red Hat Enterprise Linux 9</option>
            <option value="Red Hat Enterprise Linux 8">Red Hat Enterprise Linux 8</option>
            <option value="Debian 12">Debian 12</option>
            <option value="Debian 11">Debian 11</option>
            <option value="CentOS 8">CentOS 8</option>
            <option value="CentOS 7">CentOS 7</option>
            </select>
        </div>

        <!-- Room -->
        <div class="space-y-1">
            <label for="room" class="block text-sm text-neutral-300">Room</label>
            <select
                id="room"
                bind:value={roomId}
                onfocus={fetchAllRooms}
                class="w-full bg-neutral-900 text-white border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
                <option value={null} disabled selected >Select Room</option>
                {#if roomsLoading}
                    <option disabled>Loading...</option>
                {:else}
                    {#each rooms as room}
                        <option value={room.id}>{room.name}</option>
                    {/each}
                {/if}
            </select>
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4">
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md transition">
            Create
            </button>
            <button type="button" class="bg-neutral-700 hover:bg-neutral-600 text-white text-sm px-5 py-2 rounded-md transition" onclick={() => isOpenCreatePopUp.set(false)}>
            Cancel
            </button>
        </div>
        </form>
    </div>
</div>
{/if}
