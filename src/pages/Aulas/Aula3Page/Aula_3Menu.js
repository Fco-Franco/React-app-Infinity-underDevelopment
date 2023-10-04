import { Link } from "react-router-dom"

function Aula_3Menu() {
    document.title="Aula 03 Menu"
    return (
        <>
            <h2>Aula 03 - Bem vindo</h2>
            <li> <Link to={"/Aulas"}>Página Inicial Aulas</Link></li>

        </>
    )
}

export default Aula_3Menu

// Se nao for index criar componente com letra inicial maiuscula