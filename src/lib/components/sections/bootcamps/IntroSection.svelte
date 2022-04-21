<script>
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
  import BootcampIntro from "$lib/components/modules/BootcampIntro.svelte";

  export let bootcamp;
</script>

<Section padding="large">
  <Container>
    <div class="grid">
      <BootcampIntro bootcamp={bootcamp}/>
      <iframe title="Welcome video" width="100%" height="315" src={bootcamp.videos[0].src}/>
    </div>
  </Container>
</Section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,  minmax(min(14rem, 100%), 1fr));
    gap: 4rem;
    align-items: center;
  }

  iframe {
    border-radius: 20px;
    aspect-ratio: 16/9;
  }
</style>