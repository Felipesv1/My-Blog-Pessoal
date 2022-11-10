import styled,{keyframes} from "styled-components";

const Spin = keyframes`
0%{
    transform:rotate(0deg);
}
100%{
    transform:rotate(360deg);
}

`
export  const Header = styled.section`
width: 100%;
height:80px;
display:flex;
justify-content:space-between;
align-items:center;
padding:30px;
`
export const ImgBtn = styled.img`
width:50px;
@media screen and (min-width:977px) and (max-width:1900px){
display:none;
}
`
export const BtnOpen = styled.button`

width:50px;
background:transparent;
border:none;
cursor:pointer;
@media screen and (min-width:977px) and (max-width:1294px){
display:none;
}
`
export const BtnClose = styled.button`

width:50px;
background:transparent;
border:none;
cursor:pointer;
`
export  const Img = styled.img`
width:75px;
animation-name:${Spin};
animation-duration: 5s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`
export  const Nav = styled.nav`
width:50%;
@media screen and (min-width:320px) and (max-width:977px){
    display: none;
}
`
export  const Ul = styled.ul`
width:100%;
height:70px;
display:flex;
justify-content:space-evenly;
align-items:center;
list-style:none;
@media screen and (min-width:320px) and (max-width:977px){
    display: none;
}
`
export  const List = styled.li`
margin-left:2px;
text-align:center;
transition:1s all;
&:hover{
    background:#876307;
}
`
export  const UlModal = styled.ul`
width:100%;
height:90%;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
list-style:none;
@media screen and (min-width:320px) and (max-width:977px){
    display: flex;
}
`
export  const ListModal = styled.li`
border:1px solid #876307;
width:90%;
margin-left:2px;
text-align:center;
transition:.5s all;
background-color:${props => props.theme.BoxOne};
border-radius: 5px;
&:hover{
    background:#876307;
}
`

