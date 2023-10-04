
import { Link } from "react-router-dom"

function Aula_1Menu() {
    document.title="Aula 01 Menu"
    return (
        <>
            <h2>Aula 01 - Bem vindo</h2>
            <li> <Link to={"/"}>Página Inicial</Link></li>
            <br></br>
            <li> <Link to={"/Aulas"}>Página Inicial Aulas</Link></li>
        </>
    )
}

export default Aula_1Menu

// Se nao for index criar componente com letra inicial maiuscula