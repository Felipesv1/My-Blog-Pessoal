import React from 'react'
import Header from '../Header/Index'
import * as S from './Style'
import FotoPerfil from './img/fotoPerfil.png'
import { motion } from "motion/react";

export default function About(){

    return(
        <S.Container>
         <Header/>
         <S.BoxAbout>
        <motion.div    animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 , delay: 0.2}} >
         <S.BoxImg>
            <S.Img src={FotoPerfil} alt='foto perfil'/>
         </S.BoxImg>
        </motion.div>
        <motion.div    animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 , delay: 0.8}} >
         <S.BoxPs>
            <p>My name is Felipe Pereira. </p>
            <p>i live in complexo da maré , Bonsucesso , RJ. </p>
            <p>I discovered this programming area at the beginning of March 2022, and every day I am learning to love it.</p>
         </S.BoxPs>
        </motion.div>
         </S.BoxAbout>
        </S.Container>
    )
}