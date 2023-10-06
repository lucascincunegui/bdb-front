import React, { useState } from "react";
import ProductCard from "../../components/card";

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

export default function Lista({ products, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const getPage = (page = undefined) => {
    const current = page || currentPage;
    return products.slice(itemsPerPage * (current - 1), itemsPerPage * current);
  };

  //BOTON SIGUIENTE
  const nextHandler = () => {
    console.log("nextHandler");
    if (totalPages <= currentPage) return setCurrentPage(1);
    return setCurrentPage((c) => c + 1);
  };

  //BOTON ANTERIOR
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (currentPage - 1 <= 0) {
      return setCurrentPage(totalPages);
    }
    setCurrentPage(prevPage);
  };

  return (
    <div className="wrapper">
      <div className="items-grid">
        <ListProductCard items={getPage()} />
      </div>
      <button className="btn-group">
        {currentPage !== 1 ? (
          <button className="btn" onClick={prevHandler} variant="contained">
            Anterior
          </button>
        ) : null}

        <h1 className="page-number">
          {currentPage} de {totalPages}
        </h1>

        {currentPage < totalPages ? (
          <button className="btn" onClick={nextHandler} variant="contained">
            Seguinte
          </button>
        ) : null}
      </button>
    </div>
  );
}
