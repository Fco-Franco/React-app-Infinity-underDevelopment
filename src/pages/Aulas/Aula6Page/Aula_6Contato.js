import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import { voltar } from "react-router-dom";


// function TitleComponent(children);

function Contact() {
    document.title = "Aula6 Contato"
    const voltarConst = useNavigate();
    const voltar = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
<>
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

export default Contact

// Se nao for index criar componente com letra inicial maiuscula