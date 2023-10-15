import { Link, Outlet, useNavigate } from "react-router-dom"
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

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function MenuPrincipalItem({ to, label }) {
//   const location = useLocation();

//   // Verifique se o caminho da URL atual começa com o caminho do link principal
//   const isActive = location.pathname.startsWith(to);

//   // Estilize o link com base na ativação
//   const linkClassName = isActive ? 'menuPrincipal_Item active' : 'menuPrincipal_Item';

//   return (
//     <Link to={to} className={linkClassName}>
//       {label}
//     </Link>
//   );
// }

// export default MenuPrincipalItem;


