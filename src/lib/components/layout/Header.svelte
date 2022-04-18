<script>
import Container from "../atoms/Container.svelte";
import ThemeToggle from "../atoms/ThemeToggle.svelte";
import Logo from "../modules/Logo.svelte";

</script>

<Container width="medium" >
  <nav>
    <Logo/>
    <div class="menu">
      <ul>
        <li><a href="/">Bootcamp #1</a></li>
        <li><a href="/">Bootcamp #2</a></li>
        <li><a href="/">Emerald City</a></li>
      </ul>
      <ThemeToggle/>
    </div>
  </nav>
</Container>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--primary);
  }

  ul {
    list-style: none;
    gap: 10px;
  }

  a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
  }

  .menu {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
</style>