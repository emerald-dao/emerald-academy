<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";
</script>

<div>
  <Section>
    <Container width="small">
      <div class="row">
        <h2>Bootcamps</h2>
        <div class="grid">
          {#each bootcamps as bootcamp (bootcamp.title)}
            <BootcampCard bootcamp={bootcamp}/>
          {/each}
        </div>
      </div>
    </Container>
  </Section>
</div>

<style>
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: clamp(1.2rem, 15vw, 2.4rem);
    margin-bottom: 1.2em;
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
    gap: 40px;
  }
</style>