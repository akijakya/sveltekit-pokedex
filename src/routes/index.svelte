<script>
	import {pokemon} from "../stores/pokestore"
</script>

<svelte:head>
	<!-- This is the title in the browser tab -->
	<title>SvelteKit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}