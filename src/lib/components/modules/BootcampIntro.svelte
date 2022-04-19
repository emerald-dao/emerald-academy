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
    <Button>Welcome Video</Button>
    <Button ghost="true">Workshops</Button>
  </div>
</div>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }

  #date {
    font-size: 15px;
    color: var(--primary);
    font-family: var(--font-family-secondary);
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  #time-to-finish {
    font-size: 14px;
    color: var(--primary);
    font-family: var(--font-family-secondary);
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-top: 15px;
  }

  #description {
    font-size: 18px;
    margin-bottom: 46px;
    max-width: 45ch;
  }

  .buttons {
    display: flex;
    gap: 16px;
  }
</style>