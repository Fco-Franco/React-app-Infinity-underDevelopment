import { Link, Outlet, useNavigate } from "react-router-dom"


function Curso() {
    document.title="Aula07 Cursos"
    const voltar = useNavigate()
    return(
        <>
        <h2>Esses são os nossos cursos</h2>
            <ul>
                <li>
                    <Link class="menuPrincipal-item" to="/Aulas/Aula_7CursosDet">Programação Fullstack</Link>
                <br/>
                    <Link class="menuPrincipal-item" to="/Aulas/Aula_7CursosDet">Data Science</Link>
                </li>
            </ul> 
            {/* <Outlet/> */}
        </>
    )
}

export default Curso

// Se nao for index criar componente com letra inicial maiuscula