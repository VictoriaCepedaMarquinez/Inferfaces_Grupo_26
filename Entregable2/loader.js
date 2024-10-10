
window.addEventListener("load", function () {
    let progress = 0;
    const loadingText = document.getElementById('loading-text');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    const loadingInterval = setInterval(function () {
        if (progress < 100) {
            progress += 2; // Incrementa el progreso
            loadingText.textContent = progress + '%'; // Actualiza el texto con el porcentaje
        } else {
            clearInterval(loadingInterval); // Detiene el intervalo cuando llega al 100%
            loadingScreen.style.display = 'none'; // Oculta la pantalla de carga
            content.style.display = 'block'; // Muestra el contenido de la página
        }
    }, 100); // Cada 100ms aumenta el porcentaje (para simular 5 segundos)
});
