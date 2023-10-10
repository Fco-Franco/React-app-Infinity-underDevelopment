import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import './Esporte.css';

function EsporteFutebol() {
    document.title = "Esporte Futebol"
    const voltar = useNavigate();
    return (
        <>
            <div class="FutebolContainer">
                <h2>Pagina Inicial Futebol</h2>
                <h3>Página Futebol</h3>
                <h3>Bem vindo</h3>
            </div>
            <div class="formContatoBTN">
                <Link class="menuPrincipal_Item" to={"/esporte"}>Inicial Esportes</Link>
                <br />
                <button class="menuPrincipal_Item" onClick={() => voltar(-1)}>Voltar</button>
            </div>
        </>
    )
}

export default EsporteFutebol
