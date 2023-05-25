import React, { useEffect, useState } from "react";
import { DivProducts, InputFilter } from "./styles";
import Lista from "../components/list";
import { green } from "../ui/colors";
import axios from "axios";
import { Paper } from "@material-ui/core";

export default function Products() {
  const itemsPerPage = 9;
  const [busqueda, setBusqueda] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [datosFromApi, setDatosFromApi] = useState(product);
  const [items, setItems] = useState([...product].splice(0, itemsPerPage));

  const [currentPage, setCurrentPage] = useState(0);

  const loadData = () => {
    axios.get("http://localhost:4000/Productos").then((result) => {
      setProduct(result.data);
      setProducts(result.data);
    });
  };

  useEffect(loadData, []);
  //BOTON SIGUIENTE
  const nextHandler = () => {
    const totalItems = datosFromApi.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex === totalItems) return;

    setItems([...datosFromApi].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  //BOTON ANTERIOR
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    setItems([...datosFromApi].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  //FILTRAR PRODUCTOS
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    // console.log(busqueda);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = products.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProduct(resultadosBusqueda);
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
          <Lista
            product={product}
            currentPage={currentPage}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        </DivProducts>
      </Paper>
    </>
  );
}
