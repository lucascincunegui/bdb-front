import React, { useEffect, useState } from "react";
import ProductCard from "../components/card";
import { ItemsGrid, StyledBtn, PageNumber, StyledBtnGroup } from "./styles";

export default function Lista({ products }) {
  const itemsPerPage = 8;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = products.length / itemsPerPage;
  //NO PASA A LA ULTIMA PAGINA
  const setLista = () => {
    setItems([...products].splice(0, itemsPerPage));
  };

  useEffect(setLista, [products]);

  const product = items.map((product, index) => (
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

    if (firstIndex >= totalItems) return;

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

  console.log("TOTAL => " + totalPages);
  console.log("CURRENT => " + currentPage);
  console.log("PRODUCTS => " + products.length);
  return (
    <>
      <ItemsGrid container spacing={3}>
        {product}
      </ItemsGrid>
      <StyledBtnGroup orientation="horizontal">
        {currentPage !== 0 ? (
          <StyledBtn onClick={prevHandler} variant="contained">
            Anterior
          </StyledBtn>
        ) : null}

        <PageNumber>
          {currentPage} de {totalPages}
        </PageNumber>

        {currentPage <= totalPages ? (
          <StyledBtn onClick={nextHandler} variant="contained">
            Seguinte
          </StyledBtn>
        ) : null}
      </StyledBtnGroup>
    </>
  );
}
