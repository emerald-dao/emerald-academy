<script>
  import HeroSection from "$lib/components/sections/index/HeroSection.svelte";
  import BootcampsGridSection from "$lib/components/sections/index/BootcampsGridSection.svelte";
  import DaoInvitationSection from "$lib/components/sections/index/DaoInvitationSection.svelte";
</script>

<svelte:head>
  <title>Emerald Academy</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"
      integrity="sha512-v8B8T8l8JiiJRGomPd2k+bPS98RWBLGChFMJbK1hmHiDHYq0EjdQl20LyWeIs+MGRLTWBycJGEGAjKkEtd7w5Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
</svelte:head>

<HeroSection/>
<BootcampsGridSection/>
<DaoInvitationSection/>