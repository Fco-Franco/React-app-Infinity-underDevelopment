import { useLocation } from "react-router-dom";

function EsportesPgInitial() {
    document.title = "Esportes Home"
    const location = useLocation();
    return (
        <>
            <h2>Página Inicial de Esportes</h2>
            <h3>Bem vindo aos esportes</h3>
            <pre>Location = {JSON.stringify(location.pathname, null, 2)}</pre>
        </>
    )
}

export default EsportesPgInitial

// Se nao for index criar componente com letra inicial maiuscula