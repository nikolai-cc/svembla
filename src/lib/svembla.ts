import EmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType, type EmblaPluginType } from "embla-carousel";

/**
 * Svembla - Lightweight Svelte action wrapper around Embla Carousel.
 * 
 * @param node 
 * @param options 
 * @param plugins 
 * @returns 
 */
export const svembla = (node: HTMLElement, options?: EmblaOptionsType, plugins?: EmblaPluginType[]) => {
    const embla: EmblaCarouselType = EmblaCarousel(node, options, plugins);

    const dispatch = (event: string, data?: any) => node.dispatchEvent(new CustomEvent(event, { detail: data }));
    
    embla.on('init', () => dispatch('init', embla));
    embla.on('reInit', () => dispatch('reinit', embla));
    embla.on('destroy', () => dispatch('destroy'));
    embla.on('select', () => dispatch('select'));
    embla.on('scroll', () => dispatch('scroll'));
    embla.on('settle', () => dispatch('settle'));
    embla.on('resize', () => dispatch('resize'));
    
    return {
        destroy: () => embla.destroy(),
        update: (options?: EmblaOptionsType, plugins?: EmblaPluginType[]) => embla.reInit(options, plugins),
    }
}