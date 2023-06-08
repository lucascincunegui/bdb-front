import React, { useEffect, useState } from "react";
import { DivProducts } from "./styles";
import Lista from "../components/list";
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
  // const [products, setProducts] = useState([]);
  // const loadData = () => {
  //   axios.get("http://localhost:4000/Productos").then((result) => {
  //     setProducts(result.data);
  //   });
  // };
  // useEffect(loadData, []);

  const [datosFromApi, setDatosFromApi] = useState(productsArray);
  const [items, setItems] = useState(
    [...productsArray].splice(0, itemsPerPage)
  );

  const [currentPage, setCurrentPage] = useState(0);

  const nextHandler = () => {
    const totalItems = datosFromApi.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex === totalItems) return;

    setItems([...datosFromApi].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    setItems([...datosFromApi].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <DivProducts>
      <Lista
        currentPage={currentPage}
        items={items}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />
    </DivProducts>
  );
}
