import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './Aula6.css';

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

<div class="Aula6CursoContainer">
    <Link class="menuPrincipal_Item" to={"/Aulas"}>Página Aulas</Link>
    <button class="menuPrincipal_Item" onClick={ClickPgIndex}>Página inicial</button>
    <button class="menuPrincipal_Item" onClick={() => voltar(-1)}>Voltar</button>
</div>
{/* <Outlet/> */}
</>
    )
}

export default Aula_6Curso
