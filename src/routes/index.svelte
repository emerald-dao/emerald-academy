
<script>

</script>

<svelte:head>
	<title>Emerald Academy</title>
</svelte:head>

<div class="main">
  <div class="title">
    <h1>
      <span class="text">
        <span>Emerald</span>
        <img id="logo" src="/favicon.png" alt="emerald academy logo" />
        <span>Academy</span>
      </span>
  </h1>
    <span class="line"></span>
  </div>
  <article class="description">Learn everything about the Flow Blockchain and the Cadence Smart Contract programming language.</article>
  <div class="cards">
    <a href="https://discord.gg/emeraldcity" target="_blank">
      <article href="https://discord.gg/emeraldcity" target="_blank">
        <img src="/cityskyline.png" alt="city skyline" />
        <h5>Join Emerald City</h5>
        <p>We are the first DAO on Flow. Educate, build, and govern.</p>
      </article>
    </a>
    <a href="https://github.com/jacob-tucker/Flow-Zero-to-Jacob" target="_blank">
      <article>
        <img src="/Flow-Zero-to-Jacob.png" alt="Flow Zero to Jacob course" />
        <h5>Bootcamp #1</h5>
        <p>Learn what the Flow blockchain is and how to start writing smart contracts in Cadence.</p>
      </article>
    </a>
  </div>
</div>

<style>
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
    height: 250px;
    margin: 0px 30px 30px 30px;
    animation: show .5s forwards;
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

  .description {
    opacity: 0;
    animation: show .5s forwards;
    animation-delay: 1.1s;
    font-size: 25px;
    color: var(--text);
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
    }
  }

  h1 {
    position: relative;
    text-align: center;
    font-size: 70px;
    overflow: hidden;
  }

  .text {
    display: inline-block;
    transform: translateY(100%);
    animation: comeBack 1s forwards;
    animation-delay: 0.75;
    display: flex;
    align-items: center;
  }

  .text > span {
    margin: 10px;
  }

  .main {
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
    top: 50vh;
    margin-top: 0px;
    animation: moveUp 1s forwards;
    animation-delay: .75s;
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
</style>
