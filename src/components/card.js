import React from "react";
import { Divider } from "@material-ui/core";

export default function ProductCard({ name, value, link }) {
  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="item-card">
      <div className="card-container">
        <img className="item-img" alt={"image " + name} src={link} />
      </div>
      <Divider />
      <div className="div-content">
        <h1 className="item-value">{formatedValue}</h1>
        <h1 className="item-name">{name}</h1>
      </div>
      <div className="div-content">
        <button>Ver descrição</button>
      </div>
    </div>
  );
}
