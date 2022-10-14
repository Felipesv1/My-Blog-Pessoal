import React from 'react'
import * as S from './Style' 
import Header from '../../../Header/Index'
import NaoViolencia from '../../img/NaoViolencia.png'
import X from './img/x.png'
import {Link} from 'react-router-dom'


export default function Violencia(){
    return(
        <S.Main>
            <Header/>
            <S.Container>
            <S.CardTwo>
                <S.BoxTitlep>
                <h1>Diminuição da violência</h1>
        <p>Diminuição da violência em todas as formas e em todos os lugares</p>
                </S.BoxTitlep>
        <S.ImgVio src={NaoViolencia} alt='imagem sobre erradicação da pobreza'/>
        <Link to="/Onu-Mare">
            <S.ImgX src={X} alt='X'/>
        </Link>
            </S.CardTwo>
            </S.Container>
            <S.BoxList>
                 <li>1.1 Até 2030, Dimnuir a violência Na maré.</li>
                <li>1.2 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
                <li>1.3 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
            </S.BoxList>
        </S.Main>
    )
}