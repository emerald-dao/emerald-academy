<script>
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import "../app.css";
</script>

<Header/>
<main>
  <slot />
</main>
<Footer/>

<style>
  main {
    min-height: 100vh;
    width: 100vw;
  }
</style>
