import {createGlobalStyle} from 'styled-components'


export interface Props {
    theme: {    
        body:string;
    }
}
export const GlobalStyle = createGlobalStyle`
body{
    background-color:${props => props.theme.body};
}
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration:none;
    a{
        color:${props => props.theme.fontColor};
        font-size:1.4rem;
        font-family: 'Poppins', sans-serif;
    }
    
}

`