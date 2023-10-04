import { Link, Outlet, useNavigate } from "react-router-dom"


function EsporteMenu() {

    return (
        <>
            <nav class="menuPrincipal">
                {/* <nav style={{backgroundColor:"yellow"}}> */}
                {/* <ul>
                
                        <li> <Link class="menuPrincipal-item" to={"/"}>Pagina Inicial</Link></li>

                        <li> <Link class="menuPrincipal-item" onClick={() => voltar(-1)}>Voltar</Link></li>
                    </ul> */}
                    <ul>        
                        <li> <Link class="menuPrincipal-item" to={"/esporte"}>Esportes Geral</Link></li>

                        <li> <Link class="menuPrincipal-item" to={"futebol"}>Futebol</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default EsporteMenu

// Se nao for index criar componente com letra inicial maiuscula