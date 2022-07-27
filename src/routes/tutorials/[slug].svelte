<script context="module">
  export const prerender = true;
  import { tutorials } from "$lib/data/tutorials";

  export async function load({ page }) {
    console.log("CONSOLE", page, tutorials);
    let tutorial = tutorials.find((tut) => tut.slug === page.params.slug);
    const url = `${tutorial.raw}`;
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        title: tutorial.title,
        article: response.ok && (await response.text()),
      },
    };
  }
</script>

<script>
  import Container from "$lib/components/atoms/Container.svelte";
  import Section from "$lib/components/atoms/Section.svelte";

  import SvelteMarkdown from "svelte-markdown";

  export let article;

  $: headings = [];

  function handleParsed(event) {
    //access tokens via event.detail.tokens

    headings = event.detail.tokens.filter(
      (token) => token.type === "heading" && token.depth === 1
    );

    console.log(headings);
  }

  export class Slugger {
    constructor() {
      this.seen = {};
    }

    serialize(value) {
      return (
        value
          .toLowerCase()
          .trim()
          // remove html tags
          .replace(/<[!\/a-z].*?>/gi, "")
          // remove unwanted chars
          .replace(
            /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
            ""
          )
          .replace(/\s/g, "-")
      );
    }

    /**
     * Finds the next safe (unique) slug to use
     */
    getNextSafeSlug(originalSlug, isDryRun) {
      let slug = originalSlug;
      let occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + "-" + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }

    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */
    slug(value, options = {}) {
      const slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    }
  }

  let slugger = new Slugger();
</script>

<Section>
  <div class="wrapper">
    <div class="content">
      <ul id="menu">
        {#each headings as heading}
          <li><a href="#{slugger.slug(heading.text)}">{heading.text}</a></li>
        {/each}
      </ul>
      <div class="markdown">
        <SvelteMarkdown
          id="markdown"
          source={article}
          on:parsed={handleParsed} />
      </div>
      <div class="spacer" />
    </div>
  </div>
</Section>

<style>
  ul {
    position: fixed;
    margin-top: 3.5rem;
    padding: 1rem 1rem 0rem;
    left: 3%;
    width: 15%;
    list-style: decimal;
    z-index: 10;
    background-color: var(--tut-bg2);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  li {
    padding-bottom: 0.5rem;
    font-size: 18px;
  }
  li::marker {
    color: transparent;
  }
  .spacer {
    width: 100%;
    height: 350px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: -70px;
    background-color: var(--tut-bg4);
  }

  .content {
    max-width: 45%;
    margin-top: 6rem;
    margin-left: 80px;
    font-family: "Mulish";
  }

  .markdown {
    padding-top: 3.5rem;
  }

  @media only screen and (max-width: 1200px) {
    .content {
      margin-left: 150px;
    }
    ul {
      width: 20%;
    }
    .spacer {
      height: 250px;
    }
  }

  @media only screen and (max-width: 600px) {
    #menu {
      display: none;
    }
    .content {
      margin-left: 0;
      max-width: 80%;
    }
  }
</style>
