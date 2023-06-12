import React, { useState } from "react";
import ProductCard from "../components/card";
import { ItemsGrid, StyledBtn, PageNumber, StyledBtnGroup } from "./styles";

export default function Lista({ products }) {
  const itemsPerPage = 8;
  const [items, setItems] = useState([...products].splice(0, itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

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
  console.log(products);
  return (
    <>
      <ItemsGrid container spacing={3}>
        {product}
      </ItemsGrid>
      <StyledBtnGroup orientation="horizontal">
        <StyledBtn onClick={prevHandler} variant="contained">
          Anterior
        </StyledBtn>
        <PageNumber>Pagina - {currentPage}</PageNumber>
        <StyledBtn onClick={nextHandler} variant="contained">
          Siguiente
        </StyledBtn>
      </StyledBtnGroup>
    </>
  );
}
