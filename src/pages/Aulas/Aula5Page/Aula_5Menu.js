import { useEffect, useState, Routes, Route } from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonInitialAulas from "../../../Components/Button/ButtonInitialAulas";

function Aula_5Menu() {
  document.title = "Aula 05 Menu"

  // #region useState c arowFunction 
  const [linguagem, setLinguagem] = useState()

  // function setLinguagem(texto){
  //   linguagem = texto
  // }

  // setLinguagem("shhdfuhsdgfisfdj")
  //  #endregion

  // #region useState 2 funcoes 
  const [linguagem1, setLinguagem1] = useState()

  function transformJS() {
    setLinguagem1("Buttom JS 2 Funcoes")
  }

  function transformReact() {
    setLinguagem1("Buttom React 2 Funcoes")
  }

  //  #endregion

  // #region useState 1 funcoes 
  const [transformReact2, setTransformReact2] = useState()

  function transformReact2funcao(eventoFuncao) {
    setTransformReact2(eventoFuncao.target.textContent)
    // setTransformReact2(`Vc clicou ${eventoFuncao.target.textContent}`)
  }

  // useEffect(()=>{},[]){  } useEffect recebe uma funcao(atividade) e uma array(O que vai fazer)
  useEffect(() => {
    {
      if (transformReact2 != null) {
        alert(transformReact2)
        document.title = transformReact2
      }
    }
  }, [transformReact2])
  //  #endregion

  // #region useState Router 

  // #endregion 

  return (
    <>
      {/* <Routes>
        <Route index element={<AulasMenu />} />
      </Routes> */}
      {/* <Route index element={<AulasMenu />} /> */}

      <h2>Aula 05 - React - Rotas e Api</h2>
      <li> <Link to={"/Aulas"}>Página Inicial Aulas</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/>
      <ButtonInitialAulas></ButtonInitialAulas>
      <br/>
      <br/>

      {/* #region region useState 1 funcoes  */}
      <>
        <hr /><h3>#region useState 1 funcao </h3>
        <button onClick={transformReact2funcao}>Java Script</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={transformReact2funcao}>React</button>
        <p>{transformReact2}</p>
      </>

      {/* #region region useState arowFunction  */}
      <>
        <hr /><h3>#region useState arowFunction </h3>
        <button onClick={() => setLinguagem("Java Script arowFunction")}>Java Script arowFunction</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={(e) => setLinguagem(e.target.textContent)}>Java Script arowFunction 1</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setLinguagem("React arowFunction")}>React arowFunction</button>
        <p>{linguagem}</p>
      </>

      {/* #region region useState 2 funcoes  */}
      <>
        <hr /><h3>#region useState 2 funcoes </h3>
        <button onClick={transformJS}>Java Script 2 Funcoes</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={transformReact}>React 2 Funcoes</button>
        <p>{linguagem1}</p>
      </>
      <Outlet />
    </>
  )
}

export default Aula_5Menu
