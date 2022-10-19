import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import * as S from './Style.js'
import Codigo from './img/Codigo.png'
import ImgMenu from './img/menu.svg'
import X from './img/x.png'
import Modal from 'react-modal'

export default function Header(){

     const [status,setStatus] = useState(false)
     const [theme,setTheme] = useState("light")

    

     function handleModal(){
         theme === "light" ? setTheme('dark') :setTheme('light') 
         setStatus(!status)
      }

const Menu = () => {
    return(
        <Modal
        onRequestClose={handleModal}
    isOpen={status}
    style={{overlay: {
      backgroundColor: 'white'
    }, content:{
        backgroundColor: "#292d25"  
    }}}
 >
                <S.BtnClose onClick={()=>{handleModal()}}><S.ImgBtn src={X} alt='fechar'/></S.BtnClose>
                <S.UlModal>
                    <S.ListModal><Link to="/">Home</Link></S.ListModal>
                    <S.ListModal><Link to="/About">About me</Link></S.ListModal>
                    <S.ListModal><Link to="/Portfolio">Portfólio</Link></S.ListModal>
                    <S.ListModal><Link to="/Onu-Mare">Onu-Maré</Link></S.ListModal>
                </S.UlModal>
        </Modal>
    )
}
    return(
        <S.Header>
            <S.Img src={Codigo} alt='tag fechada'/>
            <S.Nav>
            <S.Ul>
                    <S.List><Link to="/">Home</Link></S.List>
                    <S.List><Link to="/About">About me</Link></S.List>
                    <S.List><Link to="/Portfolio">Portfólio</Link></S.List>
                    <S.List><Link to="/Onu-Mare">Onu-Maré</Link></S.List>
                </S.Ul>
                { status && <Menu/>}
            </S.Nav>
                <S.BtnOpen onClick={()=>{handleModal()}}><S.ImgBtn src={ImgMenu} alt='menu'/></S.BtnOpen>
        </S.Header>
    )
}