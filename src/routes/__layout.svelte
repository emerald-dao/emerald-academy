<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<main class="container">
  <slot />
</main>

<footer>
  <p>
    <small>
      Created by
      <a href="https://discord.gg/emeraldcity" target="_blank"
        >Emerald City DAO</a>
    </small>
  </p>
</footer>

<style>
  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin-top: 25px;
  }

  p {
    font-size: .9rem;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 10px 0;
    }
  }
</style>
