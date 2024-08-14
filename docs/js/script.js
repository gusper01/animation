/// Seleccionar todas las líneas
const lines = document.querySelectorAll('line');

// Animación de las flechas punteadas
gsap.to(lines, {
    duration: 1,
    strokeDashoffset: -20,
    repeat: -1,
    ease: "none",
    stagger: 0.5 // Puedes ajustar el retraso entre la animación de cada línea
});

// Animación de los nodos al llegar el flujo de datos
gsap.to("#node1", {
    duration: 2,
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 0.5
});

gsap.to("#node2", {
    duration: 2,
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1
});

gsap.to("#node3", {
    duration: 2,
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1.5
});

gsap.to("#node4", {
    duration: 2,
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 2
});


