import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Aula_7Contato() {
    document.title = "Aula 07 Contato"
    // const localizacao = useLocation()

    const navegacao = useNavigate()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function enviar_dados(e) {
        e.preventDefault()
        navegacao("../aula7MSGEnviada", {
            // Usando "../" para navegar um nível acima
            state: {
                nome: nome,
                email: email,
                mensagem: mensagem
            }
        })

    }


    return (
        <>
            <h2>Aula 7 - Contato</h2>
            <div class="formContainer">
                <form class="formContato" onSubmit={enviar_dados}>
                    <label>Nome</label>
                    <br />
                    <input onChange={(e) => setNome(e.target.value)} required type="text" />
                    <br></br>

                    <label>Email</label>
                    <br />
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" />
                    <br />

                    <label>Mensagem</label>
                    <br />
                    <textarea onChange={(e) => setMensagem(e.target.value)} required cols={20} rows={5} />
                    <br />
                    <br />

                    <div class="formContatoBTN">
                        <Link class="menuPrincipal_Item" to={"/Aula_7MSGEnviada"}>Enviarr</Link>
                        <br></br>
                        <button class="menuPrincipal_Item">Enviar</button>
                        <br></br>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Aula_7Contato

// Se nao for index criar componente com letra inicial maiuscula