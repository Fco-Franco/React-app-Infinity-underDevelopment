// import { useNavigate } from "react-router-dom"
import './Aula6.css';
// import { voltar } from "react-router-dom";


// function TitleComponent(children);

function Aula_6Contato() {
    document.title = "Aula6 Contato"
    // const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    // const ClickPgIndex = () => {
    // voltarConst('/');
    // Caminho para a página desejada
    // };

    return (
        <> <h2>Aula 6 - Contato</h2>
            <div class="formContainer">
                <div class="formContato">
                    <h2>Entre em contato</h2>
                    <label>Email</label>
                    <input type="email" />
                    <br></br>

                    <label>Senha</label>
                    <input type="password" />
                    <br></br>

                    <label>Mensagem</label>

                    <textarea></textarea>
                    <br></br>

                    <div class="formContatoBTN">
                        <button class="menuPrincipal_Item">Enviar</button>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aula_6Contato

// Se nao for index criar componente com letra inicial maiuscula