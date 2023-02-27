

console.log('Node y Nodemon sólo ejecutan código JavaScript');

//funciones: pequeñas estructuras de código que realizan una tarea específica
//tiene un nombre: para que la podamos llamar y que realize la tarea.
//puede o no recibir información (parámetros - argumentos) extra para realizar la tarea

//Función sin parámetros
function saludar() {
    console.log('Buenas tardes, bienvenido a la Empresa');
}

//Llamamos a la función las veces que necesitemos utilizarla
saludar();
saludar();

//Función con argumentos como variables
let nombre = "Marcelo";

function despedida(nombre) {
    console.log(`${nombre} Muchas gracias por la visita, lo esperamos siempre!!`);
}

//Llamamos a la función
despedida(nombre);

console.log('==============================================');
console.log('==============================================');

//Función con argumento 
function sumar(x, y) {
    let resultado = x + y;
    console.log(`El resultado de la suma es: ${resultado}`);
}

//1. pasamos los datos
sumar(10, 15);

//2. pasamos variables
let uno = 1500;
let dos = 5000;

//Llamamos a la función
sumar(uno, dos);

//las variables locales no existen fuera de las funciones
//console.log(x, y, resultado);

//variables globales
let resultado; 

function resta(ht, njkajknaj) {//variables global
    resultado = ht - njkajknaj;
    console.log(`El resultado de la suma es: ${resultado}`);
}

resta(dos, uno);

console.log(resultado);


console.log('==============================================');
console.log('==============================================');

function reciboFuncion(a, collback) {
    let nom = 'Pepe'
    console.log('Hola ' + a);
    collback(nom)
}

reciboFuncion(nombre, saludar);

//Cuando pasamos una función, no debemos ejecutarla en las parámetros
reciboFuncion(nombre, despedida);




