import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style.js";


export default function Header() {
  const [status, setStatus] = useState(true);
  const [theme, setTheme] = useState("dark");

  function toggleMenu() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setStatus(!status);
    const menu = document.querySelector("#menu");
    menu.classList.toggle("active");
    const hamburguer = document.querySelector(".hamburguer");
    hamburguer.classList.toggle("active");
  }

  return (
    <S.Header>
      <S.Nav id="nav">
        <S.btn_mobile
          onClick={toggleMenu}
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
        </ul>
      </S.Nav>
    </S.Header>
  );
}
