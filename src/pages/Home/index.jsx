import React from "react";
import Header from "../Header/Index";
import Foto from "./img/fotoPerfil.png";
import iconGithub from "./img/iconGithub.png";
import iconinstagram from "./img/iconinstagram.png";
import iconlinkedin from "./img/iconlinkedin.png";
import iconHtml5 from "./img/iconHtml5.png";
import iconCss from "./img/iconCss3.png";
import iconJs from "./img/iconJS.png";
import iconReact from "./img/IconReact.png";
import iconTypescript from "./img/icons8-typescript-48.png";
import * as S from "./Style";

export default function Home() {
  return (
    <S.ContainerHome>
      <Header />
      <S.BoxGreeting>
        <S.ImgProfile src={Foto} alt="foto" />
        <S.BoxWelcomeTitles>
          <S.Title>Hi, Felipe here !!</S.Title>
          <S.TitleTwo>Welcome to my blog !!</S.TitleTwo>
        </S.BoxWelcomeTitles>
      </S.BoxGreeting>
      <S.BoxTitleTwo>
        <h2>Developer front-end</h2>
      </S.BoxTitleTwo>
      <S.BoxInfos>
        <S.BoxIconsOne>
          <S.BoxTitleTwo>
            <h2>Networks</h2>
          </S.BoxTitleTwo>
          <S.BoxLinks>
            <a href="https://github.com/Felipesv1" target="_black">
              <S.ImgIconOne src={iconGithub} alt="iconGithub" />
            </a>
            <a href="https://instagram.com/flipebg7" target="_black">
              <S.ImgIconOne src={iconinstagram} alt="iconinstagram" />
            </a>
            <a href="https://www.linkedin.com/in/felipereira0/" target="_black">
              <S.ImgIconOne src={iconlinkedin} alt="iconlinkedin" />
            </a>
          </S.BoxLinks>
        </S.BoxIconsOne>
        <S.BoxIconsTwo>
          <S.BoxTitleTwo>
            <h2>Languages</h2>
          </S.BoxTitleTwo>
          <S.BoxLinks>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              target="_black"
            >
              <S.ImgIconTwo src={iconHtml5} alt="iconHtml5" />
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/css"
              target="_black"
            >
              <S.ImgIconTwo src={iconCss} alt="iconCss" />
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_black"
            >
              <S.ImgIconTwo src={iconJs} alt="iconJs" />
            </a>
            <a href="https://www.typescriptlang.org" target="_black">
              {" "}
              <S.ImgIconTwo src={iconTypescript} alt="icone do typescript" />
            </a>
            <a
              href="https://pt-br.reactjs.org/docs/getting-started.html"
              target="_black"
            >
              {" "}
              <S.ImgIconTwo src={iconReact} alt="iconReact" />
            </a>
          </S.BoxLinks>
        </S.BoxIconsTwo>
      </S.BoxInfos>
    </S.ContainerHome>
  );
}
