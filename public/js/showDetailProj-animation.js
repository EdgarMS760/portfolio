import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

 window.navigateWithTransition = (url) => {
    anime({
      targets: 'body',
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutQuad',
      complete: () => {
        window.location.href = url;
      }
    });
  };