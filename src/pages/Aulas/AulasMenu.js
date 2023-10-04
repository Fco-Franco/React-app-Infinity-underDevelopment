import { Route, Link, Outlet, useNavigate, Routes } from "react-router-dom"
import AulasHome from "./AulasHome";

function AulasMenu() {
    return (
        <>
            <nav class="menuPrincipal">

                <ul>
                    <li><Link class="menuPrincipal-item" to={"Aula_1MenuRoute"}>Aula 01</Link></li>

                    <li><Link class="menuPrincipal-item" to={"Aula_2MenuRoute"}>Aula 02</Link></li>

                    <li><Link class="menuPrincipal-item" to={"Aula_3MenuRoute"}>Aula 03</Link></li>

                    <li><Link class="menuPrincipal-item" to={"Aula_4MenuRoute"}>Aula 04</Link></li>

                    <li><Link class="menuPrincipal-item" to={"Aula_5MenuRoute"}>Aula 05</Link></li>

                    <li> <Link class="menuPrincipal-item" to={"Aula_6MenuRoute"}>Aula 06</Link></li>

                    <li> <Link class="menuPrincipal-item" to={"Aula_7MenuRoute"}>Aula 07</Link></li>

                    <li> <Link class="menuPrincipal-item" to={"Aula_8MenuRoute"}>Aula 08</Link></li>

                </ul>
            </nav>

            <Routes>
                <Route index element={<AulasHome />} />
            </Routes>

            <Outlet />
        </>
    )
}

export default AulasMenu

// Se nao for index criar componente com letra inicial maiuscula