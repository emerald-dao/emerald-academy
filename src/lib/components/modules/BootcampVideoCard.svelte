<script>
  export let bootcampVideo
</script>

<div class="video-card">
  <iframe title={bootcampVideo.title} width="100%" height="215" src={bootcampVideo.src}/>
  <div class="video-content">
    <h5>{bootcampVideo.title}</h5>
    <ul>
      {#each bootcampVideo.content as chapter (chapter)}
        <li>{chapter}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .video-card {
    display: flex;
    flex-direction: column;
    background-color:  var(--primary-bg);
    border-radius: 10px;
    height: 100%;
  }

  iframe {
    border-radius: 10px;
    aspect-ratio: 16/9;
  }

  .video-content {
    padding: 1.8rem 2.4rem 0;
  }

  h5 {
    font-size: var(--font-size-m);
    font-weight: bold;
    color: var(--primary);
    padding: 0;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    font-family: var(--font-accent);
    font-size: var(--font-size-xs);
    padding: 0;
    margin: 0;
  }
</style>