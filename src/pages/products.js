import React, { useEffect, useState } from "react";
import { DivProducts, InputFilter } from "./styles";
import Lista from "../components/list";
import { green } from "../ui/colors";
import axios from "axios";
import { Paper } from "@material-ui/core";

export default function Products() {
  const [busqueda, setBusqueda] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:4000/Productos").then((result) => {
      setProduct(result.data);
      setProducts(result.data);
    });
  };

  useEffect(loadData, []);

  //FILTRAR PRODUCTOS
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    // console.log(busqueda);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = product.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadosBusqueda);
  };

  return (
    <>
      <Paper
        style={{
          backgroundColor: green,
        }}
        elevation={3}
      >
        <InputFilter
          onChange={handleChange}
          value={busqueda}
          placeholder="Búsqueda por Nome"
        />

        <DivProducts>
          <Lista products={products} />
        </DivProducts>
      </Paper>
    </>
  );
}
