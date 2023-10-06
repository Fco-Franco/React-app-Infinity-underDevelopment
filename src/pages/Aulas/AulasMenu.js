import { Route, Link, Outlet, useNavigate, Routes } from "react-router-dom"
// import AulasHome from "./AulasHome";

function AulasMenu() {
    return (
        <>
<nav class="menuPrincipal">

<ul>
<li><Link class="menuPrincipal-item" to={"aula1Pg01"}>Aula 01</Link></li>

<li><Link class="menuPrincipal-item" to={"aula2Pg01"}>Aula 02</Link></li>

<li><Link class="menuPrincipal-item" to={"aula3Pg01"}>Aula 03</Link></li>

<li><Link class="menuPrincipal-item" to={"aula4Pg01"}>Aula 04</Link></li>

<li><Link class="menuPrincipal-item" to={"aula5Pg01"}>Aula 05</Link></li>

<li> <Link class="menuPrincipal-item" to={"aula6Pg01"}>Aula 06</Link></li>

<li> <Link class="menuPrincipal-item" to={"aula7Pg01"}>Aula 07</Link></li>

<li> <Link class="menuPrincipal-item" to={"aula8Pg01"}>Aula 08</Link></li>

</ul>
</nav>

            {/* <Routes> */}
                {/* <Route index element={<AulasHome />} /> */}
            {/* </Routes> */}

            <Outlet />
        </>
    )
}

export default AulasMenu

// Se nao for index criar componente com letra inicial maiuscula