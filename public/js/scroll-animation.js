import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';


document.addEventListener('DOMContentLoaded', () => {
    const projectElements = document.querySelectorAll('[data-project]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const container = entry.target;
            const image = container.querySelector('[data-project-image]');
            const text = container.querySelector('[data-project-text]');

            if (entry.isIntersecting) {
                // Evita repetir la animación si ya está visible
                if (container.dataset.visible === 'true') return;

                anime({
                    targets: image,
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                });

                anime({
                    targets: text,
                    translateX: [50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: 100,
                });

                anime({
                    targets: container,
                    opacity: [0, 1],
                    duration: 400,
                    easing: 'easeOutQuad',
                });

                container.dataset.visible = 'true';
            } else {
                // Solo animar salida si estaba visible antes
                if (container.dataset.visible !== 'true') return;

                anime({
                    targets: [image, text],
                    translateX: 0,
                    opacity: 0,
                    easing: 'easeInExpo',
                    duration: 600,
                });

                anime({
                    targets: container,
                    opacity: 0,
                    duration: 300,
                    easing: 'easeInQuad',
                });

                container.dataset.visible = 'false';
            }
        });
    }, {
        threshold: 0.2,
    });

    projectElements.forEach(el => {
        el.dataset.visible = 'false'; // inicializa estado
        observer.observe(el);
    });
});
