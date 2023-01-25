import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "../components/card";

export default function Lista() {
  const productsArray = [
    {
      image: "/assets/racoes/golden.jpeg",
      value: "R$ 122,00",
      name: "Golden",
    },

    {
      image: "/assets/racoes/sapeca.jpeg",
      value: "R$ 100,00",
      name: "Sapeca",
    },

    {
      image: "/assets/racoes/pastel dog.jpeg",
      value: "R$ 140,00",
      name: "Pastel Dog",
    },

    {
      image: "/assets/racoes/premier.jpeg",
      value: "R$ 140,00",
      name: "Premier",
    },
    {
      image: "/assets/racoes/golden.jpeg",
      value: "R$ 122,00",
      name: "Golden",
    },

    {
      image: "/assets/racoes/sapeca.jpeg",
      value: "R$ 100,00",
      name: "Sapeca",
    },

    {
      image: "/assets/racoes/pastel dog.jpeg",
      value: "R$ 140,00",
      name: "Pastel Dog",
    },

    {
      image: "/assets/racoes/premier.jpeg",
      value: "R$ 140,00",
      name: "Premier",
    },
    {
      image: "/assets/racoes/golden.jpeg",
      value: "R$ 122,00",
      name: "Golden",
    },

    {
      image: "/assets/racoes/sapeca.jpeg",
      value: "R$ 100,00",
      name: "Sapeca",
    },

    {
      image: "/assets/racoes/pastel dog.jpeg",
      value: "R$ 140,00",
      name: "Pastel Dog",
    },

    {
      image: "/assets/racoes/premier.jpeg",
      value: "R$ 140,00",
      name: "Premier",
    },
    {
      image: "/assets/racoes/golden.jpeg",
      value: "R$ 122,00",
      name: "Golden",
    },

    {
      image: "/assets/racoes/sapeca.jpeg",
      value: "R$ 100,00",
      name: "Sapeca",
    },

    {
      image: "/assets/racoes/pastel dog.jpeg",
      value: "R$ 140,00",
      name: "Pastel Dog",
    },

    {
      image: "/assets/racoes/premier.jpeg",
      value: "R$ 140,00",
      name: "Premier",
    },
  ];

  return (
    <Grid style={{ padding: 30 }} container spacing={3} justifyContent="center">
      {productsArray.map((card, index) => {
        return (
          <ProductCard name={card.name} value={card.value} image={card.image} />
        );
      })}
    </Grid>
  );
}
