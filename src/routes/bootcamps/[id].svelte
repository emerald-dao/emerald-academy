<script>
  import { page } from "$app/stores";
  import { bootcamps } from "$lib/data/bootcamps";
  import IntroSection from "$lib/components/sections/bootcamps/IntroSection.svelte";
  import VideosSection from "$lib/components/sections/bootcamps/VideosSection.svelte";
import BackgroundGradient from "$lib/components/modules/BackgroundGradient.svelte";

  const bootcamp = bootcamps[$page.params.id - 1];
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div>
  <BackgroundGradient/>
  <IntroSection bootcamp={bootcamp}/>
  <VideosSection bootcamp={bootcamp}/>
</div>
