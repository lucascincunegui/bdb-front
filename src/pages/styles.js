import styled from "styled-components";
import { green, lightGray, black, white } from "../ui/colors";

//Divs

export const Container = styled.div`
  background-color: ${lightGray};
  padding: 10px 10px 10px 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${green};
  align-items: center;
`;

//Text

export const Title = styled.h1`
  color: ${black};
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

export const TextButton = styled.p`
  color: ${white};
  font-size: 20px;
  font-weight: bold;
`;

//Image

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

//Button

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${green};
  cursor: pointer;
`;
