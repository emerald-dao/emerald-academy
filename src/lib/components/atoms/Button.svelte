<script>
  export let link = "/"
  export let ghost = false
  export let size = "medium"
</script>

<button class:ghost={ghost} class={size} href={link}><slot/></button>

<style>
  button {
    width: fit-content;
    background: var(--primary);
    color: black;
    font-family: var(--font-accent);
    padding: 0.5em 1.4em;
    border-radius: 5em;
  }

  .ghost {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
  }

  .small {
    font-size: var(--font-size-xs);
  }

  .medium {
    font-size: var(--font-size-m);
  }

  .large {
    font-size: var(--font-size-l);
  }
</style>