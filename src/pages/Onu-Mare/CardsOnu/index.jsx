import React from 'react'
import Header from '../../Header/Index'
import Cards from './Cards'
import * as S from './Style' 
import Pobreza from '../img/pobreza.png'
import NaoViolencia from '../img/NaoViolencia.png'
import oportunidade from '../img/oportunidade.png'
import educacao from '../img/educacao.png'
import {Link} from 'react-router-dom'

export default function Onu(){

    return(
        <S.Container>
         <Header/>
         <S.BoxOnu>
        <S.BoxTitlep>
        <h1>Os Objetivos de Desenvolvimento Sustentável na Maré</h1>
        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
        </S.BoxTitlep>
        <S.BoxCard>
        <Cards>
        <Link to='/Erradicacao'>
            <S.CardOne>
        <h3>Erradicação da pobreza</h3>
        <img src={Pobreza} alt='imagem sobre erradicação da pobreza'/>
            </S.CardOne>
        </Link>
        </Cards>
        <Cards>
        <Link to='/Nao-Violencia'>
        <S.CardTwo>
        <h3>Diminuição da violência</h3>
        <img src={NaoViolencia} alt='imagem  Não a violência'/>
        </S.CardTwo>
        </Link>
        </Cards>
        <Cards>
        <Link to='/oportunidade'>
        <S.CardThree>
        <h3>Maior acesso a oportunidades </h3>
        <img src={oportunidade} alt='imagem sobre oportunidade'/>
        </S.CardThree>
         </Link>
        </Cards>
        <Cards>
        <Link to='/Educação'>
        <S.CardFor>
        <h3>Educação de qualidade</h3>
        <img src={educacao} alt='imagem sobre educação'/>
        </S.CardFor>
        </Link>
        </Cards>
        </S.BoxCard>
         </S.BoxOnu>
        </S.Container>
    )
}