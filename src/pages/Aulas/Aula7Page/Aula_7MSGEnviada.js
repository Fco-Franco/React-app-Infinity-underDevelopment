import { useState } from "react";
import { useLocation } from "react-router-dom";
// import * as React from 'react';

function Aula_7MSGEnviada(){
    document.title = "Aula 07 MSGEnviada"
    const localizacao = useLocation()

    console.log(localizacao)
    
    return(
        <>
<h1>Mensagem enviada com sucesso</h1>
<p ><label className="negrito">Nome: </label>{localizacao.state.nome}</p>
<p> <label className="negrito">Email: </label>{localizacao.state.email}</p>
<p> <label className="negrito">Mensagem: </label>{localizacao.state.mensagem}</p>
</>
)

}

export default Aula_7MSGEnviada 

