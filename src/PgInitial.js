import { Outlet } from "react-router-dom"
import "./App.css"

function PgInitial() {
    document.title = "React App- Pg Inicial"
    const SP = "&nbsp;&nbsp;"
    return (
        <>
            <h1 class="TextGeral">Index Page - Página Inicial</h1>
            <div class="Sites">
                <h3>Sites Uteis</h3>
                {/* <Link to={"/Aulas"}>Página Inicial Aulas</Link> */}
                <ul>
                    <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flex Box</a> </li>
                    <li><a href="https://getcssscan.com/css-box-shadow-examples" target="_blank">Box Shadow</a> </li>
                    <li><a href="https://www.w3schools.com/css/" target="_blank">CSS Tutorial W3Schools</a> </li>
                    <li><a href="https://www.youtube.com/results?search_query=css+layout+project/" target="_blank">css layout project</a> </li>
                </ul>

            </div>

            <div class="homePrincipalClass">
                <h3>Informações Gerais</h3>


                <p>Professor - ; 	Vitor – auxiliar; 		Igor – coordenador do curso</p>

                <p>Cria SPA’s (single page applications), aplicações cuja funcionalidade está concentrada em uma única página, ao invés de criar várias páginas para um site, deixando o site mais fluído.</p>

                <p>Para abrir o terminal Ctrl+J ou Ctrl+"</p>

                <p>Shift+VCCode - Abre outro VSCode</p>

                <p>Não usar var. Let e const podem ser usado. Variável sempre com letra inicia minúscula</p>

                <p>npx create-react-app NomeDoApp // Cria o ambiente React. Escrever em letra minuscula</p>

                <p>npm install react-router-dom // Instala o router</p>

                <p>Se não for index criar componente com letra inicial maiúscula</p>

                <p> <b>{SP}</b> -  Coloca espaços no React</p>
                <p>Baixar o Extensão drácula</p>
            </div>
            <Outlet />
        </>
    )
}

export default PgInitial

// Se nao for index criar componente com letra inicial maiuscula