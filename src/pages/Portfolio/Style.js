import styled from "styled-components";

export const Container = styled.section`
width:100%;
height:100%;
`
export const BoxOne = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction: column;
background-color:${props => props.theme.Containers};

h1{
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:3rem;
    color:${props => props.theme.fontColor};
    text-align:center;
}
p{
    font-family: 'Poppins', sans-serif;
    font-weight:200;
    font-size:1.5rem;
    color:${props => props.theme.fontColor};
    text-align:center;
}
`
export const Projects = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items: center;
flex-wrap: wrap;
flex-direction:row;
border:4px solid #876307;

a{
    margin-inline: auto;
}
 a img{
    width:350px;
    height: 258px;
    padding:10px;
    border-radius:20px;
    object-fit:cover;
    transition: .5s all;
&:hover{
    transform: scale(1.1);
}    
}


@media screen and (min-width:360px) and (max-width:800px){

    img{
    width:100%;
    height:250px;
    padding:10px;
    border-radius:20px;
    object-fit:cover;
}
}
`