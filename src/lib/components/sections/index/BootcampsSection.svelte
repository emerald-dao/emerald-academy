<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section>
  <Container width="small">
    <div class="row">
      {#each bootcamps as bootcamp (bootcamp.title)}
        <BootcampCard
          title={bootcamp.title}
          description={bootcamp.description}
          image={bootcamp.image}
          imageAlt={bootcamp.imageAlt}
          href={bootcamp.href}
        />
      {/each}
    </div>
  </Container>
</Section>

<style>
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
</style>