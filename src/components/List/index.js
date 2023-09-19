import React, { useEffect, useState } from "react";
import ProductCard from "../../components/card";
import {
  ItemsGrid,
  StyledBtn,
  PageNumber,
  StyledBtnGroup,
  WrapperGrid,
} from "../styles";

function ListProductCard({ items }) {
  return items.map((product, index) => (
    <ProductCard
      key={index}
      name={product.nombre}
      value={product.valor}
      link={product.link}
    />
  ));
}

export default function Lista({ products, itemsPerPage = 8 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const getPage = (page = undefined) => {
    const current = page || currentPage;
    return products.slice(itemsPerPage * (current - 1), itemsPerPage * current);
  };


  //BOTON SIGUIENTE
  const nextHandler = () => {
    console.log('nextHandler')
    if (totalPages <= currentPage) return setCurrentPage(1);
    return setCurrentPage(c => c + 1);
  };

  //BOTON ANTERIOR
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (currentPage - 1 <= 0) {
      return setCurrentPage(totalPages)
    }
    setCurrentPage(prevPage);
  };

  useEffect(() => {
    console.log({
      currentPage,
      totalPages
    })
  }, [currentPage, totalPages]);

  return (
    <WrapperGrid>
      <ItemsGrid container>
        <ListProductCard
          items={getPage()}
        />
      </ItemsGrid>
      <StyledBtnGroup orientation="horizontal">
        {currentPage !== 1 ? (
          <StyledBtn
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
