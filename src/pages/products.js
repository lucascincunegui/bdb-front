import { Typography } from "@material-ui/core";
import React from "react";
import Lista from "../components/list";

export default function Products() {
  return (
    <>
      <Typography component="h2" variant="h2">
        Produtos
      </Typography>
      <Lista />
    </>
  );
}
