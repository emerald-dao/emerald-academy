<script>
import SideNav from "$lib/components/sections/layout/SideNav.svelte";
import BlueSection from "$lib/components/sections/tutorials/BlueSection.svelte";
import GreenSection from "$lib/components/sections/tutorials/GreenSection.svelte";
import HeroTutorial from "$lib/components/sections/tutorials/HeroTutorial.svelte";
import letters from '$lib/components/atoms/Images/SVGIcons/Letters.png'
import emerald from '$lib/components/atoms/Images/SVGIcons/Emerald.png'
import flow from '$lib/components/atoms/Images/SVGIcons/Flow.png'
import install from '$lib/components/atoms/Images/SVGIcons/Install.png'
import map from '$lib/components/atoms/Images/SVGIcons/Map.png'
import reading from '$lib/components/atoms/Images/SVGIcons/Reading.png'
import replace from '$lib/components/atoms/Images/SVGIcons/Replace.png'
import rocket from '$lib/components/atoms/Images/SVGIcons/Rocket.png'
import wallet from '$lib/components/atoms/Images/SVGIcons/Wallet.png'
import edit from '$lib/components/atoms/Images/SVGIcons/Edit.png'
import helloImg from '$lib/components/atoms/Images/Instructions/Hello-World/HelloGreeting.png'
import changeHelloImg from '$lib/components/atoms/Images/Instructions/Hello-World/ChangeHello.png'
import goodbyeImg from '$lib/components/atoms/Images/Instructions/Hello-World/GoodbyeGreeting.png'
import deployAddressImg from '$lib/components/atoms/Images/Instructions/Hello-World/DeployAddressHello.png'
import publicKeyImg from '$lib/components/atoms/Images/Instructions/Hello-World/PublicKeyHello.png'
import deployImg from '$lib/components/atoms/Images/Instructions/Hello-World/DeployHello.png'


let heading="HELLO WORLD"
let section1="Install"
let section2="Wallets"
let section3=`Reading the Greeting`
let section4=`Changing the Greeting`
let section5=`Deploy it`
let section6=`Make Edits`
let section7=`Side Quests`
let id = 0

</script>

