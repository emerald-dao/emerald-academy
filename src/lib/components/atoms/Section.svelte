<script>
  export let paddingTop = true
  export let paddingBottom = true
  export let padding = "medium"
</script>

<div class={padding} class:padding-top={paddingTop} class:padding-bottom={paddingBottom}>
  <slot/>
</div>

<style>
  .padding-top.small {
    padding-top: 3rem;
  }
  .padding-top.medium {
    padding-top: 3.5rem;
  }
  .padding-top.large {
    padding-top: 4rem;
  }

  .padding-bottom.small {
    padding-bottom: 3rem;
  }

  .padding-bottom.medium {
    padding-bottom: 3.5rem;
  }

  .padding-bottom.large {
    padding-bottom: 4rem;
  }

</style>
