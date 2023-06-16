import React from "react";
import { CardContent, Divider } from "@material-ui/core";
import {
  CardContainer,
  DescriptionBtn,
  ItemCard,
  ItemMedia,
  ItemName,
  ItemValue,
} from "./styles";

export default function ProductCard({ name, value, link }) {
  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ItemCard elevation={3}>
      <CardContainer>
        <ItemMedia alt={"image " + name} image={link} />
      </CardContainer>
      <Divider />
      <CardContent>
        <ItemValue>{formatedValue}</ItemValue>
        <ItemName>{name}</ItemName>
      </CardContent>
      <CardContent>
        <DescriptionBtn>Ver descrição</DescriptionBtn>
      </CardContent>
    </ItemCard>
  );
}
