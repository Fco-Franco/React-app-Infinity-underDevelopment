import { Link } from "react-router-dom"
import { voltar } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function EsporteFutebol() {
    document.title = "Esporte Futebol"
    const voltar = useNavigate();
    return (
        <>
            <h1>Pagina Inicial Futebol</h1>
            <h2>Página Futebol</h2>
            <h2>Bem vindo</h2>

            {/* <Link></Link> Tem que escrever o <Link+Enter para importar*/}
            {/* 
            <Link to={"productRouter"}>Ir para Produtos</Link><br /><br />

            <Link to={"contactRouter"}>Ir para Contactos</Link><br /><br /> */}

            <div class="formContatoBTN">
                <Link class="menuPrincipal-item" to={"/esporte"}>Inicial Esportes</Link>
                <br />
                <button class="menuPrincipal-item" onClick={() => voltar(-1)}>Voltar</button>
            </div>
        </>
    )
}

export default EsporteFutebol

// Se nao for index criar componente com letra inicial maiuscula