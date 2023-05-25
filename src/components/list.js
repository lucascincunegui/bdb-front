import React from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { green } from "../ui/colors";
import ProductCard from "../components/card";

export default function Lista(props) {
  const product = props.product.map((product, index) => (
    <ProductCard
      key={index}
      name={product.nombre}
      value={product.valor}
      link={product.link}
    />
  ));

  return (
    <>
      <Grid style={{ minHeight: 2300 }}>
        <Grid
          style={{ padding: 30 }}
          container
          spacing={3}
          justifyContent="center"
        >
          {product}
        </Grid>
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
