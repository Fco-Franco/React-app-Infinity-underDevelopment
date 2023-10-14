import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

//Menu 
import Menu from "./Menu";
import PgInitial from "./PgInitial";

//Esportes
import EsporteHome from "./pages/Esportes/EsportesPgInitial";
import EsporteMenu from "./pages/Esportes/EsporteMenu";
import EsporteFutebol from "./pages/Esportes/EsporteFutebol";

//Aulas
import AulasHome from "./pages/Aulas/AulasHome";
import AulasMenu from "./pages/Aulas/AulasMenu";

//Aula1
import PgInitialAula1 from "./pages/Aulas/Aula1Page/PgInitialAula1"

//Aula2
import PgInitialAula2 from "./pages/Aulas/Aula2Page/PgInitialAula2"

//Aula3
import PgInitialAula3 from "./pages/Aulas/Aula3Page/PgInitialAula3"

//Aula4
import PgInitialAula4 from "./pages/Aulas/Aula4Page/PgInitialAula4"

//Aula5
import PgInitialAula5 from "./pages/Aulas/Aula5Page/PgInitialAula5"

//Aula6
import Aula6Pg01 from "./pages/Aulas/Aula6Page/Aula6Pg01"
import Aula_6Cursos from "./pages/Aulas/Aula6Page/Aula_6Cursos"
import Aula_6Contato from "./pages/Aulas/Aula6Page/Aula_6Contato";

//Aula7
import Aula7Pg01 from "./pages/Aulas/Aula7Page/Aula7Pg01"
import Aula_7Cursos from "./pages/Aulas/Aula7Page/Aula_7Cursos"
import Aula_7Contato from "./pages/Aulas/Aula7Page/Aula_7Contato";
import Aula_7MSGEnviada from "./pages/Aulas/Aula7Page/Aula_7MSGEnviada";
import Aula_7CursosDet from "./pages/Aulas/Aula7Page/Aula_7CursosDet";

//Aula8
import Aula8Pg01 from "./pages/Aulas/Aula8Page/Aula8Pg01"
import Header from "./pages/Aulas/Aula8Page/components/Header";
import MMORPG from "./pages/Aulas/Aula8Page/pages/MMORPG";
import FPS from "./pages/Aulas/Aula8Page/pages/FPS";
import MOBA from "./pages/Aulas/Aula8Page/pages/MOBA";
import Jogo from "./pages/Aulas/Aula8Page/pages/Jogo";


import Page404 from "./Page404";

function App2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                    {/* Rota fixa */}
                    <Route index element={<PgInitial />} />

                    {/* Rota Esportes */}<>
                        <Route path="/esporte" element={<EsporteMenu />}>
                            <Route index element={<EsporteHome />} />
                            <Route path="esporte" element={<EsporteHome />} />
                            <Route path="futebol" element={<EsporteFutebol />} />
                        </Route>
                    </>

                    {/* Rota Aulas */}<>
                        <Route path="/aulas" element={<AulasMenu />} >
                            <Route index element={<AulasHome />} />

                            {/* Rota Aula 1 */}<>
                                <Route path="aula1Pg01" element={<PgInitialAula1 />} />
                            </>
                            {/* Rota Aula 2*/}<>
                                <Route path="aula2Pg01" element={<PgInitialAula2 />} />
                            </>

                            {/* Rota Aula 3 */}<>
                                <Route path="aula3Pg01" element={<PgInitialAula3 />} />
                            </>

                            {/* Rota Aula 4 */}<>
                                <Route path="aula4Pg01" element={<PgInitialAula4 />} />
                            </>

                            {/* Rota Aula 5 */}<>
                                <Route path="aula5Pg01" element={<PgInitialAula5 />} />
                            </>

                            {/* Rota Aula 6 */}<>
                                <Route path="aula6Pg01" element={<Aula6Pg01 />} />
                                <Route path="aula6Cursos" element={<Aula_6Cursos />} />
                                <Route path="aula6Contato" element={<Aula_6Contato />} />
                            </>


{/* Rota Aula 7 */}<>
<Route path="aula7Pg01" element={<Aula7Pg01 />} />
<Route path="aula7Cursos" element={<Aula_7Cursos />} />
<Route path="aula7CursoDet/:id" element={<Aula_7CursosDet />} />

<Route path="aula7Contato" element={<Aula_7Contato />} />
<Route path="aula7MSGEnviada" element={<Aula_7MSGEnviada />} />
</>

    {/* Rota Aula 8 */}<>
        <Route path="aula8Pg01" element={<Aula8Pg01 />}/>
        <Route path="mmorpg" element={<MMORPG />} />
        <Route path="fps" element={<FPS />} />
        <Route path="moba" element={<MOBA />} />
        <Route path="jogo/:id" element={<Jogo />} />
                            </>
                        </Route>
                    </>
                </Route>

                {/* Outras Rotas */}<>
                    <Route exact path="*" element={<Page404 />} />
                </>
            </Routes>
        </BrowserRouter >
    )
}

export default App2