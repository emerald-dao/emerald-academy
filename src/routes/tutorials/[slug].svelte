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
  <Container>
    <ul id="menu">
      {#each headings as heading}
        <li><a href="#{slugger.slug(heading.text)}">{heading.text}</a></li>
      {/each}
    </ul>
    <SvelteMarkdown id="markdown" source={article} on:parsed={handleParsed} />
    <div class="spacer" />
  </Container>
</Section>

<style>
  ul {
    position: fixed;
    padding-top: 3rem;
    left: 2%;
    width: 12%;
    list-style: decimal;
    z-index: 10;
  }
  li {
    padding-bottom: 0.5rem;
  }
  li::marker {
    color: transparent;
  }

  @media only screen and (max-width: 1680px) {
    #menu {
      display: none;
    }
  }
</style>
