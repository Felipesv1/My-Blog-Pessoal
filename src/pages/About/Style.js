import styled,{keyframes} from "styled-components";

const MaoOneani = keyframes`

from{
  margin-left:0;

}
to{
    margin-left:15px;

}

`


export const Container = styled.section`

width:100%;
height:800px;
`

export const BoxAbout = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
padding:10px;
background: #200820;
@media screen and (min-width:360px) and (max-width:800px){
flex-direction:column;
}
`

export const BoxImg = styled.div`
background-image:linear-gradient(to right, #200820,  #876307);
width:50%;
height:85%;
border: 1px solid #200820;
border-radius:15px;
text-align:center;
margin:30px;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

h3{
font-family: 'Poppins', sans-serif;
font-weight:200;
font-size:2rem;
color:white;
}
`

export const Img = styled.img`

 width:100%;
 border-radius:50%;
  padding:10px;

`
export const BoxMao = styled.div`

border: 1px solid green;

`
export const MaoOne = styled.img`

 width:50px;
 @media screen and (min-width:360px) and (max-width:800px){
  display:none;


}
 animation:${MaoOneani} .5s  infinite normal;
`
export const MaoTwo = styled.img`
 width:50px;
 display:none;
 @media screen and (min-width:360px) and (max-width:800px){
  display:flex;
flex-direction:column;

}
`
export const BoxPs = styled.div`
background:#292d25;
width:100%;
height:50%;
border: 1px solid #200820;
margin:30px;
text-align:center;
border-radius:15px;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;

p{
    font-family: 'Poppins', sans-serif;
font-weight:200;
font-size:100%;
color:white;
margin-top:10px;

}
`
