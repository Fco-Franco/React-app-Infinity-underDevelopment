import { Link, Outlet, useNavigate } from "react-router-dom"


function Curso() {
    document.title="Aula07 Cursos"

    return(
        <>
        <h2>Esses são os nossos cursos</h2>
            <ul>
                <li>
                    <Link class="menuPrincipal-item" to="../Aula_7CursosDetRoute/programacao">Programação Fullstack</Link>
                <br/>
                    <Link class="menuPrincipal-item" to="../Aula_7CursosDetRoute/data">Data Science</Link>
                </li>
            </ul> 
            {/* <Outlet/> */}
        </>
    )
}

export default Curso

// Se nao for index criar componente com letra inicial maiuscula