import styled,{keyframes} from "styled-components";

const typingOne = keyframes`
from{
  width:0;

}
to{
    width:60%;
}

`
const typingTwo = keyframes`
from{
  width:0;

}
to{
    width:85%;
}

`
const ImgAnimation = keyframes`
from{
  width:0;

}
to{
    width:400px;
}

`


export  const Container = styled.section`
width: 100%;
height:550px;
`


export  const BoxOne = styled.section`
background-color: #292d25;
width: 100%;
height:500px;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;

@media  (max-width:1138px){
flex-direction:column;

h1{
  font-size:1rem;
  white-space: wrap;}
}
`
export const Img = styled.img`
width:400px;
height:400px;
border-radius:50%;
border:4px solid #876307;
padding:10px;
object-fit:cover;
animation:${ImgAnimation} 2s  normal ;
@media screen and (min-width:300px) and (max-width:800px){
  width:250px;
  height:250px;
  animation:none ;
}
`

export const BoxTitles = styled.section`
width:50%;
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
text-align:center;
`
export const Title = styled.h1`

font-family: 'Poppins', sans-serif;
font-weight:300;
font-size:3rem;
border-right:2px solid #ffffeb;
margin-bottom:15px;
animation:${typingOne} 2s 1s steps(40) normal both;
white-space: nowrap;
overflow:hidden;
color:white;
@media screen and (min-width:360px) and (max-width:800px){
 animation:none;
 border-right:none;

}
`
export const TitleTwo = styled.h1`
width: 100%;
font-family: 'Poppins', sans-serif;
font-weight:300;
font-size:3rem;
border-right:2px solid #ffffeb;
animation:${typingTwo} 2s 3s steps(40) normal both;
white-space: nowrap;
overflow:hidden;
color:white;
@media screen and (min-width:360px) and (max-width:800px){
 animation:none;
 border-right:none;
}
`
export const BoxTitleTwo = styled.section`
width:100%;

h2{
font-family: 'Poppins', sans-serif;
font-weight:400;
text-align:center;
font-size:2rem;

}
`
export const BoxInfos = styled.section`


width:100%;
height:100%;
display:flex;
align-items: center;
justify-content: space-evenly;
@media screen and (min-width:360px) and (max-width:780px){
flex-direction:column;
 
}
`

export const BoxIconsOne = styled.div`
width:50%;
height:100%;
display: flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
transition:.5s all ;
background-color: #292d25;
margin:5px;
@media screen and (min-width:360px) and (max-width:800px){
  width:100%;
}
h2{
  color:white;
}

`
export const ImgIconOne = styled.img`
width:100px;
height:100px;
border-radius:50%;
border:4px solid #876307;
padding:10px;
object-fit:cover;
transition:.5s all ;
@media screen and (min-width:360px) and (max-width:780px){
width:70px;
height:70px;
 
}
&:hover{

background-color: #876307;
transform:rotate(360deg);
}
`
export const BoxLinks = styled.div`
width:100%;
display: flex;
justify-content:space-evenly;
align-items:center;
`
export const BoxIconsTwo = styled.div`
width:50%;
height:100%;
background-color: #200820;
display: flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
margin:5px;
@media screen and (min-width:360px) and (max-width:800px){
  width:100%;
}
h2{
  color:white;
}

`
export const ImgIconTwo = styled.img`
width:100px;
height:100px;
border-radius:50%;
border:4px solid #639027;
padding:10px;
object-fit:cover;
transition:.5s all ;
@media screen and (min-width:360px) and (max-width:780px){
  width:70px;
height:70PX;
}
&:hover{
background-color: #639027;
transform:rotate(360deg);
}
`

