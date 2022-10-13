import React from 'react'
import Header from '../Header/Index'
import * as S from './Style'
import Foto from './img/fotoPerfil.jpeg'
import MaoOne from './img/mao.png'
import MaoTwo from './img/dedoprabaixo.png'

export default function About(){

    return(
        <S.Container>
         <Header/>
         <S.BoxAbout>
         <S.BoxImg>
            <S.Img src={Foto} alt='foto perfil'/>
            <h3>know a little about me </h3>
            <S.MaoOne src={MaoOne} alt='foto de uma mão com o dedo apontando para o lado'/>
            <S.MaoTwo src={MaoTwo} alt='foto de uma mão com o dedo apontando para baixo'/>
         </S.BoxImg>
         <S.BoxPs>
            <p>My name is Felipe Pereira. </p>
            <p>i live in complexo da maré , Bonsucesso , RJ. </p>
            <p>I discovered this programming area at the beginning of March 2022, and every day I am learning to love it. It's an area that doesn't just have to do with code, but also teaches you how to deal with many issues in life.</p>
         </S.BoxPs>
         </S.BoxAbout>
        </S.Container>
    )
}