import { useNavigate } from "react-router-dom"


function ButtonInitialAulas() {
    const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/Aulas');
        // Caminho para a página desejada
    };

    return (
        <>
            <button onClick={ClickPgIndex}>Página inicial Aulas</button>
        </>
    )
}
export default ButtonInitialAulas