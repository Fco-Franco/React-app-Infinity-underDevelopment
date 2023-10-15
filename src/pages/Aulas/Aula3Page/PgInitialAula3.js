import ButtonComponent from "./Components/Button/Index";
// Se for index(boa pratica) ele ficaria import ButtonComponent from "./Components/Button"; Ver no TitleComponent
import Button1 from "./Components/Button/IndexButton";
import Button2 from "./Components/Button/IndexButton1";

import TitleComponent from "./Components/Title";
import TitleComponent1 from "./Components/Title/indexTitle";

import React, { useState } from "react";
import './Aula3.css';

function PgInitialAula3() {
    document.title = "Aula 03 Página Inicial"
    function ClicouNoEnviar() {
        alert("Clicou No Enviar");
    }
    function ClicouNoCancelar() {
        alert("Clicou No Cancelar");
    }
    function mudarCor(e) {
        console.log(e.target);
        console.log(e);
        e.target.style.color = "red"
    }

    const [isButtonFocused, setIsButtonFocused] = useState(false);

    // import React, { useState } from 'react';

    const handleFocus = () => {
        setIsButtonFocused(true);
        alert('O botão recebeu foco!');
    };

    const handleBlur = () => {
        setIsButtonFocused(false);
    };
    return (
        <>
            {/* <React.Fragment> Conteudo </React.Fragment> ou <>Conteudo</> - Nao precisa da
      div cria uma div falsa  */}
            <h2>Aula 03 - Página Inicial</h2>
            <h3>Parte 1 - Revisao</h3>
            <br /><hr /><TitleComponent>Import Title</TitleComponent>      <br />
            <hr /><TitleComponent1 textoDeH1="Texto escrito em H11 - Ao clicar, altera a cor" funcaoClicou={mudarCor}></TitleComponent1>      <br/>
            {/* <ButtonComponent> Texto </ButtonComponent> */}
            <ButtonComponent>Enviar1</ButtonComponent>&nbsp;&nbsp;
            <ButtonComponent>Cancelar1</ButtonComponent>&nbsp;&nbsp;
            <ButtonComponent>Cadastrar1</ButtonComponent>
    <br /> <br />

            <hr /><h3>Parte 2 - Buttons</h3>      <br/>

            {/* Enviar 2 */}
            <button onClick={ClicouNoEnviar}><b>Enviar 2</b></button>&nbsp;&nbsp;

            {/* Cancelar 2 */}
            <button onClick={function ClicouNoCancelar() { alert("Clicou No Cancelar 2"); }}>Cancelar 2</button>&nbsp;&nbsp;

            {/* Cancelar 21 arow function*/}
            <button onClick={() => { alert("Clicou No Cancelar 21"); }}>Cancelar 21</button>&nbsp;&nbsp;

            {/* Cancelar 31 - Se só tiver uma unica linha, pode tirar a chave tambem*/}
            <button onClick={() => alert("Clicou No Cancelar 31")}>Cancelar 31</button>&nbsp;&nbsp;


            {/* Button 1 */}
            <br />      <br /><hr /><h3>Parte 3 - Button 1</h3>      <br/>
            <Button1 textoDoButtom={"BlaBla"} onFocus={e => alert('BlaBlaBla Recebeu onFocus')}></Button1>&nbsp;&nbsp;
            <input onFocus={e => alert('onFocus no input')}
            // onBlur={e => alert('onBlur')}
            />

            <div>
                <button
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    Botãoo
                </button>
                {isButtonFocused && <p>O botão está com foco. Clique em outro lugar e ESC</p>}
            </div>



            {/* Button 2 */}
            <br />
            <hr /> <h3>Parte 3 - Button 2</h3>      <br/>
            <Button2 textoDoButtom={"Cadastrar 01"} funcao_clicou={() => alert("Clicou No Cadastrar 01")}></Button2>&nbsp;&nbsp;
            <Button2 textoDoButtom={"Cadastrar 02"} funcao_clicou={() => console.log("Clicou No Cancelar 2")}></Button2>&nbsp;&nbsp;
            <Button2 textoDoButtom={"Cadastrar 03"} funcao_clicou={() => alert("Clicou No Cancelar 03")}></Button2>


        </>
    )
}

export default PgInitialAula3

// Se nao for index criar componente com letra inicial maiuscula