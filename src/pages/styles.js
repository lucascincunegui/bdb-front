import styled from "styled-components";
import { green, lightGray, black, yellow, bgPage } from "../ui/colors";
import { Button, Grid, List, Paper, Typography } from "@material-ui/core";
import { ListItemButton } from "@mui/material";

//Home

export const Social = styled(Grid)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 60px;
    padding-bottom: 60px;
    background: linear-gradient(0deg, #f0f0f0d9, rgb(220, 220, 220), #f0f0f0d9);
  }
`;

export const SocialMedia = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    transition: transform 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.01);
    }
  }
`;

export const GridIg = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: linear-gradient(
      120deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }
`;

export const GridFb = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: #4267b2;
  }
`;

export const TextDiv = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

export const Text = styled(Typography)`
  && {
    font-size: 20px;
    justify-content: center;
    padding: 15px;
  }
`;

export const IgImage = styled.img`
  width: 518px;
`;
export const FbImage = styled.img`
  width: 500px;
`;
//Divs

export const Container = styled.div`
  background-color: ${lightGray};
  padding: 10px 10px 10px 10px;
`;

export const ProductsPaper = styled(Grid)`
  && {
    margin-top: 5px;
    background-color: ${bgPage};
    text-align: center;
  }
`;

export const ListGrid = styled(Grid)`
  && {
    padding: 50px;
    display: flex;
    justify-content: center;
  }
`;

export const FilterPaper = styled(Grid)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${bgPage};
  }
`;

export const InputDiv = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 25px;
  }
`;

export const OrderItemBtn = styled(ListItemButton)`
  && {
    border-radius: 4px;
    border-right: 5px;
    :hover {
      background: transparent;
    }
  }
`;

export const ItemBtn = styled(ListItemButton)`
  && {
    border-radius: 4px;
    border-right: 5px;
    :hover {
      background: #003c2210;
      color: ${green};
    }
  }
`;

export const ListOptions = styled(List)`
  && {
    position: absolute;
    background-color: white;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    border-radius: 4px;
    border-left: 1px solid #003c2250;
  }
`;

export const BtnsDiv = styled(Grid)`
  && {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
    padding: 10px;
    flex-direction: row;
  }
`;

export const StyledBtn2 = styled(Button)`
  && {
    background-color: ${yellow};
    color: ${green};
    font-size: small;
    margin: 10px;
    padding: 5px;
    width: 120px;
    :hover {
      background-color: ${green};
      color: ${yellow};
    }
  }
`;

//Text

export const Title = styled.h1`
  color: ${green};
  font-size: 50px;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  color: ${black};
  font-weight: bold;
`;

export const Span = styled.span`
  padding: 10px;
`;

export const Parrafo = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

//Button

export const ButtonNav = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  cursor: pointer;
`;
