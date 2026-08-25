import { useState } from "react";
import { docentesMock } from "../mocks/docentesMock";
import DocenteCard from "./DocenteCard";

function ListaDocentes() {
  const [busqueda, setBusqueda] = useState("");

  const docentesFiltrados = docentesMock.filter((docente) =>
    docente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-docentes">
      <input
        type="text"
        placeholder="Buscar docente por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />
      <div className="lista-docentes">
        {docentesFiltrados.map((docente) => (
          <DocenteCard key={docente.id} docente={docente} />
        ))}
      </div>
    </div>
  );
}

export default ListaDocentes;
