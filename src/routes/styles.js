import styled from "styled-components";
import { green, yellow } from "../ui/colors";
import { Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  && {
    font-size: 60px;
    font-weight: bold;
    color: ${yellow};
  }
`;

export const Wrapper = styled.div`
  min-height: 800px;
  background-color: rgba(254, 210, 39, 0.1);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${green};
  align-items: center;
  justify-content: space-around;
`;

export const Imagem = styled.img`
  border-color: rgb(254, 210, 39);
  border-width: 0.5px;
  border-style: solid;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Footer = styled.div`
  border-top: solid 2px ${yellow};
  background-color: ${green};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
