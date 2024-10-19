import React, { useEffect, useState } from "react";
import "../css/style.css";
import Carousel from "../components/carousel";

import ProductCard from "../components/card";
import { getProducts } from "../helpers/API";
import SocialLink from "../components/socialLink";
export default function Home() {
  const [product, setProduct] = useState([]);

  const loadData = () => {
    console.log("Arthur");
    getProducts().then(setProduct);
  };

  useEffect(loadData, []);
  function ListProductCard() {
    return product.map((product, index) => (
      <ProductCard
        key={index}
        name={product.nombre}
        value={product.valor}
        link={product.link}
      />
    ));
  }

  return (
    <div>
      <p className="p">
        Aqui você encontra tudo o que precisar para o seu pet!
      </p>
      <Carousel>
        <ListProductCard />
      </Carousel>
      <Carousel>
        <div className="social">
          <SocialLink
            className="facebook"
            src="../../assets/facebook.png"
            alt="Facebook"
          />
          <SocialLink
            className="instagram"
            src="../../assets/instagram.png"
            alt="Instagram"
          />
        </div>
      </Carousel>
    </div>
  );
}
