

//Comentario

/**
 * Comentario de 
 * varias 
 * líneas
 */

//Variables: espacios de memoria que en algún momento las utizamos
//Declaración de una variable
var cajaFacturas;

//Asignar un valor a la variable
cajaFacturas = "Info de las facturas 2020"

console.log(cajaFacturas);

//Declarar una variable y asignarle el valor al mismo tiempo
var nombre = "Marcelo"; //variable de caracteres o cadenas de texto

//otra palabra reservada
let edad = 20;//dato de tipo numérico

let resultado = 5 * edad;

console.log(resultado);

resultado = 5 + edad;

console.log(resultado)

console.log('================================================');

let apellido = 'Pérez';

//concateno la variable con un texto
console.log('Mi apellido es: ' + apellido);

//puedo utilizar coma
console.log("Mi apellido es: " , apellido);

//puedo utilizar template string
console.log(`Mi nombre es {nombre} y mi apellido es ${apellido}`);


console.log('================================================');

//Variabale constante: no cambia en toda la ejecución de la app
const DNI = 123456789;

console.log('Mi DNI es ', DNI);

//No puedo asignar otro valor a una constante ya declarada
//DNI = 987654321;


console.log('================================================');

//Errores en los nombre de las variables
/*var 12315 = 'Pepe';
let auro rojo = "El auto es rojo";
let -uno = 1;
var var = 25;
let let = 30;
*/

//Nombre posibles de variables
var numero1 = 1;
let $numero = 100;
const _IVA = 0.21;
let nombre_apellido = 'Nombre y Apellido';
let nombreProvincia = "CABA"
let nombreProducto = "Producto";
let nombreClienteSucursal = "Cliente";
let nombreEmpleado = "Empleado";

console.log($numero);

console.log('================================================');

//Operadore Matemáticos
let numUno = 150;
let numDos = 20;

let suma = numUno + numDos;

console.log('La suma de dos número es: ', suma);

let resta = numUno - numDos;

console.log("La resta es: " + resta);

let multiplicacion = numUno * numDos;

console.log(`La multiplicación es: ${multiplicacion}`);

let division = numUno / numDos;

console.log("La división es: " + division);

let modulo = numUno % numDos;

console.log('El módulo es: ', modulo);

let porcentaje = numUno * numDos / 100;

console.log('El 20% de 150 es: ' + porcentaje);

let producto = 1200;

//calculamos el IVA del kilo de carne
resultado = producto * _IVA;

let totalPago = producto + resultado;

console.log("El iva del producto es: ", resultado);

console.log(`El IVA más el costo del producto es en total: ${totalPago}`);

console.log('================================================');


//Operadores Relacionales

//Operadores Lógicos

//Operadores de incremento y decremento




