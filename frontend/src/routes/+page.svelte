<script>
  import Devices from "$lib/components/Devices.svelte";

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
        <Devices name="Dell XPS1 Server" ip="192.168.2.1" os="Ubuntu Server 22.01" room="Room 411.2" status="online"/>
        <Devices name="HP 233 Server" ip="127.0.0.1" os="Windows Server 2022" room="Room 412.2" status="offline"/>
    </tbody>
  </table>
</div>
