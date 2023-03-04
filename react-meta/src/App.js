import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main';

function App() {
  return (
    <div className="App">
      {/* Llamamos al componente Navbar */}
      <Navbar />
      {/* Llamamos al Main */}
      <Main />
      {/* Llamamos al componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
