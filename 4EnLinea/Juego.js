class Juego {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        this.contexto = canvas.getContext("2d");
        this.filas = 6;
        this.columnas = 7;
        this.imagenTablero = new Image();
        this.imagenTablero.src = './img/images.png';
        this.jugador1 = new Jugador(1, 'red');
        this.jugador2 = new Jugador(2, 'yellow');
        this.turnoActual = this.jugador1;
        this.tablero = new Tablero(this.filas, this.columnas, this.contexto, this.imagenTablero, this.jugador1, this.jugador2);
        this.tiempoPorTurno = 10;
        this.tiempoRestante = this.tiempoPorTurno;
        this.temporizador = null;
        this.juegoTerminado = false;

        // Manejar el click en el canvas para jugar
        canvas.addEventListener('click', (evento) => this.manejarClick(evento));

        // Dibujar el tablero y comenzar el juego cuando cargue la imagen
        this.imagenTablero.onload = () => this.tablero.dibujar();
        this.iniciarTurno();
    }

    manejarClick(evento) {
        if (this.juegoTerminado) return; 

        const rect = this.contexto.canvas.getBoundingClientRect();
        const x = evento.clientX - rect.left;
        const columna = Math.floor(x / (this.contexto.canvas.width / this.columnas));

        // Intentar colocar la ficha en la columna
        const fila = this.tablero.colocarFicha(columna, this.turnoActual);
        if (fila !== null) {
            // Verificar si hay un ganador
            if (this.verificarGanador(fila, columna)) {
                this.mostrarGanador();
            } else {
                // Cambiar turno solo si no hay ganador
                this.terminarTurno(); 
            }
        }
    }

    iniciarTurno() {
        if (this.juegoTerminado) return;

        this.tiempoRestante = this.tiempoPorTurno;
        this.actualizarTiempo();

        this.temporizador = setInterval(() => {
            this.tiempoRestante--;
            this.actualizarTiempo();

            if (this.tiempoRestante <= 0) {
                this.terminarTurno();
            }
        }, 1000);
    }

    actualizarTiempo() {
        const tiempoRestanteElemento = document.getElementById("tiempo-restante");
        tiempoRestanteElemento.innerText = `Tiempo restante para el jugador ${this.turnoActual.id}: ${this.tiempoRestante} segundos`;
    }

    terminarTurno() {
        clearInterval(this.temporizador);
        this.turnoActual = this.turnoActual === this.jugador1 ? this.jugador2 : this.jugador1;
        this.iniciarTurno(); // Reinicia el temporizador para el siguiente jugador
    }

    verificarGanador(fila, columna) {
        return (
            this.verificarLinea(fila, columna, 1, 0) || // Vertical
            this.verificarLinea(fila, columna, 0, 1) || // Horizontal
            this.verificarLinea(fila, columna, 1, 1) || // Diagonal (abajo a la derecha)
            this.verificarLinea(fila, columna, 1, -1)   // Diagonal (arriba a la derecha)
        );
    }

    verificarLinea(fila, columna, dirFila, dirColumna) {
        const jugador = this.turnoActual.id;
        let conteo = 1;

        // Recorremos en ambas direcciones
        for (let dir of [-1, 1]) {
            for (let paso = 1; paso < 4; paso++) {
                const nuevaFila = fila + dir * paso * dirFila;
                const nuevaColumna = columna + dir * paso * dirColumna;
                if (
                    nuevaFila >= 0 &&
                    nuevaFila < this.filas &&
                    nuevaColumna >= 0 &&
                    nuevaColumna < this.columnas &&
                    this.tablero.tablero[nuevaFila][nuevaColumna]?.jugador.id === jugador
                ) {
                    conteo++;
                } else {
                    break; 
                }
            }
        }
        return conteo >= 4; 
    }

    mostrarGanador() {
        clearInterval(this.temporizador);
        this.juegoTerminado = true; 
    }
    

    reiniciarJuego() {
        clearInterval(this.temporizador);
        this.jugador1.fichas = [];
        this.jugador2.fichas = [];
        this.tablero = new Tablero(this.filas, this.columnas, this.contexto, this.imagenTablero, this.jugador1, this.jugador2);
        this.turnoActual = this.jugador1;
        this.juegoTerminado = false;
        this.tablero.dibujar();
        this.iniciarTurno();
    }
}
