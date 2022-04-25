<div class="background-gradient"/>
<div id="circle-container">
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
</div>

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
  
  #circle-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    background: transparent;
    border: hsla(105, 17%, 41%, 0.07) solid 1px;
    aspect-ratio: 1/1;
    box-sizing: border-box;
  }

  .circle-little {
    border-radius: 50%;
    background: hsla(105, 17%, 41%, 0.07);
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    aspect-ratio: 1/1;
    z-index: -2;
  }

  .circle.one {
    height: 95%;
  }

  .circle.two {
    height: 85%;
  }

  .circle.three {
    height: 75%;
  }

  .circle.four {
    height: 65%;
  }

  .circle.five {
    height: 55%;
  }

  .circle.six {
    height: 45%;
  }

  .circle.seven {
    height: 35%;
  }

  .circle.eight {
    height: 25%;
  }

  .circle.nine {
    height: 15%;
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

  @media (min-width: 50em) {
    .circle.one {
      width: 95%;
      height: auto;
    }

    .circle.two {
      width: 85%;
      height: auto;
    }

    .circle.three {
      width: 75%;
      height: auto;
    }

    .circle.four {
      width: 65%;
      height: auto;
    }

    .circle.five {
      width: 55%;
      height: auto;
    }

    .circle.six {
      width: 45%;
      height: auto;
    }

    .circle.seven {
      width: 35%;
      height: auto;
    }

    .circle.eight {
      width: 25%;
      height: auto;
    }

    .circle.nine {
      width: 15%;
      height: auto;
    }
  }
  
  @supports not (aspect-ratio: 1/1) {
    #circle-container {
      display: none;
    }
  }
  
</style>