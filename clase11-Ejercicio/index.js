

function prueba() {
    console.log('Prueba de Git Push');
}

prueba();

const date = new Date();
const hora = date.getHours();
const minutos = date.getMinutes();
const segundos = date.getSeconds();

/* Creamos las funciones extras que necesitamos para el componente*/
function damehora() {
    console.log(hora);
    console.log(minutos);
    console.log(segundos);
    return `${hora}:${minutos}:${segundos}`
}

    
setTimeout(() => {
    console.log(`${hora}:${minutos}:${segundos}`);
}, 1000);

