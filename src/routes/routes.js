import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header, Title, Wrapper } from "../components/constants";
import NavLinks from "../components/navLinks";
import Home from "../pages/home";
import Products from "../pages/products";

export default function MyRoutes() {
  return (
    <Wrapper>
      <Router>
        <Header>
          <Title>Bulichu Dos Bichus</Title>

          <NavLinks />
        </Header>

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/produtos" element={<Products />} />
        </Routes>
        <Footer>
          <Title>Pie de pagina</Title>
        </Footer>
      </Router>
    </Wrapper>
  );
}
