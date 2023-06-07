import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import { green, yellow } from "../ui/colors";
import { CardContainer } from "./styles";

export default function ProductCard({ name, value, link }) {
  function formatWords(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Card
      style={{
        textAlign: "center",
        minWidth: "300px",
        maxWidth: "300px",
        margin: "30px",
        boxSizing: "border-box",
        borderColor: yellow,
        borderWidth: 3,
        borderStyle: "solid",
      }}
    >
      <CardContainer>
        <CardMedia
          style={{ width: `100%`, height: `100%` }}
          alt={"image " + name}
          image={link}
        />
      </CardContainer>
      <Divider />
      <CardContent
        style={{
          borderRadius: 5,
        }}
      >
        <Typography
          style={{
            textAlign: "left",
            fontSize: 22,
          }}
        >
          {formatedValue}
        </Typography>
        <Typography style={{ textAlign: "left", fontSize: 18 }}>
          {formatWords(name)}
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          style={{
            textAlign: "center",
            fontSize: 15,
            backgroundColor: "#fed227",
            color: `${green}`,
            fontWeight: 600,
          }}
        >
          Ver descrição
        </Button>
      </CardContent>
    </Card>
  );
}
