import React from 'react'
import * as S from './Style' 
import Header from '../../../Header/Index'
import Pobreza from '../../img/pobreza.png'
import X from './img/x.png'
import {Link} from 'react-router-dom'

export default function Erradicacao(){
    return(
        <S.Main>
            <Header/>
            <S.Container>
            <S.CardOne>
                <S.BoxTitlep>
        <h1>Erradicação da pobreza</h1>
        <p>Erradicar a pobreza em todas as formas e em todos os lugares</p>
                </S.BoxTitlep>
        <S.ImgPobreza src={Pobreza} alt='imagem sobre erradicação da pobreza'/>
        <Link to="/Onu-Mare">
            <S.ImgX src={X} alt='X'/>
        </Link>
            </S.CardOne>
            </S.Container>
            <S.BoxList>
                <li>1.1 Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</li>
                <li>1.2 Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as definições nacionais</li>
                <li>1.3 Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, em todas as suas dimensões, de acordo com as definições nacionais</li>
            </S.BoxList>
        </S.Main>
    )
}