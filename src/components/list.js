import React from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { green } from "../ui/colors";
import ProductCard from "../components/card";

export default function Lista(props) {
  const pokemons = props.pokemons.map((poke, index) => (
    <ProductCard
      key={index}
      name={poke.name}
      value={poke.base_experience}
      image={poke.sprites.front_default}
    />
  ));
  return (
    <>
      <Grid
        style={{ padding: 30 }}
        container
        spacing={3}
        justifyContent="center"
      >
        {pokemons}
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
