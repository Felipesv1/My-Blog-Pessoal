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
background-color:${props => props.theme.Containers};
border:4px solid #876307;

@media screen and (min-width:360px) and (max-width:800px){
flex-direction:column;
}
`
export const BoxImg = styled.div`
background-image:${props => props.theme.BoxAbout};
border:4px solid #876307;
width:50%;
height:85%;
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
color:${props => props.theme.fontColor};

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
background-color:${props => props.theme.BoxPs};
width:100%;
height:50%;
border:4px solid #876307;
margin:30px;
text-align:center;
border-radius:15px;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
p{
  color:${props => props.theme.fontColor};
  font-family: 'Poppins', sans-serif;
  font-weight:200;
  font-size:1.2rem;
  margin-top:10px;

}
`
