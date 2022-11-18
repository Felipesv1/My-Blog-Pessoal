import React from 'react'
import Header from '../Header/Index'
import * as S from './Style'
import Recipes from './img/recipesImg.png'
import Lipeflix from './img/lipeflix.png'
import Portflow from './img/PortflowImg.png'
import Rockepay from './img/Rockepay.png'
import Todolist from './img/TodoList.png'
import lol from './img/lol.png'
import Dogs from './img/Dogs.png'
import CalendarioCopa from "./img/CalendarioCopa.png"
import Amigao from './img/Amigao.png'

export default function Portfolio(){

    return(
        <S.Container>
        <Header/>
        <S.BoxOne>
          <h1>Bem vindo ao meu Portfólio !!</h1>
          <p>clique na imagem e veja o Projeto</p>
        <S.Projects>
            <a href="https://recipes-page.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src={Recipes} alt='Imagem recipes' /></a>
            <a href="http://lipeflix-app.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={Lipeflix} alt='Imagem Lipeflix' /></a>
            <a href="https://felipesv1.github.io/Portflow-Desafio-final/" target="_blank" rel="noopener noreferrer"> <img src={Portflow} alt='Imagem Portflow' /></a>
            <a href="https://explorer-felipesv1.vercel.app" target="_blank" rel="noopener noreferrer"> <img src={Rockepay} alt='Imagem rockepay' /></a>
            <a href="https://felipesv1.github.io/ToDoApp/" target="_blank" rel="noopener noreferrer"> <img src={Todolist} alt='Imagem de um TodoList' /></a>
            <a href="https://codesandbox.io/s/github/Felipesv1/Api-Dogs" target="_blank" rel="noopener noreferrer"> <img src={Dogs} alt='Imagem da Pagina de do dogs'/></a>                 
            <a href="https://felipesv1.github.io/Nlw-10--copa/" target="_blank" rel="noopener noreferrer"> <img src={CalendarioCopa} alt='Imagem do Calendário da copa' /></a>
            <a href="https://felipesv1.github.io/Desafio-Amigao/#" target="_blank" rel="noopener noreferrer"> <img src={Amigao} alt='Imagem do site riot game' /></a>
            <a href="https://felipesv1.github.io/Pagina-inicial-lol/" target="_blank" rel="noopener noreferrer"> <img src={lol} alt='Imagem do site riot game' /></a>
        </S.Projects>
        </S.BoxOne>
       </S.Container>
    ) 
}