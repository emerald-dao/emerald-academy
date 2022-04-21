<script>
  import CitySvg from "$lib/components/atoms/CitySvg.svelte";
import Container from "../../atoms/Container.svelte";
  import Logo from "../../atoms/Logo.svelte";
</script>

<footer>
  <CitySvg/>
  <div>
    <Container width="medium">
      <div class="row">
        <p>{new Date().getFullYear()}. All rights reserved.</p>
        <Logo/>
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
  }

  div {
    background-color: var(--primary-bg);
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 0;
    font-size: .6rem;
    font-family: var(--font-accent);
  }
</style>