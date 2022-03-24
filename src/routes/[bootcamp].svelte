<script>
  import { page } from "$app/stores";
  import { bootcamps } from "$lib/bootcamps";

  const bootcamp = bootcamps[$page.params.bootcamp];
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div class="main">
  <div class="title">
    <h1>Bootcamp #1</h1>
    <span class="line" />
    <p style="margin: 0px; margin-top: 5px;">
      This bootcamp completed on {bootcamp.date}
    </p>
  </div>

  <a href={bootcamp.link} target="_blank"
    ><img src="/Flow-Zero-to-Jacob.png" alt="bootcamp #1" /></a>
  <article class="description">{bootcamp.description}</article>

  {#each bootcamp.videos as video}
    <article class="grid">
      <iframe
        src={video.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      <div class="video-desc">
        <h4>{video.title}</h4>
        {#each video.content as chapter}
          <p>{chapter}</p>
        {/each}
      </div>
    </article>
  {/each}
</div>

<style>
  .video-desc {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center;
  }

  .video-desc h4 {
    color: var(--primary);
  }

  .video-desc h4,
  .video-desc p {
    margin: 0px;
  }

  .grid {
    margin-top: 100px;
    position: relative;
    min-width: 60vw;
  }

  iframe {
    min-width: 560px;
    min-height: 315px;
  }

  img {
    max-width: 600px;
  }

  .description {
    position: relative;
    margin: 25px;
    padding: 30px;
    border: 2px var(--primary) dotted;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0vh;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .line {
    width: 0px;
    height: 2px;
    background: var(--primary);
    animation: expand 1s forwards;
  }

  @keyframes expand {
    100% {
      width: 300px;
      max-width: 100vw;
    }
  }

  .main {
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media all and (max-width: 750px) {
    img {
      max-width: 250px;
    }
    iframe {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      min-width: 75%;
      min-height: 150px;
    }
    article {
      width: 95vw;
    }
  }
</style>
