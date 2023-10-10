
import "./Aula1.css"
import Aula_1Sobre from './Aula_1Sobre';
import Aula_1Navbar from './Aula_1Navbar';

function PgInitialAula1() {
  document.title = "Aula 01 Pg Inicial"
  return (
    <>
      <h2>Aula 01 - Página Inicial</h2>
      <div className="Aula1Page">

        <Aula_1Navbar>

        </Aula_1Navbar>
        <p>
          <Aula_1Sobre></Aula_1Sobre>
        </p>

      </div>
    </>
  );
}

export default PgInitialAula1