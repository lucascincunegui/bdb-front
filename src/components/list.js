import { Grid } from "@material-ui/core";
import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { green } from "../ui/colors";
import ProductCard from "../components/card";

export default function Lista(props) {
  const items = props.items.map((items, index) => {
    return (
      <ProductCard
        key={index}
        name={items.name}
        value={items.value}
        link={items.image}
      />
    );
  });

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
        <h1>Pagina:{props.currentPage}</h1>
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
