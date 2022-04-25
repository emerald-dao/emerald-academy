<script>
  import "../app.css";
  
  import Header from "$lib/components/sections/layout/Header.svelte";
  import Footer from "$lib/components/sections/layout/Footer.svelte";
  import BackgroundGradient from "$lib/components/modules/BackgroundGradient.svelte";
</script>

<Header/>
<main>
  <slot/>
</main>
<Footer/>
<BackgroundGradient/>

<style>
  main {
    padding: 0;
  }
</style>
