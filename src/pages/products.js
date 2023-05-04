import React, { useEffect, useState } from "react";
import { DivProducts, InputFilter } from "./styles";
import Lista from "../components/list";
import { Paper } from "@material-ui/core";
import { green } from "../ui/colors";
import axios from "axios";
const productsArray = [
  {
    image: "/assets/racoes/golden.jpeg",
    value: "R$ 122,00",
    name: "Golden",
  },

  {
    image: "/assets/racoes/sapeca.jpeg",
    value: "R$ 100,00",
    name: "Sapeca",
  },

  {
    image: "/assets/racoes/pastel dog.jpeg",
    value: "R$ 140,00",
    name: "Pastel Dog",
  },

  {
    image: "/assets/racoes/premier.jpeg",
    value: "R$ 140,00",
    name: "Premier",
  },
  {
    image: "/assets/racoes/golden.jpeg",
    value: "R$ 122,00",
    name: "Golden",
  },

  {
    image: "/assets/racoes/sapeca.jpeg",
    value: "R$ 100,00",
    name: "Sapeca",
  },

  {
    image: "/assets/racoes/pastel dog.jpeg",
    value: "R$ 140,00",
    name: "Pastel Dog",
  },

  {
    image: "/assets/racoes/premier.jpeg",
    value: "R$ 140,00",
    name: "Premier",
  },
  {
    image: "/assets/racoes/golden.jpeg",
    value: "R$ 122,00",
    name: "Golden",
  },

  {
    image: "/assets/racoes/sapeca.jpeg",
    value: "R$ 100,00",
    name: "Sapeca",
  },

  {
    image: "/assets/racoes/pastel dog.jpeg",
    value: "R$ 140,00",
    name: "Pastel Dog",
  },

  {
    image: "/assets/racoes/premier.jpeg",
    value: "R$ 140,00",
    name: "Premier",
  },
  {
    image: "/assets/racoes/golden.jpeg",
    value: "R$ 122,00",
    name: "Golden",
  },

  {
    image: "/assets/racoes/sapeca.jpeg",
    value: "R$ 100,00",
    name: "Sapeca",
  },

  {
    image: "/assets/racoes/pastel dog.jpeg",
    value: "R$ 140,00",
    name: "Pastel Dog",
  },

  {
    image: "/assets/racoes/premier.jpeg",
    value: "R$ 140,00",
    name: "Premier",
  },
];

const itemsPerPage = 9;

export default function Products() {
  // const pokeapi = axios
  //   .get("https://pokeapi.co/api/v2/pokemon/")
  //   .then((res) => {
  //     const pokedata = res.data.results;
  //     console.log(pokedata);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const loadData = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((resp) => {
  //     for (let i = 0; i < resp.data.results.length; i++) {
  //       axios.get(resp.data.results[i].url).then((result) => {
  //         setPokemon((prevArray) => [...prevArray, result.data]);
  //       });
  //     }
  //   });
  // };
  const [busqueda, setBusqueda] = useState([]);
  const [datosFromApi, setDatosFromApi] = useState(productsArray);
  //console.log(productsArray);
  const [items, setItems] = useState(
    [...productsArray].splice(0, itemsPerPage)
  );

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
    var resultadosBusqueda = productsArray.filter((elemento) => {
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
            currentPage={currentPage}
            items={items}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        </DivProducts>
      </Paper>
    </>
  );
}
