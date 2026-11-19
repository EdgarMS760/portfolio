import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Animaciones genéricas de entrada al hacer scroll.
 *  - [data-reveal]          el elemento entra desde abajo
 *  - [data-reveal-stagger]  sus hijos directos entran en cascada
 * Se ejecuta una sola vez por elemento.
 */
export function initReveal(root: ParentNode = document) {
  if (prefersReducedMotion()) return;

  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    if (el.dataset.revealed) return;
    el.dataset.revealed = "1";
    gsap.fromTo(el, { opacity: 0, y: 40 }, {
      opacity: 1,
      y: 0,
      clearProps: "opacity,transform",
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });
  });

  root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((el) => {
    if (el.dataset.revealed) return;
    el.dataset.revealed = "1";
    gsap.fromTo(el.children, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      clearProps: "opacity,transform",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });
  });
}

/** Inclinación 3D sutil siguiendo el cursor. */
export function initTilt(selector: string, max = 4) {
  if (prefersReducedMotion() || window.matchMedia("(hover: none)").matches) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
    const rx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });
    gsap.set(card, { transformPerspective: 1200 });
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(px * max * 2);
      rx(-py * max * 2);
    });
    card.addEventListener("pointerleave", () => {
      rx(0);
      ry(0);
    });
  });
}
