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
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          {name}
        </Typography>
      </CardContent>
      <Typography
        style={{ textAlign: "right", fontWeight: "bold", fontSize: 30 }}
      >
        {value}
      </Typography>
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
