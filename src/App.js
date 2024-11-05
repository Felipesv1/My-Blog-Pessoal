import React, { useState } from "react";
import { GlobalStyle } from "./Global/GlobalStyle.ts";
import Rotas from "./services/route";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Global/theme";
import Sun from "./DarkMode/img/Sun.png";
import MoonBlack from "./DarkMode/img/MoonBlack.png";
import MoonWhite from "./DarkMode/img/MoonWhite.png";
import * as S from "./DarkMode/Style";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const switchToLight = () => setTheme("light");
  const switchToDark = () => setTheme("dark");
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Rotas />
        <S.section_toggle_mode>
          <S.BtnLight onClick={switchToLight}>
            <S.Img src={Sun} alt="icone do Sol" />
          </S.BtnLight>
          <S.BtnMoon onClick={switchToDark}>
            {theme === "dark" ? (
              <S.Img src={MoonBlack} alt="icone da lua preta" />
            ) : (
              <S.Img src={MoonWhite} alt="icone da lua branca" />
            )}
          </S.BtnMoon>
        </S.section_toggle_mode>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
