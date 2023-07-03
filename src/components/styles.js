import {
  Button,
  ButtonGroup,
  Grid,
  Card,
  Typography,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { yellow, green } from "../ui/colors";

//NavLinks

export const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
`;

export const LinkBtn = styled(Button)`
  && {
    background-color: ${yellow};
    color: ${green};
    font-weight: 600;
    margin-right: 20px;
  }
`;

//List

export const ProgressCircular = styled(CircularProgress)`
  && {
    color: ${yellow};
    display: flex;
    justify-content: center;
  }
`;

export const WrapperGrid = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemsGrid = styled(Grid)`
  && {
    padding: 50px;
    display: flex;
    justify-content: center;
  }
`;

export const StyledBtnGroup = styled(ButtonGroup)`
  && {
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-around;
  }
`;

export const StyledBtn = styled(Button)`
  && {
    background-color: ${yellow};
    color: ${green};
    font-weight: 600;
    margin: 15px;
    font-size: 20px;
  }
`;

export const PageNumber = styled.h1`
  background-color: ${green};
  color: ${yellow};
  font-weight: 600;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

//Card

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
`;

export const ItemCard = styled(Card)`
  && {
    text-align: center;
    min-width: 250px;
    max-width: 250px;
    margin: 10px;
    box-sizing: border-box;
    border-color: ${yellow};
    border-width: 1px;
    border-style: solid;
    transition: transform 0.3s;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    :hover {
      transform: scale(1.01);
    }
  }
`;

export const ItemName = styled(Typography)`
  && {
    text-align: left;
    text-transform: capitalize;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 1.3;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 20px;
  }
`;

export const DescriptionBtn = styled(Button)`
  && {
    text-align: center;
    font-size: 14px;
    background-color: ${yellow};
    color: ${green};
    font-weight: 600;
    :hover {
      background-color: ${green};
      color: ${yellow};
    }
  }
`;

export const ItemValue = styled(Typography)`
  && {
    text-align: left;
    font-size: 18px;
  }
`;

export const ItemMedia = styled(CardMedia)`
  && {
    width: 100%;
    height: 100%;
  }
`;
