<script>
  let buttonProps = {
    class:[$$restProps.class]
  }

  export let disabled = false
</script>

<button 
  on:click
  on:mouseover
  on:focus
  on:mouseenter
  on:mouseleave
  disabled = {disabled}
  {...buttonProps}>
  <slot/>
</button>

<style>
  button {
    width: fit-content;
    background: var(--primary);
    color: black;
    font-family: var(--font-accent);
    padding: 0.5em 1.4em;
    border-radius: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .6em;
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

  .disabled {
    cursor: not-allowed;
  }
</style>