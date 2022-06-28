<script>
import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section paddingTop={true}>
  <Container width="small">
    <div class="column">
      <span>WELCOME TO</span>
      <h1>EMERALD ACADEMY</h1>
      <p>
        Learn everything about the <b>Flow Blockchain</b> and the Cadence Smart Contract programming language.
      </p>
      <p>
        Emerald Academy is a series of Flow educational resources throughout time, by your <i>best</i> friends at <b>Emerald City</b>.
      </p>
    </div>
  </Container>
</Section>

<style>
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
  }

  span {
    font-family: var(--font-accent);
    letter-spacing: .5em;
    padding-bottom: 1.4em;
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: clamp(2rem, 15vw, 6.2rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px var(--text);
  }

  p {
    text-align: center;
    font-size: var(--font-size-l);
  }
  
  b {
    color: var(--primary);
  }
</style>