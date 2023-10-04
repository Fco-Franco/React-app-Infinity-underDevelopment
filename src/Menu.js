import { Link, Outlet, useNavigate } from "react-router-dom"


function Menu() {
    const voltar = useNavigate()
    return (
    <>
        <nav class="menuPrincipal" >
            <ul>
                <li> <Link class="menuPrincipal-item" to={"/"}>Página Inicial</Link></li>

                <li><Link class="menuPrincipal-item" to={"/esporte"}>Menu Esporte</Link></li>
        
                <li><Link class="menuPrincipal-item" to={"/Aulas"}>Menu Aulas</Link></li>

                <li><Link class="menuPrincipal-item" onClick={() => voltar(-1)}>Voltar</Link></li>

            </ul>
        </nav>

        <Outlet />
    </>
    )
}

export default Menu

// Se nao for index criar componente com letra inicial maiuscula