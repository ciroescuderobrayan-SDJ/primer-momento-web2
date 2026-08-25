import "./Footer.css";

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {anioActual} Directorio de Docentes. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
