import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListaDocentes from "./components/ListaDocentes";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1>Directorio de Docentes</h1>
      <ListaDocentes />
      <Footer />
    </>
  );
}

export default App;
