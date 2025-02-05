import styled from "styled-components";

export const ContainerHome = styled.section`
  max-width:1400px;
  height: 550px;
  margin: 10px auto;
`;
export const BoxGreeting = styled.section`
  background-color: ${(props) => props.theme._primary_color};
  height: 500px;
  border-radius:40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1138px) {
    flex-direction: column;
    h1 {
      font-size: 1rem;
      white-space: wrap;
    }
  }
`;
export const ImgProfile = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  padding: 10px;
  object-fit: cover;
  @media screen and (min-width: 300px) and (max-width: 950px) {
    width: 250px;
    height: 250px;
  }
`;
export const BoxWelcomeTitles = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
export const Title = styled.h1`
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.fontColor};
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 15px;
  
  margin: 0;
  span{
  font-size:4rem;
    font-weight: 800;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    border-right: none;
    span{
      font-size:2rem;
        font-weight: 800;
      }
  }
`;

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  h2{
    width: 40rem;
    border-radius:40px;
    background-color: ${(props) => props.theme._primary_color};
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.fontColor};
    font-weight: 800;
    text-align: center;
    font-size: 2rem;
  }
  @media screen and (min-width: 320px) and (max-width: 780px) {
    margin-top:40px;  
  }
  
`;
export const BoxInfos = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 780px) {
    flex-direction: column;
  }
`;
// box network --------------------------
export const BoxIcons = styled.div`
  width: 90%;
  display: flex;
  margin: 15px;
  justify-content: space-evenly;
  align-items: center;
  border-radius:40px;
  flex-direction: column;
  background-color: ${(props) => props.theme._primary_color};
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 100%;
  }
  h2 {
    color: ${(props) => props.theme.fontColor};
    margin: 0;
  }
`;
export const BoxTitleInfos = styled.div`

h2{

  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.fontColor};
  font-weight: 400;
  text-align: center;
  font-size: 2rem;
}
  
`;
export const imgIcons = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 10px;
  object-fit: cover;
  transition: 0.5s all;
  @media screen and (min-width: 320px) and (max-width: 780px) {
    width: 70px;
    height: 70px;
  }
  &:hover {
    background-color: #8d1eae;
  }
`;
export const BoxLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

