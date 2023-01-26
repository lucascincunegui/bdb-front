import React from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { green } from "../ui/colors";
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
    <>
      <Grid
        style={{ padding: 30 }}
        container
        spacing={3}
        justifyContent="center"
      >
        {items}
      </Grid>
      <ButtonGroup style={{ marginBottom: 40 }} orientation="horizontal">
        <Button
          onClick={props.prevHandler}
          style={{
            backgroundColor: "#fed227",
            color: `${green}`,
            fontWeight: 600,
            marginRight: 20,
          }}
          variant="contained"
        >
          Anterior
        </Button>
        <Button
          onClick={props.nextHandler}
          style={{
            backgroundColor: "#fed227",
            color: `${green}`,
            fontWeight: 600,
          }}
          variant="contained"
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </>
  );
}
