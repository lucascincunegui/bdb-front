import React, { useState } from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import { green } from "../ui/colors";
import ProductCard from "../components/card";

export default function Lista({ products }) {
  const itemsPerPage = 9;
  const [items, setItems] = useState([...products].splice(0, itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  const product = products.map((product, index) => (
    <ProductCard
      key={index}
      name={product.nombre}
      value={product.valor}
      link={product.link}
    />
  ));

  //BOTON SIGUIENTE
  const nextHandler = () => {
    const totalItems = products.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex === totalItems) return;

    setItems([...products].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  //BOTON ANTERIOR
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const firstIndex = prevPage * itemsPerPage;

    setItems([...products].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <>
      <Grid style={{ minHeight: 1500 }}>
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
          onClick={prevHandler}
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
          onClick={nextHandler}
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
