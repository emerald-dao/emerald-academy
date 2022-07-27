<script>
  import { bootcamps } from "$lib/data/bootcamps";
  import { challenges } from "$lib/data/challenges";
</script>

<ul class="test">
  <li class="dropdown nav-link">
    Challenges
    <ul class="dropdown-list">
      {#each challenges as challenge (challenge.title)}
        <li class="dropdown-link">
          <a class="nav-link" href={challenge.href} sveltekit:prefetch
            >{challenge.title}</a>
        </li>
      {/each}
    </ul>
  </li>
  <li class="dropdown nav-link">
    Bootcamps
    <ul class="dropdown-list">
      {#each bootcamps as bootcamp (bootcamp.title)}
        {#if bootcamp.active}
          <li class="dropdown-link">
            <a class="nav-link" href={bootcamp.href} sveltekit:prefetch
              >{bootcamp.title}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </li>
  <li>
    <a class="nav-link" href="/resources">Resources</a>
  </li>
  <li>
    <a
      class="nav-link"
      href="https://discord.com/invite/emeraldcity"
      target="_blank">Discord</a>
  </li>
  <slot />
</ul>

<style>
  ul {
    display: flex;
    flex-direction: inherit;
    list-style-type: none;
    gap: 10px;
  }

  .nav-link {
    font-family: "JetBrains Mono", monospace;
    font-size: 15px;
    color: var(--primary);
  }

  .dropdown {
    position: relative;
    top: 2px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .dropdown::after {
    content: "";
    width: 0;
    height: 0.2rem;
    border-radius: 10px;
    position: absolute;
    left: 0.3rem;
    bottom: 0.8rem;
    background-color: var(--primary);
    transition: width 0.2s ease;
  }

  .dropdown:hover::after {
    width: 87%;
  }

  .dropdown:hover ul,
  .dropdown:focus ul {
    opacity: 1;
    visibility: visible;
  }

  .dropdown-list {
    position: absolute;
    top: 2.8rem;
    width: 205px;
    box-shadow: 0 0 10px rgb(36, 36, 36);
    background: var(--menu-bg);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;
  }

  .dropdown-link {
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }
  .dropdown-link:hover {
    background-color: var(--menu-hover);
  }
</style>
