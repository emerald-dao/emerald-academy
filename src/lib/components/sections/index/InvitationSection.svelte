<script>
import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section>
  <Container width="small">
    <div class="column">
      <h2>Emerald City</h2>
      <p>
        We are the first DAO on the Flow Blockchain. Educate, build, and govern.
      </p>
      <button>Join DAO</button>
    </div>
  </Container>
  <img src="/city.webp" alt="Emerald City buildings"/>
</Section>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-align: center;
    font-size: 40px;
  }

  img {
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
</style>