<div>
    <HeroTutorial header="HELLO WORLD">
        <img src={emerald} alt="" class="bg-image emerald">
        <h4 class="title" slot="title">
            Deploy a simple <b>HelloWorld</b> contract to learn the basics of the Flow blockchain and Cadence. 
          </h4>
          <p slot="final" class="single">🌟 The final deliverable is a DApp that lets users read and change a greeting field on Flow testnet.
        </p>
    </HeroTutorial>
    <SideNav {heading} {section1} {section2} {section3} {section4} {section5} {section6} {section7} {id} />
    <GreenSection header={section1} id={section1} number=0>
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
        <p class="single"><i>Note: the -v flag means to print transaction and script output to your local emulator</i></p>
        <p>in a third terminal window, 💾 deploy your contract and 💸 start your local wallet:</p>        
        <code class="code  intro">
            <span>cd</span>
            0-hello-world <br/>
            flow project deploy <br/>
            flow dev-wallet
        </code>        
        <p class="single">You can <code>flow project deploy --update</code> to deploy a new contract any time.</p>  
        <p class="single">📱 Open <a href="http://localhost:3000">http://localhost:3000</a> to see the app</p>  
        <img src={install} alt="" class="bg-image install">

    </GreenSection>
    <BlueSection header={section2} id={section2} number=1 >
        <p class="end">🔥We'll be using the <b>local Flow dev wallet</b> on localhost.</p>  
        <p class="end">👛 Click the "Log In" button and notice a window appears with different accounts to select, each with their own FlowToken balance.</p>
        <p class="end"> Select the first account to log in to it.</p> 
        <img src={wallet} alt="" class="bg-image wallet">
        <img src={flow} alt="" class="bg-image flow">
    </BlueSection>
    <GreenSection header={section3} id='Reading' number=2>
        <p class="single"> 👀 Click the <code>Get Greeting</code> button to see your greeting:</p>
        <img src={helloImg} alt="HelloWorld message from testnet">
        <img src={reading} alt="" class="bg-image reading">
    </GreenSection>
    <BlueSection header={section4} id="Changing" number=3 >
        <p class="intro">✏️ Change the greeting! Type a new greeting into the input and click the <code>Change Greeting</code> button. You should see a transaction pop up:</p>  
        <img src={changeHelloImg} alt="">
        <p class="intro">👀 Click "APPROVE" and then click the <code>Get Greeting</code> button again. You should now see your new greeting:
        </p>  
        <img src={goodbyeImg} alt="">        
        <img src={replace} alt="" class="bg-image replace">  
        <img src={letters} alt="" class="bg-image letters">  
    </BlueSection>
    <GreenSection header={section5} id="Deploy" number=4>
        <p class="intro">📔 Ready to deploy to a public testnet?!?</p>
        <p class="intro">🔐 Generate a <b>deployer address</b> by typing<br/> <code>flow keys generate --network=testnet</code> into a terminal. Make sure to save your public key and private key somewhere, you will need them soon.</p>
        <img src={deployAddressImg} alt="">
        <p class="intro">👛 Create your <b>deployer account</b> by going to <br/> <a href="https://testnet-faucet.onflow.org/">https://testnet-faucet.onflow.org/</a>, pasting in your public key from above, and clicking <code>CREATE ACCOUNT</code>:
        </p><img src={publicKeyImg} alt="">       
        <p class="intro">After it finishes, click <code>COPY ADDRESS</code> and make sure to save that address somewhere. You will need it!</p>        
        <p class="intro">⛽️ Add your testnet account to <code>flow.json</code> by modifying the following lines of code. Paste your address you copied above to where it says "YOUR GENERATED ADDRESS", and paste your private key where it says "YOUR PRIVATE KEY".</p>
        <pre><code>"accounts": &#123;
            "emulator-account": &#123;
              "address": "f8d6e0586b0a20c7",
              "key": "5112883de06b9576af62b9aafa7ead685fb7fb46c495039b1a83649d61bff97c"
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
          <code class="code intro">flow project deploy --network=testnet</code>
          <img src={deployImg} alt="">
          <p class="intro">Lastly, configure your .env file to point to Flow TestNet so we can interact with your new contract.</p> 
          <p class="intro">In your .env file, change the following:</p>
            <ul class="instructions">
                <li><p class="intro"><code>NEXT_PUBLIC_CONTRACT_ADDRESS</code> to your generated testnet address</p></li>
                <li><p class="intro"><code>NEXT_PUBLIC_ACCESS_NODE</code> to <code>https://testnet.onflow.org</code></p></li>
                <li><p class="intro"><code>NEXT_PUBLIC_WALLET</code> to <code>https://fcl-discovery.onflow.org/testnet/authn</code></p></li>
            </ul>  
            <p class="intro">You can now terminate all your terminals since we no longer need to run our own local blockchain or wallet. Everything lives on testnet!</p>
            <p class="intro">Run <code>npm run dev</code> to start your application in a terminal, and have a blast with your DApp!</p>
          <img src={rocket} alt="" class="bg-image rocket">
    </GreenSection>
    <BlueSection header={section6} id="Make" number=5 >
        <div class="edits">
            <p class="intro">🔏 You can also check out your smart contract <code>HelloWorld.cdc</code> in <code>flow/cadence/HelloWorld.cdc</code>.</p>
            <p class="intro">💼 Take a quick look at how your contract get deployed in <code>flow.json</code>.</p>
            <p class="intro">📝 If you want to make frontend edits, open <code>index.js</code> in <code>pages/index.js</code>.</p>
        </div>
        <img src={edit} alt="" class="bg-image edit">
    </BlueSection>
    <GreenSection header={section7} id="Side" number=6 >
        <div class="quests">
            <p class="intro">Head to your next challenge <a href="/tutorials/simple-nft/">here</a></p>
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
     top: 350px;
 }
 .letters {
     bottom: 350px;
     width: 16%;
 }
 .rocket {
     transform: rotate(-30deg);
     width: 20%;
     right: 100px;
 }
 .map {
     top: 150px;
     width: 13%;
     right: 160px;
 }
 
 

</style>