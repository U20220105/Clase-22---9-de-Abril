"use strict";
class Electrodomestico {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarNombre() {
        console.log(`Electrodoméstico: ${this.nombre}`);
    }
}
class Televisor extends Electrodomestico {
    encender() {
        console.log(`${this.nombre} se enciende y muestra un canal`);
    }
}
class Lavadora extends Electrodomestico {
    encender() {
        console.log(`${this.nombre} inicia el ciclo de lavado`);
    }
}
const aparatos = [];
aparatos.push(new Televisor("Samsung TV"));
aparatos.push(new Lavadora("LG Lavadora"));
aparatos.forEach(a => {
    a.encender();
});
