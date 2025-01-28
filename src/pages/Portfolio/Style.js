import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;
export const BoxOne = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Projects = styled.section`
  width: 100%;
  height: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const card = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme._card_color};
  border: 1px solid white;
  margin:5px;
  border-radius: 5px 5px 0px 0px;
  h3 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.fontColor};
  }
  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background-color: #ffa500;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    filter: blur(0.8px);
    color: ${(props) => props.theme.fontColor};
    img {
      width: 40px;
    }
    &:hover{
        filter: blur(0px);

    }
  }
`;
export const image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;
