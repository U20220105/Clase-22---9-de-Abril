abstract class Electrodomestico {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract encender(): void;

    mostrarNombre() {
        console.log(`Electrodoméstico: ${this.nombre}`);
    }
}

class Televisor extends Electrodomestico {
    override encender(): void {
        console.log(`${this.nombre} se enciende y muestra un canal`);
    }
}

class Lavadora extends Electrodomestico {
    override encender(): void {
        console.log(`${this.nombre} inicia el ciclo de lavado`);
    }
}

const aparatos: Electrodomestico[] = [];

aparatos.push(new Televisor("Samsung TV"));
aparatos.push(new Lavadora("LG Lavadora"));

aparatos.forEach(a => {
    a.encender();
});