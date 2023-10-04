function Button1({textoDoButtom}) {
  // children é a palavra reservada, e serve pra chamar no App.js. O <h1>Aula 03</h1> o Aula 03 é o filho

function clicou(){
  alert("clicou")
}
  return (
  <>
    <button style={{color:"red"}} onClick={clicou}>{textoDoButtom}</button>
  </>
);
}

export default Button1 ;