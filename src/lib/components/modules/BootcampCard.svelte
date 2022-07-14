<script>
  import Button from "../atoms/Button.svelte";
  export let bootcamp;
</script>

<article class:launched={bootcamp.isLaunched}>
  <img src={bootcamp.image} alt={bootcamp.imageAlt} />
  <div>
    <h5>{bootcamp.title}</h5>
    <p>{bootcamp.description}</p>
    <p>{bootcamp.dateStart} - {bootcamp.dateEnd}</p>
    <Button href={bootcamp.href} class="ghost small"
      >{bootcamp.isLaunched ? "Start Learning" : "Coming Soon"}</Button>
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
    margin: 0;
    box-shadow: none;
    border: 5px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  img {
    border-radius: 10px 10px 0 0;
    margin: 0;
  }

  .launched {
    box-shadow: var(--shadow);
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
    padding: 35px 40px;
  }
</style>
