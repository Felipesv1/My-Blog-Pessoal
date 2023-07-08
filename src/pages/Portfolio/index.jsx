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
import Calculator from "./img/Calculator.png"
import Amigao from './img/Amigao.png'
import Vr from './img/realite-virtual.png'
import Carrinho from './img/carrinho.png'
import Widget from './img/widget.png'
import PaginaContatos from './img/PaginadeContatos.png'
import RGBDevs from './img/rgbDevs.png'
import Gallery from './img/gallery.png'
import CardCharacter from './img/cardCharacter.gif'
import Price from './img/price.png'
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
            <a href="https://calculator-lkwq-gwiqpriu7-felipesv1.vercel.app" target="_blank" rel="noopener noreferrer"> <img src={Calculator} alt='Imagem Calculadora' /></a>
            <a href="https://felipesv1.github.io/Desafio-Amigao/#" target="_blank" rel="noopener noreferrer"> <img src={Amigao} alt='Imagem do site amigão' /></a>
            <a href="https://felipesv1.github.io/Pagina-inicial-lol/" target="_blank" rel="noopener noreferrer"> <img src={lol} alt='Imagem do site riot game' /></a>
            <a href="https://virtual-reality-player.vercel.app" target="_blank" rel="noopener noreferrer"> <img src={Vr} alt='Imagem do site simulando realidade virtual' /></a>
            <a href="https://shopping-cart-murex-pi.vercel.app" target="_blank" rel="noopener noreferrer"> <img src={Carrinho} alt='Imagem de um carrinho de compras' /></a>
            <a href="https://widget-de-transporte.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={Widget} alt='Imagem do site widget de transporte' /></a>
            <a href="https://pagina-de-contatos.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={PaginaContatos} alt='Imagem de uma pagina de contatos' /></a>
            <a href="https://rgb-para-devs.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={RGBDevs} alt='Imagem do site de um RGB para devs' /></a>
            <a href="https://gallery-felipesv1.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={Gallery} alt='Imagem do site galeria de foto' /></a>
            <a href="https://card-personagen.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={CardCharacter} alt='Imagem do site card de personagem' /></a>
            <a href="https://github.com/Felipesv1/princing-table" target="_blank" rel="noopener noreferrer"> <img src={Price} alt='Imagem do site tabela de preço' /></a>
        </S.Projects>
        </S.BoxOne>
       </S.Container>
    ) 
}