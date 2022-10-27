import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: auto;
`;

export const Header = styled.div`
  margin: 10px;
  border: solid 2px yellow;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  margin: 5px;
  border: solid 2px yellow;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivLista = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const DivCard = styled.div`
  margin: 40px;
  border: solid 1px yellow;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: yellow;
`;
