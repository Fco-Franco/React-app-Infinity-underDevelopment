import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Aula_6Curso() {
    document.title = "Aula6-Cursos"
    const voltarConst = useNavigate();
    const voltar = useNavigate();
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
<>
<h2>Aula 6 - Cursos</h2>
<h3>Esses são os nossos cursos</h3>
<ul>
    <li>Programação Fullstack</li>
    <li>Data Science</li>
</ul>

<div class="aula6CSS">
    <Link class="menuPrincipal-item" to={"/Aulas"}>Página Inicial Aulas</Link>
    <button class="menuPrincipal-item" onClick={ClickPgIndex}>Página inicial</button>
    <button class="menuPrincipal-item" onClick={() => voltar(-1)}>Voltar</button>
</div>
{/* <Outlet/> */}
</>
    )
}

export default Aula_6Curso
