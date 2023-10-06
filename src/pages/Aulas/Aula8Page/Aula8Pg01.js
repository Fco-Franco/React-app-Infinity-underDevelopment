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
            
        </>
    )
}
export default Aula_8Menu