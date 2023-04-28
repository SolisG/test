function ActualizarTiempo() {
    const ahora = new Date();
    const time = ahora.toLocaleTimeString();
    document.getElementById("tiempo").innerHTML = time;
}

setInterval(ActualizarTiempo, 1000);