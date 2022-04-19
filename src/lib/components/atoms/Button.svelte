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
    font-family: var(--font-family-secondary);
    font-size: 15px;
    padding: 6px 30px;
    border-radius: 60px;
  }

  .ghost {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
  }

  .small {
    font-size: 12px;
  }

  .medium {
    font-size: 15px;
  }

  .large {
    font-size: 20px;
  }
</style>