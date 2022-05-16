# Svembla

Lightweight [Svelte](https://svelte.dev) (typescript) action wrapper around [Embla Carousel](https://www.embla-carousel.com). Add `use:embla` to any DOMnode structured as described in the [Embla docs](https://www.embla-carousel.com/get-started/module/) and enjoy your functional, yet unstyled carousel.

## Example

### Minimal

```html
<script>
    import { svembla } from "svembla";
    const colors = ["red", "blue", "green", "cyan", "yellow", "magenta"];
</script>

<div class="embla" use:svembla>
    <div class="container">
        {#each colors as color}
            <div style:background-color="{color}" class="item" />
        {/each}
    </div>
</div>

<style>
    .embla {
        overflow: hidden;
    }

    .container {
        display: flex;
    }

    .item {
        display: relative;
        flex: 0 0 100%;
    }
</style>
```

### Programmatic control

```html
<script lang="ts">
    import { svembla } from 'svembla';
    import type { EmblaCarouselType } from "embla-carousel";

    const colors = ['red', 'blue', 'green', 'cyan', 'yellow', 'magenta'];

    let carousel: EmblaCarouselType;
</script>

<div class="embla" use:svembla on:init={(e) => { carousel = e.detail }}>
    <div class="container">
        {#each colors as color}
            <div style:background-color={color} class="item" />
        {/each}
    <div>
<div>

<div>
    <button on:click={()=>carousel.scrollPrev()}>previous slide</button>
    <button on:click={()=>carousel.scrollNext()}>next slide</button>
</div>

<style>
    .embla {
        overflow: hidden;
    }

    .container {
        display: flex;
    }

    .item {
        display: relative;
        flex: 0 0 100%;
    }
</style>
```
