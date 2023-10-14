import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { CategoriaGames, CategoriaTitle } from "./style";
import axios from "axios";

function MMORPG() {
  document.title = "index em MMORPG"
  const [jogos, setJogos] = useState();

  async function buscar_jogos() {
    const { data } = await axios.get("http://localhost:3000/mmorpg");
    setJogos(data);
    console.log(data);
  }
  useEffect(() => {
    buscar_jogos();
  }, []);

  return (
    <>
      <h2>Aula 8</h2>
      <CategoriaTitle>MMORPG</CategoriaTitle>
      <CategoriaGames>
        {jogos &&
          jogos.map((jogo) => (
            <Card key={jogo.id} title={jogo.titulo} image={jogo.foto} id={jogo.id} />
          ))}
      </CategoriaGames>
    </>
  );
}

export default MMORPG;
