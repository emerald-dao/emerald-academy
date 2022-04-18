<script>
  export let href = '';
  export let image = '';
  export let imageAlt = '';
  export let title = '';
  export let description = '';
</script>

<article href={href} target="_blank">
  <a href={href} target="_blank">
    <img src={image} alt={imageAlt} />
    <div class="card-description">
      <h5 class="title-date">{title}</h5>
      <p>{description}</p>
      <button>Join Emerald City</button>
    </div>
  </a>
</article>

<style>
  .title-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  article {
    /* opacity: 0; */
    width: 300px;
    height: 325px;
    margin: 0px 30px 30px 30px;
    animation: show 0.5s forwards;
    animation-delay: 1.1s;
    padding: 0px;
    min-width: 300px;
  }

  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  h5 {
    text-align: left;
    margin: 5px 0px 5px 10px;
    color: var(--primary);
  }

  p {
    font-size: 17px;
    text-align: left;
    margin: 0px;
    color: var(--text);
    margin-left: 10px;
    width: 85%;
  }
</style>