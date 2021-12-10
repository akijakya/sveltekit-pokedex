<!-- This file can add elements to all pages in the routes -->

<script>
    import Nav from "../components/nav.svelte"
</script>

<!-- Now the navigation bar component is displayed on top of every page -->
<Nav/>

<!-- This slot is needed so it can display the page components as children -->
<slot></slot>