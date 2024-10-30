class Tablero {
    constructor(filas, columnas, contexto, imagenTablero, jugador1, jugador2) {
        this.filas = filas;
        this.columnas = columnas;
        this.contexto = contexto;
        this.imagenTablero = imagenTablero;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.tablero = this.inicializarTablero();
        this.fichaSeleccionada = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.anchoColumna = 300 / columnas;
        this.ganador = null;
        this.juegoActivo = true;
        this.temporizador = new Temporizador(this); 
        this.turnoActual = jugador1; // Empieza jugador1

        // Agregar eventos del mouse
        this.contexto.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.contexto.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.contexto.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));

        this.actualizarTurno();
    }

    inicializarTablero() {
        this.jugador1.crearFichas(10, 18, 360, 100);
        this.jugador2.crearFichas(10, 18, 780, 100);
        return Array.from({ length: this.filas }, () => Array(this.columnas).fill(null));
    }

    dibujar() {
        this.contexto.clearRect(0, 0, this.contexto.canvas.width, this.contexto.canvas.height);
        this.contexto.drawImage(this.imagenTablero, 414, 86, 310, 305);
        this.jugador1.dibujarFichas(this.contexto);
        this.jugador2.dibujarFichas(this.contexto);

        for (let fila = 0; fila < this.filas; fila++) {
            for (let col = 0; col < this.columnas; col++) {
                const x = 420 + col * this.anchoColumna;
                const y = 90 + fila * 50;
                this.contexto.strokeStyle = 'black';
                this.contexto.lineWidth = 1;
                this.contexto.strokeRect(x, y, this.anchoColumna, 50);

                const ficha = this.tablero[fila][col];
                if (ficha) {
                    ficha.dibujar(this.contexto, x + this.anchoColumna / 2, y + 25);
                }
            }
        }

        if (this.fichaSeleccionada) {
            this.fichaSeleccionada.dibujar(this.contexto, this.mouseX, this.mouseY);
        }

        if (this.ganador) {
            this.contexto.font = '30px Arial';
            this.contexto.fillStyle = 'red';
            this.contexto.fillText(`Ganador: ${this.ganador.id}`, 420, 50);
            this.contexto.fillText("El juego ha terminado.", 420, 80);
            this.detenerTemporizador(); 
        }
    }

    colocarFicha(columna) {
        for (let fila = this.filas - 1; fila >= 0; fila--) {
            if (!this.tablero[fila][columna]) {
                this.tablero[fila][columna] = this.fichaSeleccionada;
                return fila;
            }
        }
        return null;
    }

    verificarGanador(fila, columna) {
        return this.comprobarLinea(fila, columna, 1, 0) || 
               this.comprobarLinea(fila, columna, 0, 1) || 
               this.comprobarLinea(fila, columna, 1, 1) || 
               this.comprobarLinea(fila, columna, 1, -1);
    }

    comprobarLinea(fila, columna, deltaFila, deltaColumna) {
        let cuenta = 1;

        for (let i = 1; i < 4; i++) {
            const nuevaFila = fila + i * deltaFila;
            const nuevaColumna = columna + i * deltaColumna;

            if (nuevaFila < 0 || nuevaFila >= this.filas || nuevaColumna < 0 || nuevaColumna >= this.columnas) {
                break;
            }
            if (this.tablero[nuevaFila][nuevaColumna]?.jugador === this.fichaSeleccionada.jugador) {
                cuenta++;
            } else {
                break;
            }
        }

        for (let i = 1; i < 4; i++) {
            const nuevaFila = fila - i * deltaFila;
            const nuevaColumna = columna - i * deltaColumna;

            if (nuevaFila < 0 || nuevaFila >= this.filas || nuevaColumna < 0 || nuevaColumna >= this.columnas) {
                break;
            }
            if (this.tablero[nuevaFila][nuevaColumna]?.jugador === this.fichaSeleccionada.jugador) {
                cuenta++;
            } else {
                break;
            }
        }

        return cuenta >= 4;
    }

    actualizarTurno() {
        document.getElementById("turno-actual").innerText = `Turno de: ${this.turnoActual.id}`;
        this.temporizador.iniciar(); // Iniciar el temporizador al cambiar de turno
    }

    onMouseDown(event) {
        const { offsetX, offsetY } = event;

        if (!this.juegoActivo) return;

        if (!this.fichaSeleccionada) {
            this.fichaSeleccionada = this.turnoActual.seleccionarFicha(offsetX, offsetY);
            if (this.fichaSeleccionada) {
                this.mouseX = offsetX;
                this.mouseY = offsetY;
            }
        }
    }

    onMouseMove(event) {
        if (this.fichaSeleccionada) {
            this.mouseX = event.offsetX;
            this.mouseY = event.offsetY;
            this.dibujar();
        }
    }

    onMouseUp(event) {
        if (this.juegoActivo && this.fichaSeleccionada) {
            const columna = Math.floor((this.mouseX - 420) / this.anchoColumna);
            const dentroDelTablero = columna >= 0 && columna < this.columnas;

            if (dentroDelTablero) {
                const fila = this.colocarFicha(columna);
                if (fila !== null) {
                    if (this.verificarGanador(fila, columna)) {
                        this.ganador = this.fichaSeleccionada.jugador;
                        this.juegoActivo = false;
                    } else {
                        this.cambiarTurno();
                    }
                    this.fichaSeleccionada = null;
                } else {
                    this.fichaSeleccionada.resetPosition();
                }
            } else {
                this.fichaSeleccionada.resetPosition();
            }

            this.fichaSeleccionada = null;
            this.dibujar();
        }
    }
    actualizarTiempoRestante(tiempo) {
        document.getElementById("tiempo-juego").innerText = `Tiempo de juego restante: ${tiempo} segundos`;
    }
    
    cambiarTurno() {
        this.turnoActual = this.turnoActual === this.jugador1 ? this.jugador2 : this.jugador1;
        this.actualizarTurno();
    }

    terminarTurno() {
        this.cambiarTurno(); 
    }

    detenerTemporizador() {
        this.temporizador.detener(); 
    }
}
