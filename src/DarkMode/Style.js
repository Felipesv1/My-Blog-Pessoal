import styled from "styled-components";

export const Btn = styled.button`
  background: transparent;
  border: 1px;
  position: fixed;
  right: 0;
  top: 150px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 30px;
  &:hover {
    transition: 300ms all;
    transform: scale(1.1);
  }
`;
export const section_toggle_mode = styled.section`
  width: 100px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #464646;
  border-radius: 20%;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
`;

export const BtnMoon = styled.div`
  border-left: 1px solid #464646;
  width: 50%;
  padding-left: 10px;

  background-color: ${(props) => props.theme.dark};
  cursor: pointer;
  border-radius: 0 20% 20% 0;
`;

export const BtnLight = styled.div`
  padding-left: 10px;
  width: 50%;
  background-color: ${(props) => props.theme.light};
  cursor: pointer;
  border-radius: 20% 0 0 20%;
`;
