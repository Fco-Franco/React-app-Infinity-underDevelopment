import { Link, useNavigate } from "react-router-dom";
// import Card from "../../components/Card";
import Card from "./components/Card";
import { HomeGames, HomeSection, HomeTitle } from "./styleAula8Pg01";

function Aula_8Menu() {
    document.title = "Aula 08 Menu"
    const voltarConst = useNavigate();

    // Função para lidar com a navegação para outra página
    const ClickPgIndex = () => {
        voltarConst('/');
        // Caminho para a página desejada
    };

    return (
        <>
            <h2>Aula 08 - Página Inicial</h2>
            <HomeSection>
        <HomeTitle>Categorias</HomeTitle>
        <HomeGames>
          <Link to={"/Aulas/mmorpg"} style={{ textDecoration: "none" }}>
            <Card
              title={"MMORPG"}
              image={"https://images5.alphacoders.com/640/640377.jpg"}
              id={"mmorpg"}
            />
          </Link>

          <Link to={"/Aulas/fps"} style={{ textDecoration: "none" }}>
            <Card
              title={"FPS"}
              image={"https://cdn.wallpapersafari.com/9/23/7Fl16w.jpg"}
              id={"fps"}
            />
          </Link>

          <Link to={"/Aulas/moba"} style={{ textDecoration: "none" }}>
            <Card
              title={"MOBA"}
              image={
                "https://images.hdqwalls.com/wallpapers/2019-genesis-moba-n0.jpg"
              }
              id={"moba"}
            />
          </Link>
        </HomeGames>
      </HomeSection>
        </>
    )
}
export default Aula_8Menu