<script>
  import { page } from "$app/stores";
  import { bootcamps } from "$lib/data/bootcamps";
  import BootcampIntroSection from "$lib/components/sections/bootcamps/BootcampIntroSection.svelte";
  import BootcampVideosSection from "$lib/components/sections/bootcamps/BootcampVideosSection.svelte";

  $: bootcamp = bootcamps[$page.params.id - 1];
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

{#if bootcamp}
  <BootcampIntroSection {bootcamp} />
  <BootcampVideosSection {bootcamp} />
{/if}