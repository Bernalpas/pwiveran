

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
console.log('================================================');
//Operadores Relacionales
// > mayor que; < menor que; == igual que; >= mayor o igual que; <= menor o igual que 

//Condicionales 
if(true) {//si la condición es verdadera se ejecuta el código dentro de las llaves
    console.log("Hola, soy el true de el condicional IF");
}

if(false){//si la condición es falsa, no se ejecuta el código de las llaves
    console.log("Nunca voy a imprimir esto");
}

console.log('================================================');
console.log('================================================');

edad = 22;

//_IVA = 0.30;

console.log(`Mi edad es ${edad}`);

console.log(`El IVA es ${_IVA}`);

if(edad > 18){//true
    console.log('Podés ingresar a la fiesta y comprar bebidas');
}

if(edad < 18){//false
    console.log("Bueno, te vas fuera y sin bebidas, sos menor de edad");
}

if (edad == 21) {//falso
    console.log("Podés viajar al exterior sin autorización de tus padres");
}

if(edad >= 21){
    console.log("Podés viajar al exterior sin autorización de tus padres");
}else{// si no es verdadero, se ejecuta el else
    console.log('Sos menor de 21 años y necesitas el permiso de tus padres o familiares');
}

console.log('================================================');
console.log('================================================');

let saldo = 13500;
let compra = 8000;
let saldoTotal = saldo - compra;

if(saldo >= compra){
    console.log('Compraste los productos!!');
    console.log('Pagaste ' + compra + " pesos en el producto");
    console.log(`Tu saldo ahora es: ${saldoTotal} pesos`);
}else{
    if(saldo <= compra){//if anidados
        console.log("Te faltan " + saldoTotal);
    }
    console.log('Saldo insuficiente para la compra');
}

console.log('================================================');
console.log('================================================');

//Operadores Lógicos
//&& y lógico - || o logico 
let user = 'Berni';
let password = '12345';
let recoconocimientoFacial = true;

if(user == 'Berni' && password == '12345' && recoconocimientoFacial){//comprueba ambas o todas las condiciones: true
    console.log('Bienvendo al Sistema');
}else{
    console.log('Usuario o Password o Recococimiento Facial incorrectos');
}

console.log('================================================');
console.log('================================================');

user = 'Berni';
password = '12345fgsfdg'

if(user == 'Pepe' || password == '12345'){
    console.log('Bienvenido al Banco');
}else{
    if(user != 'Pepe'){//if anidados
        console.log('Usuario Incorrecto');
    }
    console.log('Algo salió mal...');
}

console.log('================================================');
console.log('================================================');

//Operadores de incremento y decremento == contadores
//carrito de compras
let productos = 8;
compra = false;

if(compra){
    productos++;
    console.log(`Tu carrito tiene ${productos} productos comprado/s`);
}else{
    productos--;
    console.log(`Tu carrito tiene ${productos} productos comprado/s`);
}

console.log('================================================');
console.log('================================================');

//Contenedor
let totalSuper = 0;
let lacteos = 3000;
totalSuper += lacteos; 
console.log(`El total a pagar es de: ${totalSuper} pesos`);

let otroProducto = 5000;
totalSuper += otroProducto;
console.log(`El total a pagar es de: ${totalSuper} pesos`);

let carnes = 2500;
totalSuper += carnes;
console.log(`El total a pagar es de: ${totalSuper} pesos`);

