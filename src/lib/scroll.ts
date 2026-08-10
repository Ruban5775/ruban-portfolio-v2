import type Lenis from "lenis";

/**
 * Smoothly scrolls to an in-page section (e.g. "#works") using the
 * shared Lenis instance set up in useSmoothScroll, falling back to
 * native smooth scroll if Lenis hasn't initialized yet.
 */
export function scrollToSection(href: string) {
  if (!href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target || !(target instanceof HTMLElement)) return;

  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: 0 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
