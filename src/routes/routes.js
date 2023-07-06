import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Title,
  Footer,
  Wrapper,
  StyledBtn3,
  RigthArrow,
  TextFooter,
} from "./styles";
import NavLinks from "../components/navLinks";
import Home from "../pages/home";
import Products from "../pages/products";
import Error404 from "../pages/error404";
import { Paper } from "@material-ui/core";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function MyRoutes() {
  const facebook = () => {
    window.open("https://www.facebook.com/bulichu.dosbichos.7");
  };

  const instagram = () => {
    window.open("https://www.instagram.com/bulichudosbichos/");
  };

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
            <TextFooter>Siganos para entrar em contato</TextFooter>
            <RigthArrow fontSize="large" />
            <StyledBtn3 onClick={facebook}>
              <Facebook fontSize="large" />
            </StyledBtn3>
            <StyledBtn3 onClick={instagram}>
              <Instagram fontSize="large" />
            </StyledBtn3>
            <StyledBtn3>
              <WhatsApp fontSize="large" />
            </StyledBtn3>
          </Footer>
        </Paper>
      </Router>
    </Wrapper>
  );
}
