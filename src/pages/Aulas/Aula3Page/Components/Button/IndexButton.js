function Button1({ textoDoButtom }) {
  // children é a palavra reservada, e serve pra chamar no App.js. O <h1>Aula 03</h1> o Aula 03 é o filho

  function clicouFunction() {
    alert("clicou bla")
  }
  
  return (
    <>
      <button style={{ color: "green" }} onFocus={clicouFunction}>{textoDoButtom}</button>
    </>
  );
}

export default Button1;