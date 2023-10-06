import { Link, Outlet, useNavigate } from "react-router-dom"


function EsporteMenu() {

    return (
        <>
            <nav class="menuPrincipal">
                <ul>
                    <li> <Link class="menuPrincipal-item" to={"/esporte"}>Esportes pg Inicial</Link></li>

                    <li> <Link class="menuPrincipal-item" to={"futebol"}>Futebol</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default EsporteMenu

// Se nao for index criar componente com letra inicial maiuscula