import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import { voltar } from "react-router-dom";


// function TitleComponent(children);

function Aula_6Contato() {
    document.title = "Aula6 Contato"
    const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
<> <h2>Aula 6 - Contato</h2>
    <div class="formContainer">
        <div class="formContato">
            <h1>Entre em contato</h1>
            <label>Email</label>
            <br></br>
            <input type="email" />
            <br></br>

            <label>Senha</label>
            <br></br>
            <input type="password" />
            <br></br>

            <label>Mensagem</label>
            <br></br>
            <textarea></textarea>
            <br></br>
            
            <div class="formContatoBTN">
                <button class="menuPrincipal-item">Enviar</button>
                <br></br>
            </div>
        </div>
    </div>
</>
    )
}

export default Aula_6Contato

// Se nao for index criar componente com letra inicial maiuscula