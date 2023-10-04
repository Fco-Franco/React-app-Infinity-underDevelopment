import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";



function Aula_8Menu() {
    document.title = "Aula 8 Home"
    const voltar = useNavigate();


    return (
        <>
            <h2>Página Inicial de Aula 8</h2>
            <h2>Bem vindo a Aula 08</h2>

            {/* <Link></Link> Tem que escrever o <Link+Enter para importar*/}
            {/* 
            <Link to={"productRouter"}>Ir para Produtos</Link><br /><br />

            <Link to={"contactRouter"}>Ir para Contactos</Link><br /><br /> */}
        </>
    )
}

export default Aula_8Menu

// Se nao for index criar componente com letra inicial maiuscula