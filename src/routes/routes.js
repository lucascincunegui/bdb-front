import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Title, Footer, Wrapper } from "./styles";
import NavLinks from "../components/navLinks";
import Home from "../pages/home";
import Products from "../pages/products";
import Error404 from "../pages/error404";
import { Paper } from "@material-ui/core";

export default function MyRoutes() {
  return (
    <Wrapper>
      <Router>
        <Paper elevation={3}>
          <Header>
            <Title>Bulichu Dos Bichus</Title>
            <NavLinks />
          </Header>
        </Paper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Paper elevation={3}>
          <Footer>
            <Title>Pie de pagina</Title>
          </Footer>
        </Paper>
      </Router>
    </Wrapper>
  );
}
