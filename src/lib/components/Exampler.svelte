<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let name: String = 'Example string for testing tailwind';

  let { members } = $props();
</script>


<div class="items-center justify-center">
	  <h2 class="p-5 text-xl font-bold text-red-300">Exampler is here</h2>
    <p>{name}</p>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
	{#each members as member}
		<div class="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition">
			<h2 class="text-xl font-bold text-gray-800">{member.name}</h2>
			<p class="text-gray-500 mt-2">{member.bio}</p>
			<p class="text-sm text-gray-400 mt-1">{m.role()}: {member.role}</p>
		</div>
	{/each}
</div>

</div>
