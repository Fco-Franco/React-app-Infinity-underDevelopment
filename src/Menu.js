import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import './App.css';


function Menu() {
    document.title = "Menu Inicial"
    const voltar = useNavigate()
    return (
    <>
        <nav class="menuPrincipal" >
            <ul>
                <li> <Link class="menuPrincipal_Item" to={"/"}>Página Inicial</Link></li>

                <li><Link class="menuPrincipal_Item" to={"/esporte"} >Menu Esporte</Link></li>
        
                <li><Link class="menuPrincipal_Item" to={"/aulas"}>Menu Aulas</Link></li>

                <li><Link class="menuPrincipal_Item" onClick={() => voltar(-1)}>Voltar</Link></li>

            </ul>
        </nav>

        <Outlet />
    </>
    )
}

export default Menu

// Se nao for index criar componente com letra inicial maiuscula