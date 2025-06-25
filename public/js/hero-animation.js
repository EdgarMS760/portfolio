import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

  // Fade in y scale de toda la sección
  tl.to("#hero", { opacity: 1, scale: 1, duration: 0.8 });

  // Imagen con rebote
  tl.from("#hero-image img", {
    y: -100,
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    ease: "back.out(1.7)",
  }, "-=0.5");

  // Título
  tl.from("#hero-text h1", {
    x: -100,
    opacity: 0,
  }, "-=1");

  // Descripción
  tl.from("#hero-text p", {
    x: 100,
    opacity: 0,
  }, "-=1");

  // Íconos de redes
  tl.from("#hero-text a", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)"
  }, "-=0.8");
});
