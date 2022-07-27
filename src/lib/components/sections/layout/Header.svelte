<script>
  import { fly } from 'svelte/transition'
  import { navigating } from '$app/stores';

  import Container from "../../atoms/Container.svelte";
  import ThemeToggle from "../../atoms/ThemeToggle.svelte";
  import Logo from "../../atoms/Logo.svelte";
  import AnimatedHamburger from "../../atoms/AnimatedHamburger.svelte";
  import Navigation from '$lib/components/modules/Navigation.svelte';

  export let open = false
  export let onClick = () => {
    open = !open

    if (open) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }

  let onPageChange = () => {
    open = false
    document.body.style.overflowY = "scroll"
  }

  $: if($navigating) onPageChange()
</script>

<header>
  <Container width="medium" >
    <nav>
      <a sveltekit:prefetch href="/">
        <Logo/>
      </a>

      <!-- Desktop menu -->
      <div id="desktop-menu">
        <Navigation/>
        <ThemeToggle/>
      </div>

      <!-- Mobile menu -->
      <div id="hamburger-button">
        <AnimatedHamburger {open} {onClick}/>
      </div>
      {#if open}
        <div id="mobile-menu" transition:fly={{ y: -200, duration: 400 }}>
          <Navigation>
            <div id="close-button">
              <AnimatedHamburger {open} {onClick}/>
            </div>
          </Navigation>
        </div>
      {/if}
    </nav>

  </Container>
</header>

<style>
  header {
    padding: 0;
    z-index: 10;
    position: absolute;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--primary);
  }

  #mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    z-index: 1;
  }

  #desktop-menu {
    display: none;
  }

  #close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }
  @media (min-width: 60em) {
    #hamburger-button {
      display: none;
    }

    #desktop-menu {
      display: flex;
      flex-direction: row;
      gap: 30px;
    }
  }

  @media (max-width: 20em) {
    nav {
      flex-direction: column;
      gap: 1em;
    }
  }
</style>