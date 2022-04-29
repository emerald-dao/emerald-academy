<script>
  import Countdown from 'svelte-countdown/src/index.js'

  export let from;
</script>

<Countdown {from} zone="Europe/London" let:remaining>
  <div class="countdown">
      {#if remaining.done === false}
      <span>{remaining.days} days</span>
      {/if}
  </div>
</Countdown>