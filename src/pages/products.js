import React, { useEffect, useState } from "react";
import { DivProducts, InputFilter } from "./styles";
import Lista from "../components/list";
import { green } from "../ui/colors";
import axios from "axios";
import { Paper } from "@material-ui/core";

export default function Products() {
  const loadData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((resp) => {
      for (let i = 0; i < resp.data.results.length; i++) {
        axios.get(resp.data.results[i].url).then((result) => {
          setPokemons((prevArray) => [...prevArray, result.data]);
          //falta ordenar pokemons por indice
        });
      }
    });
  };

  useEffect(loadData, []);

  const itemsPerPage = 9;
  const [busqueda, setBusqueda] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [datosFromApi, setDatosFromApi] = useState(pokemons);
  const [items, setItems] = useState([...pokemons].splice(0, itemsPerPage));

  const [currentPage, setCurrentPage] = useState(0);

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
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = pokemons.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setBusqueda(resultadosBusqueda);
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
            pokemons={pokemons}
            currentPage={currentPage}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        </DivProducts>
      </Paper>
    </>
  );
}
