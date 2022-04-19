<script>
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
import BootcampVideoCard from "$lib/components/modules/BootcampVideoCard.svelte";

  export let bootcamp;
</script>

<Section padding="large" paddingBottom={false}>
  <Container>
    <div class="grid">  
      {#each bootcamp.videos as bootcampVideo (bootcampVideo.title)}
        <BootcampVideoCard bootcampVideo={bootcampVideo}/>
      {/each}
    </div>
  </Container>
</Section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    align-items: baseline
  }
</style>