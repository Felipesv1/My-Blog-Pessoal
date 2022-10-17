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
background-color:${props => props.theme.Containers};

h1{
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:3rem;
    color:${props => props.theme.fontColor};

}
p{
    font-family: 'Poppins', sans-serif;
    font-weight:200;
    font-size:1.5rem;
    color:${props => props.theme.fontColor};
}
`
export const Projects = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
border:4px solid #876307;
img{
    width:100%;
    padding:10px;
    border-radius:20px;
}
`