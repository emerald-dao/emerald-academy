<script>
    import SideNav from "$lib/components/sections/layout/SideNav.svelte";
    import BlueSection from "$lib/components/sections/tutorials/BlueSection.svelte";
    import GreenSection from "$lib/components/sections/tutorials/GreenSection.svelte";
    import HeroTutorial from "$lib/components/sections/tutorials/HeroTutorial.svelte";
    import letters from '$lib/components/atoms/Images/Letters.png'
    import emerald from '$lib/components/atoms/Images/Emerald.png'
    import flow from '$lib/components/atoms/Images/Flow.png'
    import install from '$lib/components/atoms/Images/Install.png'
    import map from '$lib/components/atoms/Images/Map.png'
    import reading from '$lib/components/atoms/Images/Reading.png'
    import replace from '$lib/components/atoms/Images/Replace.png'
    import rocket from '$lib/components/atoms/Images/Rocket.png'
    import wallet from '$lib/components/atoms/Images/Wallet.png'
    
    let heading="SIMPLE FT"
    let section1="Install"
    let section2="Wallets"
    let section3=`Minting Fungible Tokens`
    let section4=`Setup empty user Vault`
    let section5=`Transfer Tokens`
    let section6=`Deploy it to Testnet`
    let section7=`Side Quests`
    let id = 1
    
    </script>
    
    <div>
        <HeroTutorial header={heading}>
            <img src={emerald} alt="" class="bg-image emerald">
            <h4 class="title" slot="title">
                Deploy a <b>FungibleToken</b> contract to learn the basics of the Flow blockchain and Cadence. You'll use: 
              </h4>
              <p slot="final" class="single">🌟 The final deliverable is an app that lets users create their own fungible tokens and transfer them to another account on Flow testnet.
            </p>
        </HeroTutorial>
        <SideNav {heading} {section1} {section2} {section3} {section4} {section5} {section6} {section7} {id} />
        <GreenSection header={section1} id={section1} number=1>
            <div>
                <p>Required:</p>
                <p><a href="https://github.com/" target="_blank">* Git</a></p>
                <p><a href="https://nodejs.org/en/download/" target="_blank">* Node</a> (Use Node v16 or a previous version as v17 may cause errors)</p>
            </div>
            <code class="code intro">git clone https://github.com/emerald-dao/2-fungible-token.git</code>              
            <p>In a terminal window, start your 📱 frontend:</p>        
            <code class="code  intro">
                <span>cd</span>
                2-fungible-token <br/>
                npm install <br/>
                npm run dev
            </code>
            <p>In a second terminal window, start your 👷‍ local emulator:</p>        
            <code class="code  intro">
                <span>cd</span>
                2-fungible-token <br/>
                flow emulator start -v
            </code>
            <p>In a third terminal window, 💸 start your local wallet:</p>        
            <code class="code  intro">
                <span>cd</span>
                2-fungible-token <br/>
                flow project deploy <br/>
                flow dev-wallet 
            </code>
            <p class="end">You can <code>flow project deploy --update</code> to deploy a new contract any time.</p>  
            <p class="end">📱 Open <a href="http://localhost:3000">http://localhost:3000</a> to see the app</p>  
            <img src={install} alt="" class="bg-image install">
    
        </GreenSection>
        <BlueSection header={section2} id={section2} number=2 >
            <p class="end">🔥We'll be using the <b>local Flow dev wallet</b> on localhost.</p>  
            <p class="end">👛 Click the "Log In" button and notice a window appears with different accounts to select, each with their own FlowToken balance.</p>
            <p class="end"> Select the first account to log in to it.</p> 
            <p class="end">  You will see the user address now reflects the current logged in address.</p> 
            <img src={wallet} alt="" class="bg-image wallet">
            <img src={flow} alt="" class="bg-image flow">
        </BlueSection>
        <GreenSection header={section3} id='Minting' number=3>
            <p class="intro"> In a terminal, run <code> npm run mint </code></p>
            <div class="img"></div>
            <p class="end">That will mint 30 tokens to the Service Account (0xf8d6e0586b0a20c7)</p> 
            <img src={reading} alt="" class="bg-image reading">
        </GreenSection>
        <BlueSection header={section4} id="Setup" number=4 >
            <p class="intro">Log out of the admin account and into a new account that does not have the Tokens </p>
            <p class="intro">Click on the SETUP VAULT button to setup your empty vault </p>    
            <div class="img"></div>
            <p class="intro">Copy the user account</p>                
            <img src={replace} alt="" class="bg-image replace">  
            <img src={letters} alt="" class="bg-image letters">  
        </BlueSection>
        <GreenSection header={section5} id='Transfer' number=5>
            <p class="intro"> Log back into the admin account</p>
            <p class="intro"> Paste the copied address into the account field and transfer the Tokens into the new account</p>
            <div class="img"></div>
            <p class="intro">Log back into the other account and see the Tokens appear in the user's Vault</p> 
            <div class="img"></div>
            <img src={reading} alt="" class="bg-image reading">
        </GreenSection>
        <BlueSection header={section6} id="Deploy" number=6>
            <p class="intro">📔 Ready to deploy to a public testnet?!?</p>            
            <p class="intro">🔐 Generate a <b>deployer address</b> by typing<br/> <code>flow keys generate --network=testnet</code> into a terminal</p>
            <div class="img"></div>
            <p class="intro">👛 Create your <b>deployer account</b> by going to <br/> <a href="https://testnet-faucet.onflow.org/">https://testnet-faucet.onflow.org/</a>, pasting in your public key from above, and clicking CREATE ACCOUNT:
            </p>
            <div class="img"></div>
            <p class="intro">In your .env file, change the following:</p>
            <ul class="instructions">
                <li><p class="intro"><code>NEXT_PUBLIC_ACCESS_NODE</code> to <code>https://testnet.onflow.org</code></p></li>
                <li><p class="intro"><code>NEXT_PUBLIC_WALLET</code> to <code>https://fcl-discovery.onflow.org/testnet/authn</code></p></li>
                <li><p class="intro"><code>NEXT_PUBLIC_CONTRACT_ADDRESS</code> to your generated testnet address</p></li>
            </ul>            
            <p class="intro">⛽️ Add your testnet account to <code>flow.json</code> as by modifying the following lines of code:</p>
            <pre><code>"accounts": &#123;
                "emulator-account": &#123;
                  "address": "f8d6e0586b0a20c7",
                  "key": "dd6e0fd35190ee5aba55bb3c2ec1630c8a8fe75ef7e9a59f979e9e3a0518edb6"
                  &#125;,
                "testnet-account": &#123;
                  "address": "YOUR GENERATED ADDRESS",
                  "key": &#123;
                    "type": "hex",
                    "index": 0,
                    "signatureAlgorithm": "ECDSA_P256",
                    "hashAlgorithm": "SHA3_256",
                    "privateKey": "YOUR PRIVATE KEY"
                 &#125;
               &#125;
             &#125;,
              "deployments": &#123;
                "emulator": &#123;
                  "emulator-account": [                    
                    "FungibleToken",
                    "ExampleToken"
                  ]
                &#125;,
                "testnet": &#123;
                  "testnet-account": [
                    "ExampleToken"
                 ]
               &#125;
             &#125;
              </code></pre>
              <p class="intro">Lastly, change the <code>PRIVATE_KEY</code> in .env to your testnet private key. NOTE: It is okay if you leak this private key, because this is a testnet account, and therefore not real. However, if you add a new line to the .gitignore file with ".env", you can prevent ever leaking your private key to things like GitHub.</p>
              <p class="intro">🚀 Deploy your ExampleNFT smart contract:</p>
              <code class="code">flow project deploy --network=testnet</code>
              <img src={rocket} alt="" class="bg-image rocket">
        </BlueSection>
        <GreenSection header={section7} id="Side" number=6 >
            <div class="quests">
                <p class="intro">Head to your next challenge <a href="/tutorials/3-simple-marketplace/">here</a></p>
                <p class="intro">💬 Meet other builders working on this challenge and get help in the 💎 <a href="https://discord.gg/emeraldcity" target="_blank"> Emerald City Discord!</a></p>
                <p class="intro">👉 Problems, questions, comments on the stack? Post them to the 💎 <a href="https://discord.gg/emeraldcity" target="_blank"> Emerald City Discord!</a></p>
            </div>
            <img src={map} alt="" class="bg-image map">
        </GreenSection>
    </div>
    
    <style>
     *{
         padding: 0;
         margin: 0;
     }
     p {
         color: var(--text);
     }

     h4 {
        line-height: 1.8rem;
        text-align: center;
      }
    
     code {
         color: var(--text);
         padding: 0.5rem 1rem;
     }
    
     span {
         color: var(--side-nav);
     }
     b {
        color: var(--primary);
      } 
    
     .intro {
         margin: 1rem ;
     }
    
     .end {
         margin: 1rem 1rem 0rem;
     }
    
     .img {
         width: 32rem;
         height: 18rem;
         background: white;
         border-radius: 20px;
        margin: auto;
     }
    
     .single {
         margin: 1rem 0rem;
     }
     .quests {
         padding-bottom: 15rem ;
     }
     .bg-image {
         position: absolute;
         width: 15%;     
         right: 150px;
     }
     .emerald {
         transform: rotate(20deg);
     }
     .install {
         transform: rotate(-15deg);
     }
     .wallet {
         transform: rotate(-30deg);
         top: 180px;
     }
     .flow {
         transform: rotate(8deg);
         bottom: 120px;
         right: 350px;
         width: 10%;
     }
     .reading {
         transform: rotate(20deg);
     }
     .replace {
         transform: rotate(-30deg);
         top: 450px;
     }
     .letters {
         bottom: 450px;
         width: 16%;
     }
     .rocket {
         transform: rotate(-30deg);
         width: 25%;
         right: 70px;
     }
     .map {
         top: 150px;
     }     
    
    </style>