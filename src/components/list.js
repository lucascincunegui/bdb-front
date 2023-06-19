import React, { useEffect, useState } from "react";
import ProductCard from "../components/card";
import {
  ItemsGrid,
  StyledBtn,
  PageNumber,
  StyledBtnGroup,
  ProgressCircular,
} from "./styles";

export default function Lista({ products }) {
  const itemsPerPage = 8;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = products.length / itemsPerPage;
  const [loading, setLoading] = useState(false);

  const setLista = () => {
    setItems([...products].splice(0, itemsPerPage));
  };

  useEffect(setLista, [products]);

  const Loader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(Loader, []);

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
    Loader();
    setItems([...products].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);
  };

  //BOTON ANTERIOR
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    const firstIndex = prevPage * itemsPerPage;
    Loader();
    setItems([...products].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <>
      <ItemsGrid container spacing={3}>
        {loading ? <ProgressCircular size={60} /> : <>{product}</>}
      </ItemsGrid>
      <StyledBtnGroup orientation="horizontal">
        {currentPage !== 1 ? (
          <StyledBtn onClick={prevHandler} variant="contained">
            Anterior
          </StyledBtn>
        ) : null}

        <PageNumber>
          {currentPage} de {totalPages}
        </PageNumber>

        {currentPage < totalPages && currentPage !== totalPages ? (
          <StyledBtn onClick={nextHandler} variant="contained">
            Seguinte
          </StyledBtn>
        ) : null}
      </StyledBtnGroup>
    </>
  );
}
