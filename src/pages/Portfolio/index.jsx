import React from "react";
import Header from "../Header/Index";
import Card from "./components/Card/Card";
import * as S from "./Style";
import PortFlow from "./img/portflow.png";
import Gudi from "./img/gudi.png";
import Habits from "./img/habits.png";
import onePiece from "./img/one_piece.png";
import Lipeflix from "./img/lipeflix.png";
import wildbeast from "./img/wildbeast.png";
import Vitech from "./img/vitech.png";
import x_men from "./img/x_men.png"
import Rockepay from "./img/Rockepay.png";
import Todolist from "./img/TodoList.png";
import lolPage from "./img/lol.png";
import Calculator from "./img/Calculator.png";
import AmigaoPage from "./img/pageAmigao.png";
import VirtualReality from "./img/realite-virtual.png";
import ShoppingCart from "./img/carrinho.png";
import Widget from "./img/widget.png";
import PaginaContatos from "./img/PaginadeContatos.png";
import RGBDevs from "./img/rgbDevs.png";
import CardCharacter from "./img/cardCharacter.gif";
import Notes from "./img/notes.png";
import Fintech from "./img/fintech.png";
import port_logistics from "./img/porto_logistica.png";
export default function Portfolio() {
  return (
    <S.Container>
      <Header />
      <S.BoxOne>
        <S.Projects>
        <Card
            image={Vitech}
            title="Vitech"
            link="https://github.com/Felipesv1/vitech"
          />
               <Card
            image={wildbeast}
            title="Wildbeast"
            link="https://github.com/Felipesv1/wildbeast"
          />
               <Card
            image={Notes}
            title="Notes"
            link="https://github.com/Felipesv1/notes"
          />
                  <Card
            image={Fintech}
            title="Fintech"
            link="https://github.com/Felipesv1/Fintech"
          />
                  <Card
            image={Lipeflix}
            title="Lipeflix"
            link="https://github.com/Felipesv1/LipeflixApp"
          />
                  <Card
            image={port_logistics}
            title="Port logistics"
            link="https://github.com/Felipesv1/portoLogistica"
          />
          <Card
            image={PortFlow}
            title="Portflow"
            link="https://github.com/Felipesv1/Portflow-Desafio-final"
          />
          <Card
            image={lolPage}
            title="Initial Page - LoL"
            link="https://github.com/Felipesv1/Pagina-inicial-lol"
          />
          <Card
            image={AmigaoPage}
            title="Dog Page"
            link="https://github.com/Felipesv1/Desafio-Amigao"
          />
          <Card
            image={Gudi}
            title="Gudi"
            link="https://github.com/Felipesv1/Desafio-Gudi"
          />
          <Card
            image={Habits}
            title="Habits"
            link="https://github.com/Felipesv1/Habits"
          />
          <Card
            image={Rockepay}
            title="Rockepay"
            link="https://github.com/Felipesv1/Rockepay"
          />
          <Card
            image={Calculator}
            title="Calculator"
            link="https://github.com/Felipesv1/Calculator"
          />
          <Card
            image={PaginaContatos}
            title="Contact Page"
            link="https://github.com/Felipesv1/Pagina-de-contatos"
          />
          <Card
            image={CardCharacter}
            title="Card Character"
            link="https://github.com/Felipesv1/card-personagen"
          />
          <Card
            image={ShoppingCart}
            title="Shopping Cart"
            link="https://github.com/Felipesv1/Shopping-cart"
          />
          <Card
            image={RGBDevs}
            title="RGB para devs"
            link="https://github.com/Felipesv1/rgb-para-devs"
          />
          <Card
            image={Todolist}
            title="To-do"
            link="https://github.com/Felipesv1/ToDoApp"
          />
          <Card
            image={Widget}
            title="Widget"
            link="https://github.com/Felipesv1/widget-de-transporte"
          />
          <Card
            image={VirtualReality}
            title="Virtual Reality"
            link="https://github.com/Felipesv1/virtual-reality-player"
          />
             <Card
            image={x_men}
            title="X men"
            link="https://github.com/Felipesv1/X-men"
          />
             <Card
            image={onePiece}
            title="One Pierce"
            link="https://github.com/Felipesv1/One-piece"
          />
           
      
          {/* <S.card>
            {" "}
            <S.image src={Recipes} alt="Imagem recipes" />
            <h3>Recipes</h3>
            <a
              href="https://recipes-page.netlify.app/"
            </motion.div>
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={iconGithub} alt="icone do github" /> View Code
            </a>
          </S.card> */}
          {/* <a href="http://lipeflix-app.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={Lipeflix} alt='Imagem Lipeflix' /></a>
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
            <a href="https://rgb-para-devs.verc el.app/" target="_blank" rel="noopener noreferrer"> <img src={RGBDevs} alt='Imagem do site de um RGB para devs' /></a>
            <a href="https://gallery-felipesv1.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={Gallery} alt='Imagem do site galeria de foto' /></a>
            <a href="https://card-personagen.vercel.app/" target="_blank" rel="noopener noreferrer"> <img src={CardCharacter} alt='Imagem do site card de personagem' /></a>
            <a href="https://github.com/Felipesv1/princing-table" target="_blank" rel="noopener noreferrer"> <img src={Price} alt='Imagem do site tabela de preço' /></a> */}
        </S.Projects>
      </S.BoxOne>
    </S.Container>
  );
}
