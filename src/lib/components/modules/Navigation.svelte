<script>
  import { bootcamps } from "$lib/data/bootcamps";
</script>

<ul>
  {#each bootcamps as bootcamp (bootcamp.title)}
    {#if bootcamp.isLaunched}
      <li>
        <a class="nav-link" href={bootcamp.href} sveltekit:prefetch>{bootcamp.title}</a>
      </li>
    {/if}
  {/each}
  <li>
    <a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a>
  </li>
  <slot/>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: inherit;
    list-style-type: none;
    gap: 10px;
  }
  
  .nav-link {
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    color: var(--primary)
  }
</style>