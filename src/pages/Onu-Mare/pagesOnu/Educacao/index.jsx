import React from 'react'
import * as S from './Style' 
import Header from '../../../Header/Index'
import Educacao from '../../img/educacao.png'
import X from './img/x.png'
import {Link} from 'react-router-dom'

export default function Erradicacao(){
    return(
        <S.Main>
            <Header/>
            <S.Container>
            <S.CardFor>
                <S.BoxTitlep>
                <h1>Educação de qualidade</h1>
        <p>Educação de qualidade em todas as formas e em todos os lugares</p>
                </S.BoxTitlep>
        <S.ImgEduca src={Educacao} alt='imagem de uma mão segurando um lapis'/>
        <Link to="/Onu-Mare">
            <S.ImgX src={X} alt='X'/>
        </Link>
            </S.CardFor>
            </S.Container>
            <S.BoxList>
                 <li>1.1 Até 2030, Ter mais suporte para uma educação de qualidade na maré.</li>
                <li>1.2 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
                <li>1.3 Até 2030, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt consectetur necessitatibus quia blanditiis, nihil veritatis harum quisquam.</li>
            </S.BoxList>
        </S.Main>
    )
}