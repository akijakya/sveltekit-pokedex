<!-- this block will run before the page content gets rendered out -> server-side rendering -->
<script context="module">
    export async function load({page}) {
        const id = page.params.id
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokeman = await res.json()
        // adding data to the properties
        return {props: {pokeman}}
    }
</script>

<!-- and this is the regular script block -->
<script>
    //this is here because we added it to the props above
    export let pokeman
    const type = pokeman.types[0].type.name
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight: <strong>{pokeman.weight}</strong></p>
    <img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name}>
</div>