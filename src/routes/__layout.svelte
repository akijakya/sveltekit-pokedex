<!-- This file can add elements to all pages in the routes -->
<script>
	import Nav from '../components/nav.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
<!-- Now the navigation bar component is displayed on top of every page -->
<Nav />

<!-- This slot is needed so it can display the page components as children -->
<slot />
</div>

<style>
/* base components and utilities from Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>