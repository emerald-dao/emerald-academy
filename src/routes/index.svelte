<script>
  import { onMount } from "svelte";
  import { theme } from "$lib/stores.js";
  import { fade, draw } from "svelte/transition";

  let toggleTheme;

  onMount(() => {
    let html = document.querySelector("html");
    let currentTheme = html.getAttribute("data-theme");
    $theme = currentTheme || "light";
    toggleTheme = () => {
      let newTheme = $theme === "light" ? "dark" : "light";
      html.setAttribute("data-theme", newTheme);
      $theme = newTheme;
      localStorage.setItem("theme", newTheme);
    };
  });
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div class="main">
  <div class="title">
    <h1>
      <span class="text">
        <span style="text-align: right;">Emerald</span>
        <img id="logo" src="/favicon.png" alt="emerald academy logo" />
        <span>Academy</span>
      </span>
    </h1>
    <span class="line" />
  </div>

  <!-- Toggle theme -->
  <a class="theme-toggle" href="/" on:click|preventDefault={toggleTheme}>
    {#if $theme === "light"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-moon-fill"
        viewBox="0 0 16 16">
        <path
          in:draw={{ duration: 200 }}
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-sun-fill"
        viewBox="0 0 16 16">
        <path
          in:draw={{ duration: 200 }}
          d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </svg>
    {/if}
  </a>

  <article class="description">
    Learn everything about the Flow blockchain and the Cadence Smart Contract
    programming language. <br /><br />
    Emerald Academy is a series of Flow educational resources throughout time, by
    your <i>best</i> friends at
    <a href="https://discord.gg/emeraldcity" target="_blank">Emerald City</a>.
  </article>
  <div class="cards">
    <a href="https://discord.gg/emeraldcity" target="_blank">
      <article href="https://discord.gg/emeraldcity" target="_blank">
        <img src="/cityskyline.png" alt="city skyline" />
        <div class="card-description">
          <h5>Emerald City</h5>
          <p>We are the first DAO on Flow. Educate, build, and govern.</p>
          <button>Join Emerald City</button>
        </div>
      </article>
    </a>
    <a href="https://discord.gg/SevZaemaF3" target="_blank">
      <article>
        <img src="/Flow-Zero-to-Jacob.png" alt="Flow Zero to Jacob course" />
        <div class="card-description">
          <h5>Bootcamp #1</h5>
          <p>
            Learn what the Flow blockchain is and how to start writing smart
            contracts in Cadence.
          </p>
          <button>In progress. Join now!</button>
        </div>
      </article>
    </a>
  </div>
</div>

<style>
  .theme-toggle {
    opacity: 0;
    padding: 0;
    height: 45px;
    width: 45px;
    background-color: var(--primary-focus);
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    animation: show 0.5s forwards;
    animation-delay: 1.5s;
    margin-top: 10px;
  }

  .not-started:hover {
    opacity: 0.4;
  }

  #logo {
    width: 70px;
    height: 70px;
  }
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

  .cards article {
    opacity: 0;
    width: 300px;
    height: 325px;
    margin: 0px 30px 30px 30px;
    animation: show 0.5s forwards;
    animation-delay: 1.1s;
    padding: 0px;
    min-width: 300px;
  }

  .cards img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .cards h5 {
    text-align: left;
    margin: 5px 0px 5px 10px;
    color: var(--primary);
  }

  .cards p {
    font-size: 17px;
    text-align: left;
    margin: 0px;
    color: var(--text);
    margin-left: 10px;
    width: 85%;
  }

  .card-description {
    position: relative;
    height: 220px;
    padding: 10px;
  }

  .card-description button {
    position: absolute;
    bottom: 0;
    font-size: 17px;
    padding: 5px;
    left: 10%;
    width: 80%;
    margin-bottom: 5px;
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
  .line {
    width: 0px;
    height: 2px;
    background: var(--primary);
    animation: expand 1s forwards;
  }

  @keyframes expand {
    100% {
      width: 500px;
      max-width: 100vw;
    }
  }

  h1 {
    position: relative;
    text-align: center;
    font-size: 45px;
    overflow: hidden;
  }

  .text {
    display: inline-block;
    transform: translateY(100%);
    animation: comeBack 1s forwards;
    animation-delay: 0.75;
    display: grid;
    grid-template-columns: 1fr 70px 1fr;
    align-items: center;
  }

  @media screen and (max-width: 750px) {
    .text {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .text > span {
    margin: 10px;
  }

  .main {
    top: 0;
    left: 0;
    width: 100vw;
    text-align: center;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 35vh;
    margin-top: 0px;
    animation: moveUp 1s forwards;
    animation-delay: 0.75s;
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
    h1 {
      font-size: 20px;
    }
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
