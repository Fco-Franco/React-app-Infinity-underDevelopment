import { Link, Outlet } from "react-router-dom"


function EsporteMenu() {

    return (
        <>
            <nav class="menuPrincipal">
                <ul>
                    <li> <Link class="menuPrincipal_Item" to={"/esporte"}>Esportes Inicial</Link></li>

                    <li> <Link class="menuPrincipal_Item" to={"futebol"}>Futebol</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default EsporteMenu
