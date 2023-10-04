import { Link } from "react-router-dom"
function Aula2() {
    document.title="Aula 02 Menu"
    return (
        <>
            <h2>Aula 02 - Bem vindo</h2>
            <li> <Link to={"/Aulas"}>Página Inicial Aulas</Link></li>

        </>
    )
}

export default Aula2

// Se nao for index criar componente com letra inicial maiuscula