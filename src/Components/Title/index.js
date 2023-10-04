function TitleComponent({children}) {
    // children é a palavra reservada, e serve pra chamar no App.js. O <h1>Aula 03</h1> o Aula 03 é o filho
  return (
    <>
      <h1>{children}</h1>
    </>
  );
}

export default TitleComponent ;