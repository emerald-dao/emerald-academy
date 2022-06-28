<script>
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
  import ResourceCard from "$lib/components/modules/ResourceCard.svelte";
  import { resources } from "$lib/data/resources";
</script>

<Section>
  <Container>
    <div>
      <h1>Important Resources</h1>
      <div class="tools">
        {#each resources as resource}
          <ResourceCard {resource} />
        {/each}
      </div>
    </div>
    <div class="spacer" />
  </Container>
</Section>

<style>
  h1 {
    padding-top: 50px;
    text-align: center;
  }

  .tools {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: flex-start;
  }
</style>
