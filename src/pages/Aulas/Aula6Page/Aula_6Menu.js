import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Aula06Menu() {
    document.title = "Aula 06 Menu"
    const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
        <>
            <h2>Aula 6 - Page Aula 6</h2>

            <div class="aula6Container">
                <div class="aula6">
                    <Link class="menuPrincipal-item" to={"/Aulas/Aula_6CursoRoute"}>Curso</Link>
                    <br />

                    <Link class="menuPrincipal-item" to={"/Aulas/Aula_6ContatoRoute"}>Contato</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Aula06Menu