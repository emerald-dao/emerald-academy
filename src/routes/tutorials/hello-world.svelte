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

let heading="HELLO WORLD"
let section1="Install"
let section2="Wallets"
let section3=`Reading the Greeting`
let section4=`Changing the Greeting`
let section5=`Deploy it`
let section6=`Side Quests`
let id = 0

</script>

<div>
    <HeroTutorial header="HELLO WORLD">
        <img src={emerald} alt="" class="bg-image emerald">
    </HeroTutorial>
    <SideNav {heading} {section1} {section2} {section3} {section4} {section5} {section6} {id} />
    <GreenSection header={section1} id={section1} number=1>
        <div>
            <p>Required:</p>
            <p><a href="https://github.com/" target="_blank">* Git</a></p>
            <p><a href="https://nodejs.org/en/download/" target="_blank">* Node</a> (Use Node v16 or a previous version as v17 may cause errors)</p>
        </div>
        <code class="code intro">git clone https://github.com/emerald-dao/0-hello-world.git</code>              
        <p>In a terminal window, start your 📱 frontend:</p>        
        <code class="code  intro">
            <span>cd</span>
            0-hello-world <br/>
            npm install <br/>
            npm run dev
        </code>
        <p>In a second terminal window, start your 👷‍ local emulator:</p>        
        <code class="code  intro">
            <span>cd</span>
            0-hello-world <br/>
            flow emulator start -v
        </code>
        <p>In a third terminal window, 💸 start your local wallet:</p>        
        <code class="code  intro">
            <span>cd</span>
            0-hello-world <br/>
            flow dev-wallet
        </code>
        <p>in a fourth terminal window, 💾 deploy your contract:</p>        
        <code class="code  intro">
            <span>cd</span>
            0-hello-world <br/>
            flow project deploy
        </code>
        <p class="end">You can <code>flow project deploy --update</code> to deploy a new contract any time.</p>  
        <p class="end">📱 Open <a href="http://localhost:3000">http://localhost:3000</a> to see the app</p>  
        <img src={install} alt="" class="bg-image install">

    </GreenSection>
    <BlueSection header={section2} id={section2} number=2 >
        <p class="end">🔥We'll be using the <b>local Flow dev wallet</b> on localhost.</p>  
        <p class="end">👛 Click the "Log In" button and notice a window appears with different accounts to select, each with their own FlowToken balance.</p>
        <p class="end"> Select the first account to log in to it.</p> 
        <img src={wallet} alt="" class="bg-image wallet">
        <img src={flow} alt="" class="bg-image flow">
    </BlueSection>
    <GreenSection header={section3} id='Reading' number=3>
        <p class="single"> 👀 Click the GET GREETING button to see your greeting:</p>
        <div class="img"></div>
        <img src={reading} alt="" class="bg-image reading">
    </GreenSection>
    <BlueSection header={section4} id="Changing" number=4 >
        <p class="intro">✏️ Change the greeting! Click the CHANGE GREETING button:</p>  
        <div class="img"></div>
        <p class="intro">👀 You should see your greeting change:</p>  
        <div class="img"></div>
        <p class="end"> 🔏 You can also check out your smart contract <code>HelloWorld.cdc</code> in <code>flow/cadence/HelloWorld.cdc</code>.</p> 
        <p class="end"> 💼 Take a quick look at how your contract get deployed in <code>flow.json</code>.</p> 
        <p class="end"> 📝 If you want to make frontend edits, open <code>index.js</code> in <code>pages/index.js</code>.</p>
        <img src={replace} alt="" class="bg-image replace">  
        <img src={letters} alt="" class="bg-image letters">  
    </BlueSection>
    <GreenSection header={section5} id="Deploy" number=5>
        <p class="intro">📔 Ready to deploy to a public testnet?!?</p>
        <p class="intro"> Change the <code>accessNode.api</code>, <code>discovery.wallet</code>, and <code>0xDeployer</code> configurations in <code>flow/config.js</code> to their testnet equivalents.</p>
        <div class="img"></div>
        <p class="intro">🔐 Generate a deployer address with <br/> <code>flow keys generate --network=testnet</code></p>
        <div class="img"></div>
        <p class="intro">👛 Create your <b>deployer account</b> by going to <br/> <a href="https://testnet-faucet.onflow.org/">https://testnet-faucet.onflow.org/</a>, pasting in your public key from above, and clicking CREATE ACCOUNT:
        </p>
        <div class="img"></div>
        <p class="intro">⛽️ Add your testnet account to flow.json as by modifying the following lines of code:</p>
        <pre><code>"accounts": &#123;
            "emulator-account": &#123;
              "address": "f8d6e0586b0a20c7",
              "key": "cdb3410ae829f5e2a29f71f53efbce66bde1187948d6317de6918d5003576ca7"
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
                "HelloWorld"
              ]
            &#125;,
            "testnet": &#123;
              "testnet-account": [
                "HelloWorld"
             ]
           &#125;
         &#125;
          </code></pre>
          <p class="intro">🚀 Deploy your HelloWorld smart contract:</p>
          <code class="code">flow project deploy --network=testnet</code>
          <img src={rocket} alt="" class="bg-image rocket">
    </GreenSection>
    <BlueSection header={section6} id="Side" number=6 >
        <div class="quests">
            <p class="intro">Head to your next challenge <a href="/tutorials/1-simple-nft/">here</a></p>
            <p class="intro">💬 Meet other builders working on this challenge and get help in the 💎 <a href="https://discord.gg/emeraldcity" target="_blank"> Emerald City Discord!</a></p>
            <p class="intro">👉 Problems, questions, comments on the stack? Post them to the 💎 <a href="https://discord.gg/emeraldcity" target="_blank"> Emerald City Discord!</a></p>
        </div>
        <img src={map} alt="" class="bg-image map">
    </BlueSection>
</div>

<style>
 *{
     padding: 0;
     margin: 0;
 }
 p {
     color: var(--text);
 }

 code {
     color: var(--text);
     padding: 0.5rem 1rem;
 }

 span {
     color: var(--side-nav);
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