import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, SubHeader, Title, Footer, Wrapper, Imagem } from "./styles";
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
            <Imagem
              alt="Sejam Bem-Vindos. Aberto até as 21hs"
              width={450}
              src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/294510978_468806668589713_700820825244798186_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zAWE3GsZ7QoAX_vMe1_&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCDVpafBFPkKR52WU8iXKVm-I2P_hv-dXEwn0QESDQQTg&oe=64A0A774"
            />
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
