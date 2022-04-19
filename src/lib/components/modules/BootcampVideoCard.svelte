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
    background-color: black;
    border-radius: 10px;
    height: 100%;
    box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 0px 8px;
  }

  iframe {
    border-radius: 10px;
  }

  .video-content {
    padding: 20px 40px 0px;
  }

  h5 {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 16px;
    padding: 0;
  }

  ul {
    padding: 0px;
  }

  li {
    font-family: var(--font-family-secondary);
    font-size: 13px;
    padding: 0;
  }
</style>