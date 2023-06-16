import styled from "styled-components";
import { green, lightGray, black, yellow } from "../ui/colors";
import { Paper } from "@material-ui/core";

//Divs

export const Container = styled.div`
  background-color: ${lightGray};
  padding: 10px 10px 10px 10px;
`;

export const ProductsPaper = styled(Paper)`
  && {
    background-color: #f0f0f0d9;
    text-align: center;
  }
`;

export const InputFilter = styled.input`
  margin-top: 30px;
  padding: 10px;
  border-radius: 4px;
  border: 5px solid ${yellow};
  font-weight: 600;
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

export const Parrafo = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

//Image

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

//Button

export const ButtonNav = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  cursor: pointer;
`;
