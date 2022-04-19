<script>
  export let link = "/"
</script>

<button href={link}><slot/></button>

<style>
  button {
    width: fit-content;
    background: var(--primary);
    color: black;
    font-family: var(--font-family-secondary);
    font-size: 15px;
    padding: 6px 20px;
    border-radius: 60px;
  }
</style>