import styled from "styled-components";

export const Main = styled.section`
width:100%;
height:100%;
`
export const Container = styled.section`
width:100%;
height:500px;
display:flex;
justify-content:space-evenly;
flex-wrap: wrap;
`
export const CardTwo = styled.div`
width:100%;
height:500px;
background:#525a49;
display:flex;
flex-direction: row;
justify-content:space-evenly;
align-items:center;
border:4px solid #876307;
@media screen and (min-width: 360px) and (max-width:800px){
    flex-direction: column-reverse;
}
`
export const ImgX = styled.img`
display:none;
width:50px;
@media screen and (min-width: 360px) and (max-width:800px){
    display:flex;
}
`
export const BoxTitlep = styled.section`
width:50%;
height:500px;
padding:5px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
@media screen and (min-width: 360px) and (max-width:800px){
    height:250px;
    width:100%;
}
h1{
    color:white;
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:3rem;
    text-align:center;
    color:${props => props.theme.fontColor};
}
p{
font-family: 'Poppins', sans-serif;
font-weight:400;
font-size:1.2rem;
text-align:center;
color:${props => props.theme.fontColor};
}
`

export const ImgVio = styled.img`
width:20%;
`
export const BoxList = styled.ul`
border:4px solid #876307;
width:100%;
height:500px;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
padding:10px;
li{
 font-family: 'Poppins', sans-serif;
font-weight:400;
font-size:1.2rem;
color:${props => props.theme.fontColor};
}
@media screen and (min-width: 360px) and (max-width:800px){
    height:600px;
}
`