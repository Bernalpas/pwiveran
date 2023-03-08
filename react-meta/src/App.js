import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main';
import Carrusel from './Componentes/Carrusel';
import OtroCarrusel from './Componentes/OtroCarrusel';


let empresa = 'Empresa UTN - Venta';
let pais = 'Argentina';


function App() {
  return (
    <div className="App">
      {/* Llamamos al componente Navbar */}
      <Navbar />

      <h1 className="text-center">
        {empresa}
      </h1>

      <Carrusel />

      {/* Llamamos al Main y le pasamos los props o argumentos al componente */}
      <Main 
        apellido="Pérez" 
        provincia="Salta" 
        pais={pais}
      />

      <OtroCarrusel titulo="Primer Producto" />
      {/* Llamamos al componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
