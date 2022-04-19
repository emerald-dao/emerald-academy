<script>
import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section paddingTop={false}>
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
  }

  span {
    font-family: var(--font-family-secondary);
    font-size: 16px;
    letter-spacing: 6px;
    padding-bottom: 20px;
  }

  h1 {
    text-align: center;
    font-size: 120px;
    line-height: 120px;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px var(--text);
  }

  p {
    text-align: center;
    font-size: 18px;
  }
  
  b {
    color: var(--primary);
  }
</style>