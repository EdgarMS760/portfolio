import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const text = document.getElementById('hero-text');
  const image = document.getElementById('hero-image');

  if (hero && text && image) {
    anime({
      targets: hero,
      opacity: [0, 1],
      duration: 0,
    });

    anime({
      targets: text,
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 200,
      easing: 'easeOutExpo',
    });

    anime({
      targets: image,
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 400,
      easing: 'easeOutExpo',
    });
  }
});
