"use strict";
class Empleado {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarNombre() {
        console.log(`Empleado: ${this.nombre}`);
    }
}
class Programador extends Empleado {
    trabajar() {
        console.log(`${this.nombre} está programando en TypeScript`);
    }
}
class Diseñador extends Empleado {
    trabajar() {
        console.log(`${this.nombre} está diseñando una interfaz`);
    }
}
const empleados = [];
empleados.push(new Programador("Carlos"));
empleados.push(new Diseñador("Ana"));
empleados.forEach(emp => {
    emp.trabajar();
});
