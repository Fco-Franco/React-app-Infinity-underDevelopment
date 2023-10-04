import { useNavigate } from "react-router-dom";

function Page404(){
    document.title="Erro 404"
    const voltar = useNavigate();

    return(
        <>        <h1>Pagina nao existe. Erro 404</h1>
        <button class="menuPrincipal-item" onClick={() => voltar(-1)}>Voltar</button>
        </>
    )
}

export default Page404