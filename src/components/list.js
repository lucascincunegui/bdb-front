import React, { useEffect, useState } from "react";
import ProductCard from "../components/card";
import {
  ItemsGrid,
  StyledBtn,
  PageNumber,
  StyledBtnGroup,
  ProgressCircular,
  WrapperGrid,
} from "./styles";

export default function Lista({ products }) {
  const itemsPerPage = 8;
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState();

  const setLista = () => {
    setItems([...products].splice(0, itemsPerPage));
  };

  useEffect(setLista, [products]);

  const Loader = () => {
    setLoading(true);

    window.scrollTo({ top: 0 });

    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
      setLoading(false);
    }, 1000);
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

    if (prevPage < 0) return;

    const firstIndex = prevPage * itemsPerPage;
    Loader();
    setItems([...products].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <WrapperGrid>
      <ItemsGrid container>
        {loading ? <ProgressCircular size={60} /> : <>{product}</>}
      </ItemsGrid>
      <StyledBtnGroup orientation="horizontal">
        {currentPage !== 0 ? (
          <StyledBtn
            disabled={disabled}
            onClick={prevHandler}
            variant="contained"
          >
            Anterior
          </StyledBtn>
        ) : null}

        <PageNumber>
          {currentPage} de {totalPages}
        </PageNumber>

        {currentPage <= totalPages ? (
          <StyledBtn
            disabled={disabled}
            onClick={nextHandler}
            variant="contained"
          >
            Seguinte
          </StyledBtn>
        ) : null}
      </StyledBtnGroup>
    </WrapperGrid>
  );
}
