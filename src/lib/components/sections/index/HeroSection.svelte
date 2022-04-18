<script>
import Container from "$lib/components/atoms/Container.svelte";
import Section from "$lib/components/atoms/Section.svelte";
</script>

<Section>
<Container width="small">
  <div class="column">
    <span>WELCOME TO</span>
    <h1>EMERALD ACADEMY</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      consectetur, nisl eget congue consectetur, nunc nisl aliquet
      purus, eget tincidunt nisl nisl eu nisl.
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
  }
</style>