<script>
    import Container from "$lib/components/atoms/Container.svelte";
    import Section from "$lib/components/atoms/Section.svelte";
    export let header;
    </script>
    
    <div class="tutorial">
      <div class="column tut1">
        <div class="">
          <h1>{header}</h1>
          <h4 class="intro">
            Deploy a simple <b>HelloWorld</b> contract to learn the basics of the Flow blockchain and Cadence. 
          </h4>
        </div>
        <div class="instructions">
          <p><b>You'll use:</b></p>
          <p>- The local Flow emulator to deploy smart contracts. <br/>
            - The local Flow dev wallet to log into test accounts. <br/>
            - A template Next.js app with sample scripts and transactions to interact with your contract.
          </p>
          <p>🌟 The final deliverable is an app that lets users read and change a greeting field on Flow testnet.
          </p>
          <p>💬 Meet other builders working on this challenge and get help in the <a href="https://discord.gg/emeraldcity" target="_blank">Emerald City Discord</a>!
          </p>
        </div>
      </div>
      <slot/>
    </div>
    
    <style>

      .tutorial{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        top: 0;
        background: var(--tut-bg1);
        padding-top: 5rem;
      }
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40%;
      }      
    
      h1 {
        text-align: center;
        font-size: clamp(1rem, 10vw, 5rem);
        font-weight: 700;
        color: transparent;
        -webkit-text-stroke: 1px var(--text);
      }

      h4 {
        line-height: 1.8rem;
      }
    
      p {
        font-size: var(--font-size-m);
      }
      
      b {
        color: var(--primary);
      }      

      .intro {
        text-align: center;
      }

      .instructions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
      }
    
    </style>