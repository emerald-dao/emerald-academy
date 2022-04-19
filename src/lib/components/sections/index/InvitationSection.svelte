<script>
import Button from "$lib/components/atoms/Button.svelte";
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
      <Button link="/hola">Join DAO</Button>
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