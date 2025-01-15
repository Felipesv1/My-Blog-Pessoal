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
import iconC from "./img/iconC.png";
import { motion } from "motion/react";
import * as S from "./Style";

export default function Home() {
  return (
    <S.ContainerHome>
      <Header />

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <S.BoxGreeting>
          <S.ImgProfile src={Foto} alt="foto" />
          <S.BoxWelcomeTitles>
            <S.Title>
              Hello &#x1F44B;, <span>I'm a full-Stack developer</span>{" "}
            </S.Title>
          </S.BoxWelcomeTitles>
        </S.BoxGreeting>
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <S.BoxTitle>
          <h2>I build things for web</h2>
        </S.BoxTitle>
      </motion.div>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <S.BoxInfos>
          <S.BoxIcons>
            <S.BoxTitleInfos>
              <h2>Networks</h2>
            </S.BoxTitleInfos>
            <S.BoxLinks>
              <a href="https://github.com/Felipesv1" target="_black">
                <S.imgIcons src={iconGithub} alt="iconGithub" />
              </a>
              <a href="https://instagram.com/flipebg7" target="_black">
                <S.imgIcons src={iconinstagram} alt="iconinstagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipereira0/"
                target="_black"
              >
                <S.imgIcons src={iconlinkedin} alt="iconlinkedin" />
              </a>
            </S.BoxLinks>
          </S.BoxIcons>

          <S.BoxIcons>
            <S.BoxTitleInfos>
              <h2>My Skills</h2>
            </S.BoxTitleInfos>
            <S.BoxLinks>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                target="_black"
              >
                <S.imgIcons src={iconHtml5} alt="iconHtml5" />
              </a>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/css"
                target="_black"
              >
                <S.imgIcons src={iconCss} alt="iconCss" />
              </a>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                target="_black"
              >
                <S.imgIcons src={iconJs} alt="iconJs" />
              </a>
              <a href="https://www.typescriptlang.org" target="_black">
                {" "}
                <S.imgIcons src={iconTypescript} alt="icone do typescript" />
              </a>
              <a href="https://react.dev" target="_black">
                {" "}
                <S.imgIcons src={iconReact} alt="iconReact" />
              </a>
              <a
                href="https://pt.wikipedia.org/wiki/C_(linguagem_de_programa%C3%A7%C3%A3o)"
                target="_black"
              >
                {" "}
                <S.imgIcons src={iconC} alt="icon C" />
              </a>
            </S.BoxLinks>
          </S.BoxIcons>
        </S.BoxInfos>
      </motion.div>
    </S.ContainerHome>
  );
}
