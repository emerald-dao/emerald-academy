<script context="module">
	export function load({ error }) {
		return {
			props: {
				message: error.message
			}
		};
	}
</script>

<script>
	export let message
</script>

<div class="error">
  <h2>Oops</h2>
  <p>{message}</p>
  <a href="/">Return to Home</a>
</div>

<style>
  .error {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>