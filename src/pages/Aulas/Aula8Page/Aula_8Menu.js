import { Link, useNavigate } from "react-router-dom";
function Aula_8Menu() {
    document.title = "Aula 08 Menu"
    const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
        <>
            <h2>Aula 8 - Page Aula 8</h2>

            <div class="aula8Container">

                <div class="aula8">
                    <p>Aula 8 conteudo</p>
                </div>

                <div class="aula8Nav">
                    <Link to={"/Aulas"}>Página Inicial Aulas</Link>&nbsp;&nbsp;
                    {/* <br /> */}
                    <button onClick={ClickPgIndex}>Página inicial</button>

                </div>
            </div>
        </>
    )
}
export default Aula_8Menu