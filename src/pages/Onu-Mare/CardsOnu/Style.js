import styled from "styled-components";


export const Container = styled.section`
width:100%;
height:100%;

`
export const BoxOnu = styled.section`
width:100%;
height:100%;
display:flex;
flex-direction: column;

@media screen and (min-width: 360px) and (max-width:800px){
    margin-top:50px;
    height:100%;
}
`
export const BoxTitlep = styled.section`
width:100%;
height:100%;
padding:15px;
display:flex;
flex-direction: column;
justify-content:space-evenly;
h1{
   font-family: 'Poppins', sans-serif;
font-weight:600;
font-size:2rem;
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
export const BoxCard = styled.section`
width:100%;
height:100%;
display:flex;
padding: 100px;
justify-content:space-evenly;
align-items: center;
flex-wrap: wrap;
h3{

    font-family: 'Poppins', sans-serif;
    font-weight:600;
    text-align:center;
    font-size:1.2rem;
    color:${props => props.theme.fontColor};
}
img{
    width:100px;
    transition:.5s all;
    &:hover{
        transform:scale(1.2);
    }
}
@media screen and (min-width: 360px) and (max-width:800px){
    height:100%;
    align-items: center;

}
`
export const CardOne = styled.div`
width:200px;
height:200px;
background:red;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
margin-bottom: 5px;
`
export const CardTwo = styled.div`
width:200px;
height:200px;
background:#525a49;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
margin-bottom: 5px;

`
export const CardThree = styled.div`
width:200px;
height:200px;
background:#b4dc7f;
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
margin-bottom: 5px;

`
export const CardFor = styled.div`
width:200px;
height:200px;
background:#c44141;
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:center;
margin-bottom: 5px;

`
