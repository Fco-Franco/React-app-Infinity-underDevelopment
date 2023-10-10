import { Link, Outlet } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import './Aula6.css';

function Aula6Pg01() {
    document.title = "Aula 06 Página Inicial"
    // const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    // const ClickPgIndex = () => {
        // voltarConst('/');
        // Caminho para a página desejada
    // };

    return (
        <>
            <h2>Aula 6 - Página Inicial</h2>

            <div class="Aula6CursoContainer">
                {/* <div class="aula6"> */}
                    <Link class="menuPrincipal_Item" to={"/aulas/aula6Cursos"}>Curso</Link>
                    <br />

                    <Link class="menuPrincipal_Item" to={"/aulas/aula6Contato"}>Contato</Link>
                {/* </div> */}
            </div>
            <Outlet />
        </>
    )
}
export default Aula6Pg01