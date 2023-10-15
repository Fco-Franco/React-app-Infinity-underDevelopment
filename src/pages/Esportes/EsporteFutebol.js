import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import './Esporte.css';

function EsporteFutebol() {
    document.title = "Esporte Futebol"
    const voltar = useNavigate();
    const location = useLocation();
    return (
        <>
            <h2>Pagina Inicial Futebol</h2>
            <pre>Location = {JSON.stringify(location.pathname, null, 2)}</pre>
   
            <ul>
                <div class="futebolContainer">
                    <li>
                        <div class="card">
                            <a class="cardItem" href="https://www.espn.com.br/futebol/time/_/id/9969/bra.cear" target="_blank">
                                <img class="cardItem" src="https://upload.wikimedia.org/wikipedia/de/e/e9/Ceara_Sporting_Clube_de_Fortaleza.svg" alt="Logo Ceará Sporting Clube">
                                </img>
                                Ceará Sporting</a>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <a class="cardItem" href="https://www.espn.com.br/futebol/" target="_blank">
                                <img class="cardItem" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Espn.png" alt="Logo ESPN">
                                </img>
                                ESPN</a>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <a class="cardItem" href="https://www.cbf.com.br/futebol-brasileiro" target="_blank">
                                <img class="cardItem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR-oFU1_MhlCLwIiZBfHa5UYuyq9fdjt6tErXw3OzyHwkxE0qKtunKBJhZZjjThwRU-k&usqp=CAU" alt="Logo CBF">
                                </img>
                                CBF</a>
                        </div>
                    </li>
                </div>
            </ul>
            <div class="formContatoBTN">
                <Link class="menuPrincipal_Item" to={"/esporte"}>Inicial Esportes</Link>
                <br />
                <button class="menuPrincipal_Item" onClick={() => voltar(-1)}>Voltar</button>
            </div>
        </>
    )
}

export default EsporteFutebol
