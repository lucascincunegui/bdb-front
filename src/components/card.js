import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

export default function ProductCard({ name, value, image }) {
  return (
    <Card
      style={{
        textAlign: "center",
        minWidth: "350px",
        margin: "1em",
        boxSizing: "border-box",
      }}
    >
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
      <CardMedia
        style={{ minHeight: 300, margin: "1em" }}
        alt="imagen"
        image={image}
      />
    </Card>
  );
}
