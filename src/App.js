import { BrowserRouter, Route, Routes } from "react-router-dom";

// Menu
import Home from "./Home";
import Menu from "./Menu";
import EsporteMenu from "./pages/Esportes/EsporteMenu";
import AulasMenu from "./pages/Aulas/AulasMenu"

//Esportes
import EsporteHome from "./pages/Esportes/EsporteHome";
import EsporteFutebol from "./pages/Esportes/EsporteFutebol";

//Aulas
import AulasHome from "./pages/Aulas/AulasHome";
import Aula_1Menu from "./pages/Aulas/Aula1Page/Aula_1Menu"
import Aula_2Menu from "./pages/Aulas/Aula2Page/Aula_2Menu"
import Aula_3Menu from "./pages/Aulas/Aula3Page/Aula_3Menu"
import Aula_4Menu from "./pages/Aulas/Aula4Page/Aula_4Menu"
import Aula_5Menu from "./pages/Aulas/Aula5Page/Aula_5Menu"
import Aula_6Menu from "./pages/Aulas/Aula6Page/Aula_6Menu"
import Aula_7Menu from "./pages/Aulas/Aula7Page/Aula_7Menu"
import Aula_8Menu from "./pages/Aulas/Aula8Page/Aula_8Menu";

//Aula 6
import Aula_6Curso from "./pages/Aulas/Aula6Page/Aula_6Cursos";
import Aula_6Contato from "./pages/Aulas/Aula6Page/Aula_6Contato";


//Aula 7
// import Aula_7CursosDet from "./pages/Aulas/Aula7Page/Aula_7CursosDet";
import Aula_7CursosDet from "./pages/Aulas/Aula7Page/Aula_7CursosDet";
import Aula_7Cursos from "./pages/Aulas/Aula7Page/Aula_7Cursos";
import Aula_7Contato from "./pages/Aulas/Aula7Page/Aula_7Contato";
import Aula_7MSGEnviada from "./pages/Aulas/Aula7Page/Aula_7MSGEnviada";

import Aula08MenuRoute from "./pages/Aulas/Aula8Page/Aula_8Menu";

import Page404 from "./Page404"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Menu */}<>
          <Route exact path="/" element={<Menu />}>{/* Rota fixa */}
            <Route index element={<Home />} />
            <Route exact path="EsporteMenu" element={<EsporteMenu />} />
            <Route exact path="AulasHome" element={<AulasHome />} />
          </Route>
        </>

        {/* Rota Esportes */}<>
          <Route exact path="/" element={<Menu />}>{/* Rota fixa */}
            {/* Rota fixa */}
            <Route exact path="/esporte" element={<EsporteMenu />}>
              <Route index element={<EsporteHome />} />
              <Route exact path="futebol" element={<EsporteFutebol />} />
              {/* <Route exact path="futebol" element={<Futebol />} /> */}
            </Route>
          </Route>
        </>

        {/* Rota Aulas */}<>
          <Route exact path="/Aulas" element={<Menu />}>
            {/* Rota fixa */}
            <Route index element={<AulasMenu />} />
            {/* Aulas Menu */}

            {/* Rota 01 */}<>
              <Route exact element={<AulasMenu />} >
                <Route exact path="Aula_1MenuRoute" element={<Aula_1Menu />} />
              </Route>
            </>

            {/* Rota 02 */}<>
              <Route exact element={<AulasMenu />} >
                <Route exact path="Aula_2MenuRoute" element={<Aula_2Menu />} />
              </Route>
            </>

            {/* Rota 03 */}<>
              <Route exact element={<AulasMenu />} >
                <Route exact path="Aula_3MenuRoute" element={<Aula_3Menu />} />
              </Route>
            </>

            {/* Rota 04 */}<>
              <Route exact element={<AulasMenu />} >
                <Route exact path="Aula_4MenuRoute" element={<Aula_4Menu />} />
              </Route>
            </>

            {/* Rota Aula 5 */}<>
              <Route exact element={<AulasMenu />} >
                <Route index path="Aula_5MenuRoute" element={<Aula_5Menu />} />
              </Route>
            </>


            {/* Rota Aula 6 */}<>
              <Route exact element={<AulasMenu />} >
                <Route index path="Aula_6MenuRoute" element={<Aula_6Menu />} />
                <Route>
                  <Route exact path="Aula_6CursoRoute" element={<Aula_6Curso />} />
                  <Route exact path="Aula_6ContatoRoute" element={<Aula_6Contato />} />
                </Route>
              </Route></>


            {/* Rota Aula7 */}<>
              <Route element={<AulasMenu />} >
                <Route index path="Aula_7MenuRoute" element={<Aula_7Menu />} />
                <Route path="Aula_7CursosRoute" element={<Aula_7Cursos />} />
                <Route path="Aula_07ContatoRoute" element={<Aula_7Contato />} />
                <Route path="Aula_7MSGEnviadaRoute" element={<Aula_7MSGEnviada />} />
                <Route path="Aula_7CursosDetRoute/:id" element={<Aula_7CursosDet/>}/>

              </Route>
            </>

            {/* Rota Aula8 */}<>
              <Route exact element={<AulasMenu />} >
                <Route index path="Aula_8MenuRoute" element={<Aula_8Menu />} />
              </Route>
            </>

          </Route>
        </>

        {/* Outras Rotas */}<>
          <Route exact path="*" element={<Page404 />} />
        </>

      </Routes>
    </BrowserRouter >


  );
}

export default App;


