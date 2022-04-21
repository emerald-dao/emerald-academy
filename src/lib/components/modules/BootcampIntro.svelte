<script>
  import Button from "../atoms/Button.svelte";

  export let bootcamp;
</script>

<div class="column">
  <p id="date">
    Completed on {bootcamp.date}
  </p>
  <h1>
    Bootcamp #{bootcamp.id}
  </h1>
  <p id="time-to-finish">
    Part Time - {bootcamp.timeToFinish}
  </p>
  <p id="description">
    {bootcamp.description}
  </p>
  <div class="buttons">
    <Button size="small">Welcome Video</Button>
    <Button size="small" ghost="true">Workshops</Button>
  </div>
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }

  #date {
    font-size: var(--font-size-xs);
    color: var(--primary);
    font-family: var(--font-accent);
    margin-bottom: 2em;
  }

  h1 {
    font-size: clamp(1.4rem, 15vw, 2rem);
    margin-bottom: .6em;
    margin-top: 0;
  }

  #time-to-finish {
    font-size: var(--font-size-xs);
    color: var(--primary);
    font-family: var(--font-accent);
    text-transform: uppercase;
    letter-spacing: .3em;
    margin-bottom: 1.4em;
  }

  #description {
    margin-bottom: 3em;
    max-width: 45ch;
  }

  .buttons {
    display: flex;
    gap: .9em;
  }
</style>