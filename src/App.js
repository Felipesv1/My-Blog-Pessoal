import React,{useState} from 'react'
import {GlobalStyle} from './Global/GlobalStyle.ts'
import Rotas from './services/route'
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from './Global/theme'
import luzApagada from './DarkMode/img/luzapagada.png'
import luzAcessa from './DarkMode/img/luzacessa.png'
import * as S from './DarkMode/Style'

export default function App(){
  
  
  const [theme,setTheme] = useState("light")
  
  const themeToggler = () => {
      theme === "light" ? setTheme('dark') :setTheme('light') 
  }

  return(
    <>
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
    <Rotas/>
            <S.Btn onClick={()=> {themeToggler()}}>{theme === "light" ? <S.ImgLamp src={luzApagada} alt=""/>:<S.ImgLamp src={luzAcessa} alt=""/>}</S.Btn>
    <GlobalStyle/>
        </ThemeProvider>
    </>
  )
}