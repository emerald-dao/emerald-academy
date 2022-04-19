<script>
  import HeroSection from "$lib/components/sections/index/HeroSection.svelte";
  import BootcampsSection from "$lib/components/sections/index/BootcampsSection.svelte";
  import InvitationSection from "$lib/components/sections/index/InvitationSection.svelte";
  import BackgroundGradient from "$lib/components/modules/BackgroundGradient.svelte";
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div class="main">
  <BackgroundGradient/>
  <HeroSection/>
  <BootcampsSection/>
  <InvitationSection/>
</div>

<style>
  .main {
    width: 100vw;
    position: relative;
    overflow: hidden;
  }
</style>
