import Texts from './Components/text';
import Buttom from './Components/buttom';
import './Aula2.css';
// impor

function PgInitialAula2() {
    document.title = "Aula 02 Pg Inicial"
    return (
        <>
            <h2>Aula 02 - Página Inicial</h2>
            <div className="PgInitialAula2">
                <Texts />
                <Buttom />
            </div>
        </>
    )
}

export default PgInitialAula2

// Se nao for index criar componente com letra inicial maiuscula