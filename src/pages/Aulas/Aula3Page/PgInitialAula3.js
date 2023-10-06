import { Link } from "react-router-dom"

function PgInitialAula3() {
    document.title="Aula 03 Menu"
    return (
        <>
            <h2>Aula 03 - Bem vindo</h2>
            <li> <Link to={"/Aulas"}>Página Inicial Aulas</Link></li>

        </>
    )
}

export default PgInitialAula3

// Se nao for index criar componente com letra inicial maiuscula