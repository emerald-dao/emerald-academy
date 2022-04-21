<div class="background-gradient"/>
<div class="circle one"/>
<div class="circle two rotating">
  <div class="circle-little"/>
</div>
<div class="circle three"/>
<div class="circle four rotating reverse">
  <div class="circle-little"/>
</div>
<div class="circle five"/>
<div class="circle six rotating">
  <div class="circle-little"/>
</div>
<div class="circle seven rotating reverse">
  <div class="circle-little"/>
</div>
<div class="circle eight"/>
<div class="circle nine"/>

<style>  
  .background-gradient {
    background: 
      radial-gradient(ellipse at right, var(--gradient-primary), transparent),
      radial-gradient(ellipse at bottom, var(--gradient-secondary), transparent);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .circle {
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(96, 123, 87, 0.06);
    position: fixed;
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
    background: rgba(96, 123, 87, 0.071);
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    aspect-ratio: 1/1;
    z-index: -2;
  }

  .circle.one {
    width: 95%;
  }

  .circle.two {
    width: 85%;
  }

  .circle.three {
    width: 75%;
  }

  .circle.four {
    width: 65%;
  }

  .circle.five {
    width: 55%;
  }

  .circle.six {
    width: 45%;
  }

  .circle.seven {
    width: 35%;
  }

  .circle.eight {
    width: 25%;
  }

  .circle.nine {
    width: 15%;
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

  .rotating.two, .rotating.seven {
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