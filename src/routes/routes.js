import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  SubHeader,
  Title,
  Wrapper,
} from "../components/constants";
import NavLinks from "../components/navLinks";
import Home from "../pages/home";
import Products from "../pages/products";
import Error404 from "../pages/error404";

export default function MyRoutes() {
  return (
    <Wrapper>
      <Router>
        <Header>
          <SubHeader>
            <Title>Bulichu Dos Bichus</Title>
            <NavLinks />
          </SubHeader>
          <img width={400} src="/assets/pagina.png" />
        </Header>
        <div style={{ margin: 30 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produtos" element={<Products />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer>
          <Title>Pie de pagina</Title>
        </Footer>
      </Router>
    </Wrapper>
  );
}
