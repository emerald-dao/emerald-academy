<script>
  export let width = "medium"
  export let gutterX = true
  export let gutterY = true
</script>

<div class={width} class:gutter-x={gutterX} class:gutter-y={gutterY}><slot></slot></div>

<style>
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    background-color: red;
  }

  .full {
    max-width: var(--container-width-full);
  }
  
  .large {
    max-width: var(--container-width-large);
  }

  .medium {
    max-width: var(--container-width-medium);
  }
  
  .small {
    max-width: var(--container-width-small);
  }

  .gutter-x {
    padding-left: var(--gutter-x);
    padding-right: var(--gutter-x);
  }

  .gutter-y {
    padding-top: var(--gutter-y);
    padding-bottom: var(--gutter-y);
  }
</style>