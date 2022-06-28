<script>
  import Button from "../atoms/Button.svelte";
  export let resource;
</script>

<article>
  <img src={resource.image} alt={resource.imageAlt} />
  <div>
    <h5>{resource.title}</h5>
    <p>{resource.description}</p>
    <Button href={resource.href} class="ghost small">Visit</Button>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--primary-bg);
    border-radius: 10px;
    padding: 0;
    margin: 20px;
    box-shadow: none;
    border: 5px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  img {
    border-radius: 10px 10px 0 0;
    margin: 0;
    height: 200px;
    object-fit: cover;
  }

  h5 {
    margin-bottom: 1em;
  }
  p {
    font-size: var(--font-size-xs);
    margin-bottom: 2em;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    height: 250px;
  }
</style>
