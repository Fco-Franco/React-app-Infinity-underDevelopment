import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonComponent from "../../../Components/Button/Index";
import EventForm from "../../../Components/Forms/CadastroForm";
import ButtonInitialAulas from "../../../Components/Button/ButtonInitialAulas";

function Aula4() {

    document.title = "Aula 04 Menu"
    // #region ReturnAulas

    //#endregion

    // -------------------------------------- useState Nome --------------------------------------
    // #region 1
    const nome1 = "Abel"

    const [nome2, setNome2] = useState("Coisa  - Nome 2")
    console.log(nome2)
    // const atualizarNome = () => {
    //   setNome2("Nome atualizado");
    // }
    const atualizarNome = () => {
        const novoNome = prompt("Digite o novo nome:"); // Exibe uma caixa de diálogo

        if (novoNome !== null) {
            setNome2(novoNome); // Atualiza o nome2 com o novo nome
        }
    }


    // ===========================================================
    const [nome3, setNome3] = useState("Qualquer nome - Nome 3");
    const [novoNome3, setNovoNome3] = useState(""); // Estado para o novo nome digitado

    const atualizarNome3 = () => {
        setNome3(novoNome3); // Atualiza o nome3 com o novoNome3
        setNovoNome3(""); // Limpa o campo de entrada após a atualização
    };

    // #endregion

    // -------------------------------------- useState contador --------------------------------------
    // #region
    const [contador, setContador] = useState(0)
    function contarFunction() {
        setContador(contador + 1)
    }
    // #endregion

    // -------------------------------------- useState contador 1--------------------------------------
    // #region
    const [num1, setNum1] = useState(0)
    function aumentarFunction() {
        setNum1(num1 + 1)
    }
    function diminuirFunction() {
        if (num1 > 0) {
            setNum1(num1 - 1);
        }
        else {
            alert("Não pode ser negativo")
        }
    }

    // #endregion

    // -------------------------------------- useState contador 2--------------------------------------
    // #region
    const [num2, setNum2] = useState(0)

    const [contadoruseEffect, setContadoruseEffect] = useState(0)
    const [multiplicadorUseEffect, setMultiplicadoruseEffect] = useState(0)
    // #endregion

    // --------------------------------------  useEffect 1  com Contador useEffect--------------------------------------
    // #region
    useEffect(() => {
        setMultiplicadoruseEffect(contadoruseEffect * 3)
    }, [contadoruseEffect])
    // useEffect (()=>{}, [])
    // #endregion


    // -------------------------------------- useEffect 2 COM DUAS FUNÇOES--------------------------------------
    // #region
    const [curso, setCurso] = useState("Escolha um botao")
    // const [multiplicadorUseEffect, setMultiplicadoruseEffect] = useState(0)


    // useEffect(() => {
    //   setMultiplicadoruseEffect(contadoruseEffect * 3)
    // }, [contadoruseEffect])
    // useEffect (()=>{}, [])
    // #endregion


    //  ---------------- useEffect 2 COM UMA FUNÇÃO USANDO O EVENT -----------------------------------------
    // #region
    const [curso1, setCurso1] = useState("Aula 04")

    useEffect(() => {
        document.title = curso1
    }, [curso1])
    function clicou1(event) {
        setCurso1(event.target.innerHTML)
    }
    // #endregion

    //  ---------------- EXERCICIO FORMULARIO CHAT GBT -----------------------------------------

    const [eventList, setEventList] = useState([]);

    const handleAddEvent = (newEvent) => {
        setEventList([...eventList, newEvent]);
    };


    return (
        <>
            <h2>Aula 04 - ReactHooks</h2>
            <Link to={"/Aulas"}>Página Inicial Aulas</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ButtonInitialAulas></ButtonInitialAulas>



            {/*-------------------------------------- useState --------------------------------------*/}
            <hr />
            <b><h2> useState </h2>
                ---------------------------------------------------------------------------------------------<br />
                {/* {setNome1} <br /> */}
                Nome 1: {nome1} <br /><br />
                {/* {setNome2} <br /> */}
                Nome 2: {nome2} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <button onClick={atualizarNome}>Atualizar Nome 2</button><br /><br />
                {/* {setNome3} <br /> */}
                <p>Nome 3 atual: {nome3}</p>
                <input type="text" value={novoNome3} onChange={(e) => setNovoNome3(e.target.value)} placeholder="Digite o novo nome"
                /> &nbsp;&nbsp;&nbsp;
                <button onClick={atualizarNome3}>Atualizar Nome 3</button><br /><br />


                {/*-------------------------------------- Contador --------------------------------------*/}
                -------------------------------------- Contador    -------------------------------------- <br /><br />
                <button onClick={contarFunction}> Contador </button> &nbsp; &nbsp; {contador}<br /><br />


                {/*-------------------------------------- Contador 1 --------------------------------------*/}
                -------------------------------------- Contador 1 -------------------------------------- <br /><br />
                <button onClick={aumentarFunction}> Aumentar 1 </button>&nbsp;&nbsp;
                {num1}&nbsp;&nbsp;
                <button onClick={diminuirFunction}> Diminuir 1 </button><br /><br />

                {/*------------------------------ Contador 2 ---------------------------------*/}
                -------------------------------------- Contador 2 -------------------------------------- <br /><br />
                <button onClick={() => setNum2(num2 + 1)}> Aumentar 2 </button>&nbsp;&nbsp;
                {num2}&nbsp;&nbsp;
                <button onClick={() => num2 > 0 ? setNum2(num2 - 1) : null}> Diminuir 2</button><br /><br />
                <button onClick={() => {
                    console.log(num2)
                    setNum2(num2 + 1)
                }}> Aumentar 2.1 </button>&nbsp;&nbsp;
                <ButtonComponent onClick={() => num2 > 0 ? setNum2(num2 - 1) : null}> Diminuir 2.1</ButtonComponent><br /><br />
                {/* Duvida: pq nao funciona? */}

                {/*-------------------------------------- useEffect --------------------------------------*/}
                <hr />
                <h2> useEffect </h2>
                ---------------- useEffect 1 -----------------------------------------<br /><br />
                <button onClick={() => setContadoruseEffect(contadoruseEffect + 1)}> Contador useEffect</button>&nbsp;&nbsp;
                {contadoruseEffect} <br /><br />
                <p> Multiplicador useEffect : {multiplicadorUseEffect} <br /></p>

                {/* ---------------- useEffect 2 COM DUAS FUNÇÕES ----------------------------------------- */}
                ---------------- useEffect 2 COM DUAS FUNÇÕES -----------------------------------------<br /><br />
                <button onClick={() => setCurso(curso = "blq")}>Prog FullStack</button>&nbsp;&nbsp;
                <button>Prog Data Science</button><br /><br />
                Estou cursanco: {curso}<br /><br />
                {/* <button onClick={() => setContadoruseEffect(contadoruseEffect + 1)}> Contador useEffect</button>
        {contadoruseEffect} <br /><br />
        <p> Multiplicador useEffect : {multiplicadorUseEffect} <br /></p> */}



                {/* ---------------- useEffect 2 COM UMA FUNÇÃO USANDO O EVENT ----------------------------------------- */}
                ---------------- useEffect 2 COM UMA FUNÇÃO USANDO O EVENT -----------------------------------------<br /><br />
                <button onClick={clicou1}>Programação FullStack</button>&nbsp;&nbsp;
                <button onClick={clicou1}>Data Science</button>
                <p>Eu estou cursando: {curso1} </p>


                {/* ----------------------------------------------- EXERCICIO ----------------------------------------- */} <hr /> <br /></b>

            <h4>Crie um pequeno formulário de cadastro para criar um novo evento com campo de nome, data e link de uma imagem. Quando a pessoa cadastrar, o state da lista de eventos deve ser atualizado para adicionar o evento cadastrado<br /></h4>
            <div>
                <h2>Cadastro de Eventos - Chat GBT</h2>
                <EventForm onAddEvent={handleAddEvent} />

                <h3>Eventos Cadastrados</h3>
                <ul>
                    {eventList.map((event, index) => (
                        <li key={index}>
                            <strong>Nome:</strong> {event.name}<br />
                            <strong>Data:</strong> {event.date}<br />
                            <strong>Imagem:</strong> {event.image}
                        </li>
                    ))}
                </ul>
            </div>


        </>
    )
}

export default Aula4

// Se nao for index criar componente com letra inicial maiuscula