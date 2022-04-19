<script>
  import Button from "../atoms/Button.svelte";

  export let href = '';
  export let image = '';
  export let imageAlt = '';
  export let title = '';
  export let description = '';
</script>

<article href={href} target="_blank">
  <img src={image} alt={imageAlt} />
  <div>
    <h5>{title}</h5>
    <p>{description}</p>
    <Button ghost={true}>Join Emerald City</Button>
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 0;
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  h5 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px 40px;
  }
</style>