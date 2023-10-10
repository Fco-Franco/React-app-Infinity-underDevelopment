import '../../Aula3.css';

function TitleComponent1({textoDeH1, funcaoClicou}) {
    // children é a palavra reservada, e serve pra chamar no App.js. O <h1>Aula 03</h1> o Aula 03 é o filho
  return (
    <>
      <h3 onClick={funcaoClicou}>{textoDeH1} </h3>
    </>
  );
}

export default TitleComponent1 ;

// function Button2({textoDoButtom, funcao_clicou}) {

//   return (
//   <>
//     <button style={{color:"red"}} onClick={funcao_clicou}>{textoDoButtom}</button>
//   </>
// );
// }

// export default Button2 ;