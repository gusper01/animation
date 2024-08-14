// Animación de la flecha punteada
gsap.to("#line1", {
    duration: 1,
    strokeDashoffset: -20,
    repeat: -1,
    ease: "none"
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
