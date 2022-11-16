import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import Lista from "../components/list";
import { green, yellow } from "../ui/colors";

export default function Products() {
  return (
    <div
      style={{
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: green,
        padding: 10,
      }}
    >
      {/* <Title>Produtos</Title> */}
      <Lista />
      <ButtonGroup style={{ marginBottom: 40 }} orientation="horizontal">
        <Button
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
    </div>
  );
}
