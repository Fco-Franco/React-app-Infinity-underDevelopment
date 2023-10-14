import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriaGames, CategoriaTitle } from "../MMORPG/style";
import Card from "../../components/Card";

function FPS() {
  document.title = "index em FPS"
  const [jogos, setJogos] = useState();

  async function buscar_jogos() {
    const { data } = await axios.get("http://localhost:3000/fps");
    setJogos(data);
    console.log(data);
  }
  useEffect(() => {
    buscar_jogos();
  }, []);

  return (
    <>
    <h2>Aula 8</h2>
      <CategoriaTitle>FPS</CategoriaTitle>
      <CategoriaGames>
        {jogos &&
          jogos.map((jogo) => (
            <Card
              key={jogo.id}
              title={jogo.titulo}
              image={jogo.foto}
              id={jogo.id}
            />
          ))}
      </CategoriaGames>
    </>
  );
}
export default FPS;
