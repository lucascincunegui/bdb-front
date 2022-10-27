import React from "react";
import ProductCard from "../components/card";
import { DivLista } from "../components/constants";

export default function Lista() {
  const productsArray = [
    { image: "/assets/golden.jpeg", value: "R$ 140,00", name: "Golden" },

    { image: "/assets/sapeca.jpeg", value: "R$ 140,00", name: "Sapeca" },

    {
      image: "/assets/pastel dog.jpeg",
      value: "R$ 140,00",
      name: "Pastel Dog",
    },

    { image: "/assets/premier.jpeg", value: "R$ 140,00", name: "Premier" },

    { image: "/assets/bravo.jpeg", value: "R$ 140,00", name: "Bravo" },
  ];
  console.log(productsArray);
  return (
    <DivLista>
      {productsArray.map((card, index) => {
        return <ProductCard name={card.name} />;
      })}
    </DivLista>
  );
}
