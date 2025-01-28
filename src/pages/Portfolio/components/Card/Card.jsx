import * as S from "../../Style";
import iconGithub from "../../img/icon-github.png";

export default function Card({ image, link, title }) {
  return (
    <S.card>
      {" "}
      <S.image src={image} alt="Imagem recipes" title={title}/>
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {" "}
        <img src={iconGithub} alt="icone do github" /> View Code
      </a>
    </S.card>
  );
}
