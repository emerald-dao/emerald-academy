<script>
  import Container from "../atoms/Container.svelte";
  import Logo from "../modules/Logo.svelte";
</script>

<img src="/city.svg" alt="Buildings silhouette">
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

<style>
  div {
    background-color: black;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 0;
    font-size: 13px;
  }

  img {
    width: 100%;
  }
</style>