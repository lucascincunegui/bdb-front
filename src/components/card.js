import React from "react";
import "../css/style.css";

export default function ProductCard({ name, value, link }) {
  const formatedValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <wrapper className="card">
      <div className="card-container">
        <img className="card-container-img" alt={"image " + name} src={link} />
      </div>
      <div className="card-div">
        <h1 className="card-div-value">{formatedValue}</h1>
        <h1 className="card-div-name">{name}</h1>
        <button className="card-div-btn">Ver descrição</button>
      </div>
    </wrapper>
  );
}
