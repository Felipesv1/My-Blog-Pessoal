import styled from "styled-components";

export const Main = styled.section`

width:100%;
height:100%;
background-color:#ffffff;
`
export const Container = styled.section`
width:100%;
height:500px;
display:flex;
justify-content:space-evenly;
flex-wrap: wrap;
background-color:#ffffff;
img{
    width:20%;
}
`
export const CardOne = styled.div`
width:100%;
height:500px;
background:red;
display:flex;
flex-direction: row;
justify-content:space-evenly;
align-items:center;
@media screen and (min-width: 360px) and (max-width:800px){
    flex-direction: column-reverse;
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
}
p{
    font-family: 'Poppins', sans-serif;
font-weight:400;
font-size:1.2rem;
text-align:center;
}
`

export const BoxList = styled.ul`
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


}
@media screen and (min-width: 360px) and (max-width:800px){
    height:600px;
}
`