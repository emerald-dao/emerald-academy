<script>
  import { goto } from "$app/navigation";

  import Button from "../atoms/Button.svelte";

  export let bootcamp
</script>

<article class:launched={bootcamp.isLaunched}>
    <img src={bootcamp.image} alt={bootcamp.imageAlt} />
    <div>
      <h5>{bootcamp.title}</h5>
      <p>{bootcamp.description}</p>
      <Button on:click={()=>goto(bootcamp.href)} class="ghost small" disabled={!bootcamp.isLaunched}>{bootcamp.isLaunched ? "Go to Bootcamp" : "Coming Soon"}</Button>
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
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  .launched {
    box-shadow: var(--shadow);
  }

  h5 {
    margin-bottom: 1em
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