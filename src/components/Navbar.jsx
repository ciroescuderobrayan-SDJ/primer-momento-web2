import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Docentes CESDE</h2>
      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Docentes</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
