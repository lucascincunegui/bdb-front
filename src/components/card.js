import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { green, yellow } from "../ui/colors";

export default function ProductCard({ name, value, image }) {
  return (
    <Card
      style={{
        textAlign: "center",
        minWidth: "300px",
        margin: "30px",
        boxSizing: "border-box",
        padding: "30px",
        borderColor: yellow,
        borderWidth: 3,
        borderStyle: "solid",
      }}
    >
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
      <CardMedia
        style={{ minHeight: 200, margin: "40px" }}
        alt="imagen"
        image={image}
      />

      <Typography
        style={{ textAlign: "right", fontWeight: "bold", fontSize: 30 }}
      >
        {value}
      </Typography>
    </Card>
  );
}
