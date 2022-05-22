<script>
    export let heading;
    export let section1;
    export let section2;
    export let section3;
    export let section4;
    export let section5;
    export let section6;
    export let id;
    
    import { tutorials } from "$lib/data/tutorials";

   let href = tutorials[id].href;
</script>

<div class="side-nav">
    <div class="nav">
        <a href={href} class="nav-heading">{heading}</a>
        <a href="{href}#{section1}" class="nav-link">{section1}</a>
        <a href="{href}#{section2}" class="nav-link">{section2}</a>
        <a href="{href}#{section3.split(' ')[0]}" class="nav-link">{section3}</a>
        <a href="{href}#{section4.split(' ')[0]}" class="nav-link">{section4}</a>
        <a href="{href}#{section5.split(' ')[0]}" class="nav-link">{section5}</a>
        <a href="{href}#{section6.split(' ')[0]}" class="nav-link">{section6}</a>
    </div>
</div>

<style>
    .side-nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 80vh;
        width: 18rem;
        padding: 3rem;
        display: flex;
        justify-items: center;
        align-items: center;
        z-index: 10 ;
    }

    .nav-heading {
        font-size: 1.3rem;
        text-decoration: underline;
        text-shadow: 2px 2px 8px ;
        color: var(--primary);
        font-weight: bold;
    }

    .nav {
        display: flex;
        flex-direction: column;
    }
    .nav-link {
        color: var(--side-nav);
        font-weight: 700;
        transition: color 0.3s ease;
        margin: 0.8rem 0rem;
    }
    .nav-link:hover {
        color: var(--primary);
    }
    .nav-link:active {
        color: var(--primary);
    }
</style>