import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const ImgBtn = styled.img`
  width: 50px;
  @media screen and (min-width: 977px) and (max-width: 2000px) {
    display: none;
  }
`;
export const btn_mobile = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  gap: 0.5rem;
  display: none;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  #menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 0.9rem;
  }
  #menu a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    padding: 0.5rem;
    transition: 0.5s all;
  }

  @media screen and (min-width: 300px) and (max-width: 1000px) {
    width: 30%;

    #menu {
      display: block;
      position: absolute;
      width: 100%;
      top: 75px;
      right: 0;
      height: 0px;
      visibility: hidden;
      overflow-y: hidden;
      transition: 0.6s;
      background-color: ${(props) => props.theme.body};

      z-index: 1000;
    }

    #menu.active {
      height: calc(100vh - 70px);
      visibility: visible;
      overflow-y: auto;
    }
    .hamburguer {
      width: 20px;
      border-top: 2px solid;
    }
    .hamburguer::before,
    .hamburguer::after {
      content: "";
      width: 20px;
      border-top: 2px solid ${(props) => props.theme.fontcolor};
      display: block;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }

    .hamburguer.active {
      border-top: transparent;
    }
    .hamburguer.active::before {
      transform: rotate(135deg);
    }
    .hamburguer.active::after {
      transform: rotate(-135deg);
      top: -7px;
    }

    #menu a {
      display: block;
      text-decoration: none;
      font-family: "Poppins", sans-serif;
      color: #876307;
      padding: 0.5rem;
      transition: 0.5s all;
      border-bottom: 1px solid white;
    }
  }
`;

export const List = styled.li`
  margin-left: 2px;
  text-align: center;
  transition: 300ms all;
  &:hover {
    transform: scale(1.2);
  }
`;
