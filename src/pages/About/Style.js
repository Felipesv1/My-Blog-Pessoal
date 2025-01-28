import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 800px;
`;
export const boxAnimations = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    background-color: ${(props) => props.theme._primary_color};
    border-radius: 10px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    img {
      pointer-events: none;
    }
  }
`;
export const BoxAbout = styled.section`
  max-width: 1400px;
  margin: 10px auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const BoxImg = styled.div`
  background: ${(props) => props.theme._primary_color};
  border-radius: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 2rem;
    color: ${(props) => props.theme.fontColor};
  }
`;
export const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  padding: 10px;
`;

export const BoxPs = styled.div`
  background-color: ${(props) => props.theme._primary_color};
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: ${(props) => props.theme.fontColor};
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;
