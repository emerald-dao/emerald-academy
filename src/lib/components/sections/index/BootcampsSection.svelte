<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
</script>

<div>
  <Section>
    <Container width="medium">
      <div class="grid">
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
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
    gap: 40px;
  }
</style>