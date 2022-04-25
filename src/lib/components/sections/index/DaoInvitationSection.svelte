<script>
import Button from "$lib/components/atoms/Button.svelte";
import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section paddingBottom={false}>
  <Container width="small">
    <div class="column">
      <h2>Emerald City</h2>
      <p>
        We are the first DAO on the Flow Blockchain. 
        <br/>
        Educate, build, and govern.
      </p>
      <Button on:click={() => window.open('https://discord.gg/emeraldcity', '_blank')}>Join DAO</Button>
    </div>
  </Container>
</Section>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: clamp(1.2rem, 15vw, 2.4rem);
    margin-bottom: .5em;
  }

  p {
    margin-bottom: 50px;
  }
</style>