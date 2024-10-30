class Ficha {
    constructor(jugador, x, y, tamano) {
        this.jugador = jugador;
        this.x = x;
        this.y = y;
        this.tamano = tamano;

        // Guarda la posición inicial de la ficha
        this.xInicial = x;
        this.yInicial = y;
    }

    dibujar(contexto, x, y) {
        contexto.beginPath();
        contexto.arc(x, y, this.tamano, 0, 2 * Math.PI);
        contexto.fillStyle = this.jugador.color;
        contexto.fill();
        contexto.closePath();
    }

    estaDentro(x, y) {
        const distancia = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distancia <= this.tamano;
    }

    resetPosition() {
        // Restablece la posición de la ficha a su posición inicial
        this.x = this.xInicial;
        this.y = this.yInicial;
    }
}
