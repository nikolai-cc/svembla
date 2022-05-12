<script lang="ts">
    import { svembla } from "$lib";
    import type { EmblaCarouselType } from "embla-carousel";

    import Box from "../doclib/Box.svelte";

    const colors = [
        "#d83835",
        "#f6765b",
        "#da86d9",
        "#48b86a",
        "#01a9a7",
        "#8e5aaf",
    ];

    let carousel: EmblaCarouselType;

    let currentSlide = 0;
    $: currentColor = colors[currentSlide];
    $: prevColor = colors[(currentSlide - 1 + colors.length) % colors.length];
    $: nextColor = colors[(currentSlide + 1) % colors.length];
    $: rotate = currentSlide - colors.length / 2 + "deg";
</script>

<main style:border-color={currentColor} style:rotate>
    <div class="text">
        <h1 style:color={currentColor}>Svembla</h1>
        <p>A lightweight svelte action around Embla Carousel.</p>
    </div>

    <div class="text">
        <h2 style:color={currentColor}>Basic Example:</h2>
        <p>
            <span class="nowrap"> We are at slide </span>
            <span class="nowrap">
                <strong
                    on:click={() =>
                        carousel.scrollTo(
                            Math.floor(Math.random() * colors.length)
                        )}
                    style:background-color={currentColor}
                    >{currentSlide + 1}</strong
                >
                of
                <strong
                    on:click={() => carousel.scrollTo(colors.length - 1)}
                    style:background-color={colors[colors.length - 1]}
                    >{colors.length}</strong
                >.
            </span>
        </p>
    </div>

    <div
        use:svembla={{ loop: true, skipSnaps: true }}
        class="embla"
        on:init={(e) => {
            carousel = e.detail;
        }}
        on:select={(e) => {
            currentSlide = carousel.selectedScrollSnap();
        }}
        on:scroll={(e) => console.log("event")}
    >
        <div class="container">
            {#each colors as color}
                <Box {color} />
            {/each}
        </div>
    </div>

    <div class="text buttons">
        <button
            on:click={() => carousel.scrollPrev()}
            style:background-color={prevColor}
        >
            previous slide
        </button>
        <button
            on:click={() => carousel.scrollNext()}
            style:background-color={nextColor}
        >
            next slide
        </button>
    </div>
</main>

<style>
    :global(body) {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='100' height='100' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(127)'%3E%3Crect width='100%25' height='100%25' fill='rgba(186, 205, 218,1)'/%3E%3Cpath d='M0 0h40v40h-40z' fill='%23d1d1d1' filter='url(%23filter-doodad-1)'/%3E%3Cpath d='M-40 0h1l12 20l-12 20h-1l12-20zM-38 0h1l12 20l-12 20h-1l12-20zM-36 0h1l12 20l-12 20h-1l12-20zM-34 0h1l12 20l-12 20h-1l12-20zM-32 0h1l12 20l-12 20h-1l12-20zM-30 0h1l12 20l-12 20h-1l12-20zM-28 0h1l12 20l-12 20h-1l12-20zM-26 0h1l12 20l-12 20h-1l12-20zM-24 0h1l12 20l-12 20h-1l12-20zM-22 0h1l12 20l-12 20h-1l12-20zM-20 0h1l12 20l-12 20h-1l12-20zM-18 0h1l12 20l-12 20h-1l12-20zM-16 0h1l12 20l-12 20h-1l12-20zM-14 0h1l12 20l-12 20h-1l12-20zM-12 0h1l12 20l-12 20h-1l12-20zM-10 0h1l12 20l-12 20h-1l12-20zM-8 0h1l12 20l-12 20h-1l12-20zM-6 0h1l12 20l-12 20h-1l12-20zM-4 0h1l12 20l-12 20h-1l12-20zM-2 0h1l12 20l-12 20h-1l12-20zM0 0h1l12 20l-12 20h-1l12-20zM2 0h1l12 20l-12 20h-1l12-20zM4 0h1l12 20l-12 20h-1l12-20zM6 0h1l12 20l-12 20h-1l12-20zM8 0h1l12 20l-12 20h-1l12-20zM10 0h1l12 20l-12 20h-1l12-20zM12 0h1l12 20l-12 20h-1l12-20zM14 0h1l12 20l-12 20h-1l12-20zM16 0h1l12 20l-12 20h-1l12-20zM18 0h1l12 20l-12 20h-1l12-20zM20 0h1l12 20l-12 20h-1l12-20zM22 0h1l12 20l-12 20h-1l12-20zM24 0h1l12 20l-12 20h-1l12-20zM26 0h1l12 20l-12 20h-1l12-20zM28 0h1l12 20l-12 20h-1l12-20zM30 0h1l12 20l-12 20h-1l12-20zM32 0h1l12 20l-12 20h-1l12-20zM34 0h1l12 20l-12 20h-1l12-20zM36 0h1l12 20l-12 20h-1l12-20zM38 0h1l12 20l-12 20h-1l12-20z' fill='%23ffffff'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeTurbulence baseFrequency='0.1' numOctaves='2' type='fractalNoise' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='1' result='result2' xChannelSelector='R' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='fbSourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
    }

    main {
        display: block;
        width: 80%;
        max-width: 400px;
        margin: 2rem auto;
        background-color: white;
        border-radius: 1rem;
        border: 12px double #f1b2be;
        font-family: "Courier New", Courier, monospace;
        transition: all 0.8s ease-in-out;
    }

    @media (max-width: 768px) {
        main {
            text-align: center;
        }
    }

    .text {
        padding: 1rem 2rem 0 2rem;
    }

    h1,
    h2 {
        transition: all 0.2s ease-in-out;
    }

    h2 {
        margin: 0;
        line-height: normal;
    }

    .embla {
        overflow: hidden;
        margin-top: 2rem;
    }

    .container {
        display: flex;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 2rem 2rem;
    }

    .nowrap {
        white-space: nowrap;
    }

    strong {
        padding: 4px 8px;
        border-radius: 4px;
        color: white;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;
        line-height: 2rem;
        user-select: none;
        touch-action: manipulation;
        cursor: pointer;
    }

    button {
        all: unset;
        cursor: pointer;
        user-select: none;
        font-size: 12px;
        padding: 0.5rem 1rem;
        background-color: #f1b2be;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
        touch-action: manipulation;
    }
</style>
