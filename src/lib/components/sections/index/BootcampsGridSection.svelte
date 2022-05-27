<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";

  const currentDate = new Date();
</script>

<div>
  <Section>
    <Container width="small">
      <div class="row">
        <h2>Current Bootcamps</h2>
        <div class="grid">
          {#each bootcamps as bootcamp (bootcamp.title)}
            {#if bootcamp.active}
              <BootcampCard bootcamp={bootcamp}/>
            {/if}
          {/each}
        </div>
      </div>

      <div class="row margin-top">
        <h2>Past Bootcamps</h2>
        <div class="grid">
          {#each bootcamps as bootcamp (bootcamp.title)}
            {#if new Date(bootcamp.dateEnd) < currentDate}
            <BootcampCard bootcamp={bootcamp}/>
            {/if}
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
  .margin-top {
    margin-top: 5em;
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