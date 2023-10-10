function Button2({textoDoButtom, funcao_clicou}) {

  return (
  <>
    <button style={{color:"red"}} onClick={funcao_clicou}>{textoDoButtom}</button>
  </>
);
}

export default Button2 ;