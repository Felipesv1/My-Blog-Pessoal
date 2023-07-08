import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style.js";
import Codigo from "./img/Codigo.png";

export default function Header() {
  const [status, setStatus] = useState(false);
  const [theme, setTheme] = useState("light");

  function toggleMenu() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setStatus(!status);
    const menu = document.querySelector("#menu");
    menu.classList.toggle("active");
    const hamburguer = document.querySelector(".hamburguer");
    hamburguer.classList.toggle("active");
  }
  


  return (
    <S.Header>
      <S.Img src={Codigo} alt="tag fechada" />
      <S.Nav id="nav" >
      <S.btn_mobile onClick={toggleMenu}
        id="btn_mobile"
        aria-expanded="false"
        aria-label="Abrir menu"
        aria-controls="menu"
        aria-haspopup="true"
      >
        menu
        <span className="hamburguer"></span>
      </S.btn_mobile>
        <ul id="menu" role="menu">
          <S.List>
            <Link to="/">Home</Link>
          </S.List>
          <S.List>
            <Link to="/About">About me</Link>
          </S.List>
          <S.List>
            <Link to="/Portfolio">Portfólio</Link>
          </S.List>
          <S.List>
            <Link to="/Onu-Mare">Onu-Maré</Link>
          </S.List>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
