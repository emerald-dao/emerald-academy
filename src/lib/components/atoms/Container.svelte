<script>
  export let width = "medium";
  export let direction = "column";
  export let gutterX = true;
  export let gutterY = true;
</script>

<div
  class={`${width} ${direction}`}
  class:gutter-x={gutterX}
  class:gutter-y={gutterY}>
  <slot />
</div>

<style>
  div {
    margin-inline: auto;
  }

  .full {
    width: min(90%, var(--container-width-full));
  }

  .large {
    width: min(90%, var(--container-width-large));
  }

  .medium {
    width: min(90%, var(--container-width-medium));
  }

  .small {
    width: min(90%, var(--container-width-small));
  }

  .gutter-y {
    padding-top: var(--gutter-y);
    padding-bottom: var(--gutter-y);
  }
</style>
