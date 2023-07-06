import styled from "styled-components";
import { bgPage, green, yellow } from "../ui/colors";
import { Button, Typography } from "@material-ui/core";
import { ArrowRightAltSharp } from "@mui/icons-material";

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextFooter = styled.h2`
  display: flex;
  flex-flow: row wrap;
  font-size: 16px;
  width: 135px;
  color: ${yellow};
  font-weight: 500;
`;

export const StyledBtn3 = styled(Button)`
  && {
    background-color: ${green};
    color: ${yellow};
    font-size: small;
    margin: 20px;
    padding: 5px;
    width: 50px;
    :hover {
      background-color: ${yellow};
      color: ${green};
    }
  }
`;

export const RigthArrow = styled(ArrowRightAltSharp)`
  && {
    margin: 20px;
    color: ${yellow};
  }
`;
