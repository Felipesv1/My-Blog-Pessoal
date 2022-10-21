import React from 'react'
import Header from '../Header/Index'
import * as S from './Style'
import Carousel from 'nuka-carousel'
import Recipes from './img/recipesImg.png'
import Lipeflix from './img/LipeflixImg.png'
import Portflow from './img/PortflowImg.png'
import Rockepay from './img/Rockepay.png'
import Todolist from './img/TodoList.png'
import lol from './img/lol.png'


export default function Portfolio(){

    return(
        <S.Container>
        <Header/>
        <S.BoxOne>
        <S.Projects>
          <h1>Bem vindo ao meu Portfólio !!</h1>
          <p>clique na imagem e veja o Projeto</p>
        <Carousel defaultControlsConfig={{
    nextButtonText: '>',
    prevButtonText: '<',
      pagingDotsStyle: {
    fill: 'none'    
  }
}} enableKeyboardControls={true} wrapAround={true}  slidesToShow={2.1}>
            <a href="https://recipes-page.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src={Recipes} alt='Imagem recipes' /></a>
            <a href="https://felipesv1.github.io/Lipeflix/" target="_blank" rel="noopener noreferrer"><img src={Lipeflix} alt='Imagem Lipeflix' /></a>
            <a href="https://felipesv1.github.io/Portflow-Desafio-final/" target="_blank" rel="noopener noreferrer"> <img src={Portflow} alt='Imagem Portflow' /></a>
            <a href="https://explorer-felipesv1.vercel.app" target="_blank" rel="noopener noreferrer"> <img src={Rockepay} alt='Imagem rockepay' /></a>
            <a href="https://felipesv1.github.io/ToDoApp/" target="_blank" rel="noopener noreferrer"> <img src={Todolist} alt='Imagem de um TodoList' /></a>
            <a href="https://felipesv1.github.io/Pagina-inicial-lol/" target="_blank" rel="noopener noreferrer"> <img src={lol} alt='Imagem do site riot game' /></a>
        </Carousel>
        </S.Projects>
        </S.BoxOne>
       </S.Container>
    ) 
}