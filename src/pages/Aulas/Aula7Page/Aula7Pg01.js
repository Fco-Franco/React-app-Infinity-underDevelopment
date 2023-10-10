import { Link, Outlet } from "react-router-dom"

function PgInitialAula7() {
    document.title = "Aula 07 Menu"

    return (
        <>
            <h2>Aula 7 - Página Inicial</h2>
            <br />

            <div class="aula7Container">
                <div class="aula7CSS">
                    <ul>
                        <li> <Link class="menuPrincipal_Item" to={"/Aulas/aula7Cursos"}>Cursos</Link></li>
                        <br />
                        <li><Link class="menuPrincipal_Item" to={"/Aulas/aula7Contato"}>Contato</Link></li>
                        <br />
                    </ul>
                </div>

            </div>


            <Outlet />
        </>
    )
}
export default PgInitialAula7