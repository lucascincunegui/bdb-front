import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Title, Wrapper } from "../components/constants";
import { Header, SubHeader } from "./styles";
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
            <SubHeader>
              <Title>Bulichu Dos Bichus</Title>
              <NavLinks />
            </SubHeader>
            <img
              style={{ border: "solid 1px rgb(254, 210, 39)" }}
              width={450}
              src="/assets/pagina.png"
            />
          </Header>
        </Paper>
        <div style={{ margin: 60 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produtos" element={<Products />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Paper elevation={3}>
          <Footer>
            <Title>Pie de pagina</Title>
          </Footer>
        </Paper>
      </Router>
    </Wrapper>
  );
}
