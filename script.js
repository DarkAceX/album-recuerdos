document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    // Crear el elemento para el emoji
    const heart = document.createElement('div');
    heart.className = 'emoji-heart';
    heart.textContent = '❤️'; // Emoji de corazón
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Añadir el corazón al documento
    document.body.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 1000); // Duración de 1 segundo
});

document.addEventListener("DOMContentLoaded", () => {
    const frases = [
        "Te amo más de lo que las palabras pueden expresar. 💕",
        "Eres mi mayor bendición, Melisa. 🌹",
        "Cada momento contigo es un sueño hecho realidad. ✨",
        "Gracias por hacer mi vida más feliz. 💖"
    ];
    const fraseElegida = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase-random").innerText = fraseElegida;
});







