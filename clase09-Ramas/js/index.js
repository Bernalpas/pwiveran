

//función flecha
const resultado = (a, b) => {
    return a + b
}

console.log(resultado(5, 8));


//Arrays - Arreglos - Vectores: variables que tienen relación entre si
let frutaUno = 'peras';
let frutaDos = 'ciruelas';
let frutaTres = 'manzanas';

// índice: posición que ocupa la info
//i =>           0          1           2           3          4          5
let frutas = ['peras', 'ciruelas', 'manzanas', 'ananá', 'naranjas', 'bananas'];

//i =>            0       1        2       3
let alumnos = ['Juan', 'Pepe', 'Mario', 'Juana']; 

let persona = ['Pepe', 'Pérez', 123456789, 'San Martín 200', 25, 'Córdoba'];

let notas = [];

//imprimimos todos los elementos del arreglo
console.log('Las frutas son: ', frutas);

console.log('Los alumnos son: ', alumnos);

console.log('Los datos personales de Pepe son: ', persona);
console.log('Los datos personales de Pepe son:\n Nombre: ' 
    + persona[0] 
    + ' \n Apellido: ' 
    + persona[1]);

//imprimimos los elementos de a uno
console.log('Las frutas son: ', frutas[0]);
console.log('Las frutas son: ', frutas[1]);
console.log('Las frutas son: ', frutas[2]);
console.log('Las frutas son: ', frutas[3]);
console.log('Las frutas son: ', frutas[4]);
console.log('Las frutas son: ', frutas[5]);
console.log('Las frutas son: ', frutas[6]);


console.log('============================================================');
console.log('============================================================');

//método para contar los elementos del arreglo 
//n - 1: índice
console.log('La cantidad de elementos de frutas es: ', frutas.length);
console.log('La cantidad de alumnos es: ', alumnos.length);


console.log('Los alumnos son: ', alumnos);

//Métodos más usados de los arreglos

function agregar() {
    let dato = document.getElementById('nombre').value;
    console.log(dato);
    alumnos.push(dato);
    console.log('Los alumnos son: ', alumnos);
}








