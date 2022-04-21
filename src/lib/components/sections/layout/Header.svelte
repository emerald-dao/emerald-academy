<script>
  import { fly } from 'svelte/transition'

  import Container from "../../atoms/Container.svelte";
  import ThemeToggle from "../../atoms/ThemeToggle.svelte";
  import Logo from "../../atoms/Logo.svelte";
  import AnimatedHamburger from "../../atoms/AnimatedHamburger.svelte";

  export let open = false
  export let onClick = () => {
    open = !open

    if (open) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }
</script>

<header>
  <Container width="medium" >
    <nav>
      <a sveltekit:prefetch href="/">
        <Logo/>
      </a>

      <!-- Desktop menu -->
      <div id="desktop-menu">
        <ul>
          <li><a class="nav-link" sveltekit:prefetch href="/bootcamps/1">Bootcamp #1</a></li>
          <li><a class="nav-link disabled" sveltekit:prefetch href="/bootcamps/2" disabled>Bootcamp #2 [soon]</a></li>
          <li><a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a></li>
        </ul>
        <ThemeToggle/>
      </div>

      <!-- Mobile menu -->
      <div id="hamburger-button">
        <AnimatedHamburger {open} {onClick}/>
      </div>
      {#if open}
        <div id="mobile-menu" transition:fly={{ y: -200, duration: 400 }}>
          <ul>
            <li><a class="nav-link" sveltekit:prefetch href="/bootcamps/1">Bootcamp #1</a></li>
            <li><a class="nav-link disabled" sveltekit:prefetch href="/bootcamps/2" disabled>Bootcamp #2 [soon]</a></li>
            <li><a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a></li>
            <div id="close-button">
              <AnimatedHamburger {open} {onClick}/>
            </div>
          </ul>
        </div>
      {/if}
    </nav>

  </Container>
</header>

<style>
  header {
    padding: 0;
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

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 10px;
  }

  .nav-link {
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    color: var(--primary)
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

  .disabled {
    color: gray;
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

    ul {
      display: flex;
      flex-direction: row;
    }
  }
</style>