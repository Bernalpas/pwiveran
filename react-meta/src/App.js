import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main';
import Carrusel from './Componentes/Carrusel';
import OtroCarrusel from './Componentes/OtroCarrusel';


let empresa = 'Empresa UTN - Venta'


function App() {
  return (
    <div className="App">
      {/* Llamamos al componente Navbar */}
      <Navbar />

      <h1 className="text-center">
        {empresa}
      </h1>

      <Carrusel />

      {/* Llamamos al Main */}
      <Main />

      <OtroCarrusel />
      {/* Llamamos al componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
