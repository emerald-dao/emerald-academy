<script>
  import CitySvg from "$lib/components/atoms/CitySvg.svelte";
import Container from "../../atoms/Container.svelte";
  import Logo from "../../atoms/Logo.svelte";
</script>

<footer>
  <CitySvg/>
  <div>
    <Container width="medium">
      <div class="flex-container">
        <p>{new Date().getFullYear()}. All rights reserved.</p>
        <a sveltekit:prefetch href="/">
          <Logo/>
        </a>
        <p>
        Created by <a href="https://discord.gg/emeraldcity" target="_blank">Emerald City DAO</a> 
        </p>
      </div>
    </Container>
  </div>
</footer>

<style>
  footer {
    padding: 0;    
    position: absolute;
    bottom: 0;
  }

  div {
    background-color: var(--primary-bg);
  }

  .flex-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
  }

  p {
    margin: 0;
    font-size: .6rem;
    font-family: var(--font-accent);
  }

  @media (min-width: 50em) {
    .flex-container {
      flex-direction: row;
    }
  }
</style>