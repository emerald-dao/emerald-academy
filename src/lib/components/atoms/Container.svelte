<script>
  export let width = "medium"
  export let direction = "column"
  export let gutterX = true
  export let gutterY = true
</script>

<div class={`${width} ${direction}`} class:gutter-x={gutterX} class:gutter-y={gutterY}>
  <slot/>
</div>

<style>
  div {
    margin-right: auto;
    margin-left: auto;
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