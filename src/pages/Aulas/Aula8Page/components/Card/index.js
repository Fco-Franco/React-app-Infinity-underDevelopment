import { useLocation, useNavigate } from "react-router-dom";
import { CardDiv, CardImage, CardTitle } from "./style";

function Card({ title, image, id }) {
  const navigate = useNavigate();

  return (
    <>
    
      <CardDiv
        onClick={() => {
          navigate(`/aulas/jogo/${id}`);
        }}
      >
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} />
      </CardDiv>
    </>
  );
}

export default Card;
