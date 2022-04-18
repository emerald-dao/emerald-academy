<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampCard from "$lib/components/modules/BootcampCard.svelte";
  import Container from "$lib/components/atoms/Container.svelte";
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div class="main">
  <article class="description">
    Learn everything about the Flow blockchain and the Cadence Smart Contract
    programming language. <br /><br />
    Emerald Academy is a series of Flow educational resources throughout time, by
    your <i>best</i> friends at
    <a href="https://discord.gg/emeraldcity" target="_blank">Emerald City</a>.
  </article>
  <div class="cards">
    {#each bootcamps as bootcamp (bootcamp.title)}
    <BootcampCard
      title={bootcamp.title}
      description={bootcamp.description}
      image={bootcamp.image}
      imageAlt={bootcamp.imageAlt}
      href={bootcamp.href}
    />
    {/each}
  </div>
</div>

<style>
  .cards {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  a {
    outline: 0;
    text-decoration: none;
  }

  .description {
    opacity: 0;
    animation: show 0.5s forwards;
    animation-delay: 1.1s;
    font-size: 25px;
    color: var(--text);
    margin-top: 5px;
    padding: 40px;
  }

  @keyframes show {
    100% {
      opacity: 1;
    }
  }

  @keyframes expand {
    100% {
      width: 500px;
      max-width: 100vw;
    }
  }

  .main {
    top: 0;
    left: 0;
    width: 100vw;
    text-align: center;
  }

  @keyframes moveUp {
    100% {
      top: 0vh;
      margin-top: 50px;
    }
  }

  @keyframes comeBack {
    100% {
      transform: translateY(0%);
    }
  }

  @media screen and (max-width: 500px) {
    .description {
      font-size: 20px;
    }
    @keyframes moveUp {
      100% {
        top: 0vh;
        margin-top: 0px;
      }
    }
  }
</style>
