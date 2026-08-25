import { docentesMock } from "../mocks/docentesMock";
import DocenteCard from "./DocenteCard";

function ListaDocentes() {
  return (
    <div className="lista-docentes">
      {docentesMock.map((docente) => (
        <DocenteCard key={docente.id} docente={docente} />
      ))}
    </div>
  );
}

export default ListaDocentes;
