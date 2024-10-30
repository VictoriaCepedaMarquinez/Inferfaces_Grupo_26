class Jugador {
    constructor(id, color) {
        this.id = id;
        this.color = color;
        this.fichas = [];
    }

    crearFichas(cantidad, tamano, posicionX, posicionY) {
        for (let i = 0; i < cantidad; i++) {
            let ficha = new Ficha(this, posicionX, posicionY + i * (tamano * 2 + 10), tamano);
            this.fichas.push(ficha);
        }
    }

    dibujarFichas(contexto) {
        this.fichas.forEach(ficha => ficha.dibujar(contexto, ficha.x, ficha.y));
    }

    seleccionarFicha(x, y) {
        // Busca si alguna ficha está siendo clickeada
        for (let ficha of this.fichas) {
            if (ficha.estaDentro(x, y)) {
                return ficha;
            }
        }
        return null;
    }
}
