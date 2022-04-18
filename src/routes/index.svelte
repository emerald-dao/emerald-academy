<script>
  import HeroSection from "$lib/components/sections/index/HeroSection.svelte";
  import BootcampsSection from "$lib/components/sections/index/BootcampsSection.svelte";
</script>

<svelte:head>
  <title>Emerald Academy</title>
</svelte:head>

<div class="background-gradient"/>
<div class="main">
  <HeroSection/>
  <BootcampsSection/>
    <div class="circle a"/>
    <div class="circle b rotating">
      <div class="circle-little"/>
    </div>
    <div class="circle c"/>
    <div class="circle d rotating reverse">
      <div class="circle-little"/>
    </div>
    <div class="circle e"/>
    <div class="circle f rotating">
      <div class="circle-little"/>
    </div>
    <div class="circle g rotating reverse">
      <div class="circle-little"/>
    </div>
    <div class="circle h"/>
    <div class="circle i"/>
    <div class="circle j"/>   
</div>

<style>
  .main {
    min-height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  .background-gradient {
    background: 
      radial-gradient(ellipse at right, var(--gradient-primary), transparent),
      radial-gradient(ellipse at bottom, var(--gradient-secondary), transparent);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .circle {
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(96, 123, 87, 0.06);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto; 
    aspect-ratio: 1/1;
    box-sizing: border-box;
    z-index: -2;
  }

  .circle-little {
    border-radius: 50%;
    background: rgba(96, 123, 87, 0.04);
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    aspect-ratio: 1/1;
    z-index: -2;
  }

  .circle.a {
    width: 100%;
  }

  .circle.b {
    width: 90%;
  }

  .circle.c {
    width: 80%;
  }

  .circle.d {
    width: 70%;
  }

  .circle.e {
    width: 60%;
  }

  .circle.f {
    width: 50%;
  }

  .circle.g {
    width: 40%;
  }

  .circle.h {
    width: 30%;
  }

  .circle.i {
    width: 20%;
  }

  .circle.j {
    width: 10%;
  }

  /* Circle rotating effect */
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .rotating {
    -webkit-animation: rotating 8s linear infinite;
    -moz-animation: rotating 8s linear infinite;
    -ms-animation: rotating 8s linear infinite;
    -o-animation: rotating 8s linear infinite;
    animation: rotating 8s linear infinite;
  }

  .rotating.b, .rotating.g {
    -webkit-animation: rotating 14s linear infinite;
    -moz-animation: rotating 14s linear infinite;
    -ms-animation: rotating 14s linear infinite;
    -o-animation: rotating 14s linear infinite;
    animation: rotating 14s linear infinite;
  }

  .rotating.reverse {
    animation-direction: reverse;
  }
</style>
