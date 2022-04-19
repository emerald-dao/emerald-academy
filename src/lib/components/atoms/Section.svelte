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
    padding-top: 40px;
  }
  .padding-top.large {
    padding-top: 60px;
  }

  .padding-bottom.small {
    padding-bottom: 20px;
  }

  .padding-bottom.medium {
    padding-bottom: 40px;
  }

  .padding-bottom.large {
    padding-bottom: 60px;
  }

</style>
