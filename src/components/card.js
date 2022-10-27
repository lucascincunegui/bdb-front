import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

export default function ProductCard({ name, value, image }) {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{value}</Typography>
      </CardContent>
      <CardMedia alt="imagen" src={image} />
    </Card>
  );
}
