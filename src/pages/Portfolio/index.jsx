import React from 'react'
import Header from '../Header/Index'
import * as S from './Style'
import Carousel from 'nuka-carousel'
import Recipes from './img/recipesImg.png'
import Lipeflix from './img/LipeflixImg.png'
import Portflow from './img/PortflowImg.png'
import HarryPage from './img/HarryPage.png'
import Dogs from './img/Dogs.png'

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
}} enableKeyboardControls={true} wrapAround={true} autoplay={true} slidesToShow={2.1}>
            <a href="https://recipes-page.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src={Recipes} alt='Imagem recipes' /></a>
            <a href="https://felipesv1.github.io/Lipeflix/" target="_blank" rel="noopener noreferrer"><img src={Lipeflix} alt='Imagem Lipeflix' /></a>
            <a href="https://felipesv1.github.io/Portflow-Desafio-final/" target="_blank" rel="noopener noreferrer"> <img src={Portflow} alt='Imagem Portflow' /></a>
            <a href="https://hogwartspage.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src={HarryPage} alt='Imagem recipes' /></a>
            <a href="https://czjgph.csb.app/dogpage" target="_blank" rel="noopener noreferrer"> <img src={Dogs} alt='Imagem recipes' /></a>
        </Carousel>
        </S.Projects>
        </S.BoxOne>
       </S.Container>
    )
}