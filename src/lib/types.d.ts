declare namespace svelte.JSX {
  interface HTMLProps<T> {
    oninit?: (e: CustomEvent) => void,
    onreinit?: (e: CustomEvent) => void,
    ondestroy?: (e: CustomEvent) => void,
    onselect?: (e: CustomEvent) => void,
    onscroll?: (e: CustomEvent) => void,
    onsettle?: (e: CustomEvent) => void,
    onresize?: (e: CustomEvent) => void
  }
}