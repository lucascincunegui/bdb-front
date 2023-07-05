import styled from "styled-components";
import { bgPage, green, yellow } from "../ui/colors";
import { Typography } from "@material-ui/core";

export const Title = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: bold;
    color: ${yellow};
  }
`;

export const Wrapper = styled.div`
  min-height: 800px;
  background-color: ${bgPage};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${green};
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Footer = styled.div`
  border-top: solid 2px ${yellow};
  background-color: ${green};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
