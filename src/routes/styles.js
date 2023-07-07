import styled from "styled-components";
import { bgPage, green, yellow } from "../ui/colors";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { ArrowRightAltSharp } from "@mui/icons-material";

export const Title = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: bold;
    color: ${yellow};
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${bgPage};
`;

export const Header = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    background-color: ${green};
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-radius: 0px;
  }
`;

export const HeaderDiv = styled(Grid)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

//Image

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 15px;
`;

export const Footer = styled.div`
  border-top: solid 2px ${yellow};
  background-color: ${green};
  padding: 10px;
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
    padding: 10px;
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
