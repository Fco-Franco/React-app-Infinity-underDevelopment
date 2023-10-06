import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function PgInitialAula7() {
    document.title = "Aula 07 Menu"
    const voltarConst = useNavigate();


    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
        <>
            <h2>Aula 7 - Página Inicial</h2>
            <br />

            <div class="aula7Container">
                <div class="aula7CSS">
                    <ul>
                        <li> <Link class="menuPrincipal-item" to={"/Aulas/aula7Cursos"}>Cursos</Link></li>
                        <br />
                        <li><Link class="menuPrincipal-item" to={"/Aulas/aula7Contato"}>Contato</Link></li>
                        <br />
                    </ul>
                </div>

            </div>


            <Outlet />
        </>
    )
}
export default PgInitialAula7