
//crea una ventana de info en la aplicación
alert("Bienvenido a la App");

//da la posibilidad de introducir datos a la aplicación
prompt('Introduce tu User: ');

//solicitud de confirmación para el cliente
confirm('Quiere guardar los datos cargados?');

//1. Creamos una variable
//2. Le asignamos un prompt a la variable y guarda los datos
let user = prompt('User: ');
let password = prompt('Password: ');
let confirmar = confirm('Registrar Datos');

if(confirmar){
    console.log('Mi user es ' + user);
    console.log('Mi password es ' + password);
    console.log(confirmar);
}else{
    console.log('El cliente no aceptó las cookies');
    alert('Usted no ACEPTÓ las cookies')
}

console.log('===========================================');
console.log('===========================================');

//convertimos el tipo de dato string a números
let uno = parseInt(prompt('Introduce un número: '));
let dos = Number(prompt('Otro número: '));

//let entero = parseInt(uno);

let resultado;

resultado = uno + dos;

alert(`EL resultado es ${resultado}`);
console.log(`EL resultado es ${resultado}`);

console.log(uno);
console.log(dos);

console.log('===========================================');
console.log('===========================================');








