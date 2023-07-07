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
  HeaderDiv,
  Image,
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
        <Header elevation={2}>
          <HeaderDiv>
            <Image
              src={
                "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/316543554_871719627170813_6757776230591023956_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEEaPdLAMVHeAgZvWaWcr4hcmwiQGYsV9NybCJAZixX07YnbmMgt0hw7LtgTGEccegQaQ9Z9dJkSe5wWi6LDjG0&_nc_ohc=JC5s5u6hw4UAX9Fip_R&_nc_oc=AQk1LDg6UBL-cCN6FddL3sAMy91vE9n68ha3KlAEtX8kQ8ZL9lM8ZttEhPx440U0TQx5ehzLsoygn_hwophrmvjc&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDiZGePCHV13WyB8CcLXp1qpBivY6TLCcCy_A65VLxlxQ&oe=64AD93CD"
              }
            />
            <Title>Bulichu Dos Bichos</Title>
          </HeaderDiv>
          <NavLinks />
        </Header>
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
