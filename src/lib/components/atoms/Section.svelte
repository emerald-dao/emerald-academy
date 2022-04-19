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
    padding-top: 20px;
  }
  .padding-top.medium {
    padding-top: 50px;
  }
  .padding-top.large {
    padding-top: 90px;
  }

  .padding-bottom.small {
    padding-bottom: 20px;
  }

  .padding-bottom.medium {
    padding-bottom: 50px;
  }

  .padding-bottom.large {
    padding-bottom: 90px;
  }

</style>
