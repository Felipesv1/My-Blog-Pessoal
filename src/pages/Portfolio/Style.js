import styled from "styled-components";

export const Container = styled.section`
width:100%;
height:800px;
`
export const BoxOne = styled.section`
width:100%;
height:100%;
display:flex;
align-items:center;
padding:10px;
background:#292d25;
@media screen and (min-width:360px) and (max-width:800px){
flex-direction:column;
}
`
export const Projects = styled.div`
background-image:linear-gradient(to top, #200820,  #292d25);
width:100%;
height:100%;
display:flex;
align-items:center;
img{
    width:100%;
    padding:10px;
    border-radius:20px;
}
`