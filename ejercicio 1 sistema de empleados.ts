abstract class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract trabajar(): void;

    mostrarNombre() {
        console.log(`Empleado: ${this.nombre}`);
    }
}

class Programador extends Empleado {
    override trabajar(): void {
        console.log(`${this.nombre} está programando en TypeScript`);
    }
}

class Diseñador extends Empleado {
    override trabajar(): void {
        console.log(`${this.nombre} está diseñando una interfaz`);
    }
}

const empleados: Empleado[] = [];

empleados.push(new Programador("Carlos"));
empleados.push(new Diseñador("Ana"));

empleados.forEach(emp => {
    emp.trabajar();
});