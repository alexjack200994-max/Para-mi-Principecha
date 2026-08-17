const mensajes = [
    "Desde que llegaste a mi vida, muchas cosas se sienten diferentes. ❤️",
    "Me encanta compartir momentos contigo y crear recuerdos juntos. 🥰",
    "Quiero seguir viviendo muchísimas cosas a tu lado. ✨",
    "Gracias por ser tú y por formar parte de mi vida mi pollito. ❤️",
    "siempre pese a todo te amo y no quiero alejarme de ti.❤️",
    "Te amo muchísimo, mi princhipecha. 💕"
];

let indice = 0;

function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    mensaje.style.opacity = "0";

    setTimeout(() => {

        mensaje.innerHTML = mensajes[indice];

        mensaje.style.opacity = "1";

        indice++;

        if (indice >= mensajes.length) {
            indice = 0;
        }

    }, 300);
}

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.className = "corazon";

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (18 + Math.random() * 25) + "px";

    corazon.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 8000);
}

setInterval(crearCorazon, 400);