<script>
  import "../app.css";

  import { page } from '$app/stores'
  
  import Header from "$lib/components/sections/layout/Header.svelte";
  import Footer from "$lib/components/sections/layout/Footer.svelte";
  import PageTransition from '$lib/components/atoms/PageTransition.svelte';
</script>

<Header/>
<main>
  <PageTransition url={$page.url}>
    <slot/>
  </PageTransition>
</main>
<Footer/>

<style>
  main {
    padding: 0;
  }
</style>
