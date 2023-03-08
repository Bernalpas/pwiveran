import logo from '../logo.svg';
import '../App.css';

const date = new Date();
const hora = date.getHours();
const minutos = date.getMinutes();
const segundos = date.getSeconds();

let nombre = 'Pepe Pérez';

/* Creamos las funciones extras que necesitamos para el componente*/
function damehora() {
    return `${hora}:${minutos}:${segundos}`
}

//                    props
/* function sumar(numuno, numdos) {
    return numuno + numdos;
} */

/* Componente tipo Función Flecha */
const Main = (props) => {
    return(
        <main className="App-header container">
            <img src= {logo} className="App-logo" alt="logo" />
            <p className="fs-2">
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <button type="button" className="btn btn-primary">
                <a 
                    className="App-link" 
                    href="https://reactjs.org" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Aprende React
                </a>
            </button>

            <div className="m-3">
                {/* Llamamos a la función que utilizamos */}
                <h1> Hora: {damehora()} </h1>
            </div>

            <div>
                <h1>Mi nombre es: {nombre}</h1>
            </div>
            <div>
                <h1>y mi apellido es: {props.apellido} </h1>
            </div>
            <div>
                <h1>y mi Provincia es: {props.provincia} </h1>
            </div>
            <div>
                <h1>y mi País es: {props.pais} </h1>
            </div>
        </main>
    )
}

export default Main;