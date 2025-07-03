<script>
  import AreaChart from "./AreaChart.svelte";

  export let name;
  export let os;
  export let room;
  export let ip;
  export let status;
</script>

<tr class="hover:bg-neutral-900 transition-colors duration-150">
  <td class="px-4 py-3 whitespace-nowrap">
    <div class="relative w-6 h-6 text-neutral-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
      </svg>
      <span
        role="status"
        aria-label={status === 'online' ? 'Online' : 'Offline'}
        title={status === 'online' ? 'Online' : 'Offline'}
        class="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full ring-2 ring-neutral-900
               bg-green-500"
        class:bg-red-500={status !== 'online'}>
      </span>
    </div>
  </td>

  <td class="px-4 py-3 whitespace-nowrap font-semibold text-neutral-100 max-w-xs truncate" title={name}>{name}</td>
  <td class="px-4 py-3 whitespace-nowrap text-neutral-300 max-w-xs truncate" title={ip}>{ip}</td>
  <td class="px-4 py-3 whitespace-nowrap text-neutral-300 max-w-xs truncate" title={os}>{os}</td>
  <td class="px-4 py-3 whitespace-nowrap text-neutral-300 max-w-xs truncate" title={room}>{room}</td>
  <td class="px-4 py-3 whitespace-nowrap w-48 max-w-[12rem]">
    <AreaChart />
  </td>
  <td class="px-4 py-3 whitespace-nowrap flex items-center gap-4">
    <button
      class="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors duration-150"
      aria-label="Edit server"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
      </svg>
    </button>
    <button
      class="text-yellow-500 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-150"
      aria-label="Refresh server"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </button>
    <button
      class="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 rounded transition-colors duration-150"
      aria-label="Delete server"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    </button>
  </td>
</tr>
