import './App.css';
/* Importamos las librerías para el ruteo */
import {
  Routes,
  Route
} from 'react-router-dom'
import Layout from './Componentes/Layout';
import Home from './Componentes/Home';
import Productos from './Componentes/Productos';
import Formulario from './Componentes/Formulario';


function App() {
  return(

    <div>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home /> }></Route>
        <Route path="/productos" element={ <Productos />}></Route>
        <Route path="/formulario" element={ <Formulario /> }></Route>
      </Route>
    </Routes>

    

    </div>
  );
}

export default App;
