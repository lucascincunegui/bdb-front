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

export default function ProductCard({ name, value, image }) {
  function formatWords(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <Card
      style={{
        textAlign: "center",
        minWidth: "300px",
        margin: "30px",
        boxSizing: "border-box",
        borderColor: yellow,
        borderWidth: 3,
        borderStyle: "solid",
      }}
    >
      <CardMedia style={{ minHeight: 300 }} alt="image" image={image} />
      <Divider />
      <CardContent
        style={{
          borderRadius: 5,
        }}
      >
        <Typography
          style={{
            textAlign: "left",
            fontSize: 25,
          }}
        >
          {formatWords(name)}
        </Typography>
        <Typography
          style={{
            textAlign: "right",
            fontSize: 25,
          }}
        >
          {"R$ " + value + ",00"}
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          style={{
            textAlign: "center",
            fontWeight: "bold",
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
