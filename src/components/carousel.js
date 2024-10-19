import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ children }) {
  const carousel = useRef(null);

  const handleClickLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleClickRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={handleClickLeft}>
        <FaChevronLeft color="#003c22" size={25} />
      </button>
      <div className="carousel-container" ref={carousel}>
        {children}
      </div>
      <button className="carousel-btn" onClick={handleClickRight}>
        <FaChevronRight color="#003c22" size={25} />
      </button>
    </div>
  );
}
