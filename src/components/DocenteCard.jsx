import "./DocenteCard.css";

function DocenteCard({ docente }) {
  return (
    <div className="docente-card">
      <span className="badge">DOCENTE</span>
      <img src={docente.foto} alt={docente.nombre} className="docente-foto" />
      <h3>{docente.nombre}</h3>
      <p className="especialidad">{docente.especialidad}</p>
      <p className="descripcion">{docente.descripcion}</p>
      <div className="tags">
        {docente.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <button className="btn-contactar">Contactar</button>
    </div>
  );
}

export default DocenteCard;
