function TitleComponent({children}) {
    // children é a palavra reservada, e serve pra chamar no App.js. O <h1>Aula 03</h1> o Aula 03 é o filho
  return (
    <>
      <h3>{children}</h3>
    </>
  );
}

export default TitleComponent ;