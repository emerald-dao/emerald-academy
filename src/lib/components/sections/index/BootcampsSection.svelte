<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
</script>

<div>
  <Section>
    <Container width="medium">
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
</div>

<style>
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
  
</style>