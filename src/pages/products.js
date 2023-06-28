import React, { useEffect, useState } from "react";
import { InputFilter, ProductsPaper } from "./styles";
import Lista from "../components/list";
import axios from "axios";

export default function Products() {
  const [busqueda, setBusqueda] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:4000/Productos").then((result) => {
      const order = result.data.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
      setProduct(order);
      setProducts(order);
    });
  };

  useEffect(loadData, []);

  //FILTRAR PRODUCTOS
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
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
    <ProductsPaper>
      <InputFilter
        onChange={handleChange}
        value={busqueda}
        placeholder="Búsqueda por Nome"
      />
      <Lista products={products} />
    </ProductsPaper>
  );
}
