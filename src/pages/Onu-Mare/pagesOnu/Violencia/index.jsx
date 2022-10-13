import React from 'react'
import * as S from './Style' 
import Header from '../../../Header/Index'
import NaoViolencia from '../../img/NaoViolencia.png'



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
        <img src={NaoViolencia} alt='imagem sobre erradicação da pobreza'/>
            </S.CardTwo>
            </S.Container>
            <S.BoxList>
                 <li>1.1 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
                <li>1.2 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
                <li>1.3 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
            </S.BoxList>
        </S.Main>
    )
}