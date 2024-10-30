class Temporizador {
    constructor(tablero) {
        this.tablero = tablero;
        this.tiempoRestante = 220; 
        this.intervalo = null;
    }

    iniciar() {
        this.detener();
        this.tiempoRestante = 60; 
        this.tablero.actualizarTiempoRestante(this.tiempoRestante);
        
        this.intervalo = setInterval(() => {
            this.tiempoRestante--;
            this.tablero.actualizarTiempoRestante(this.tiempoRestante);

            if (this.tiempoRestante <= 0) {
                this.detener();
                this.tablero.terminarTurno(); 
            }
        }, 1000); 
    }

    detener() {
        if (this.intervalo) {
            clearInterval(this.intervalo);
            this.intervalo = null;
        }
    }
}
