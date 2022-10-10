<script>
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
  import BootcampIntro from "$lib/components/modules/BootcampIntro.svelte";

  export let bootcamp;
</script>

<Section padding="large">
  <Container>
    <div id="video-grid">
      <BootcampIntro {bootcamp} />
      {#if bootcamp.welcomeVideo}
        <iframe
          src={bootcamp.welcomeVideo}
          title="Bootcamp Welcome Video"
          allow="fullscreen" />
      {:else}
        <img src={bootcamp.image} alt={bootcamp.imageAlt} />
      {/if}
    </div>
  </Container>
</Section>

<style>
  #video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
    gap: 4rem;
    align-items: center;
    padding-top: 5rem;
  }

  iframe {
    border-radius: 20px;
    aspect-ratio: 16/9;
    width: 100%;
    min-height: 14rem;
  }
</style>
