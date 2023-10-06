import React from "react";
import { CardContent, Divider } from "@material-ui/core";

export default function ProductCard({ name, value, link }) {
  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="item-card">
      <div className="card-container">
        <h1 className="item-name" alt={"image " + name} image={link} />
      </div>
      <Divider />
      <CardContent>
        <h1 className="item-value">{formatedValue}</h1>
        <h1 className="item-name">{name}</h1>
      </CardContent>
      <CardContent>
        <button>Ver descrição</button>
      </CardContent>
    </div>
  );
}
