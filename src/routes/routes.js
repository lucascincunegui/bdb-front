import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from "../components/navLinks";
import Home from "../pages/home";
import Products from "../pages/products";
import Error404 from "../pages/error404";
import {
  ArrowRightAltSharp,
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";

export default function MyRoutes() {
  const facebook = () => {
    window.open("https://www.facebook.com/bulichu.dosbichos.7");
  };

  const instagram = () => {
    window.open("https://www.instagram.com/bulichudosbichos/");
  };

  return (
    <div className="routes-wrapper">
      <Router>
        <div className="header">
          <div className="header-div">
            <img
              className="image"
              alt="imagem"
              src={
                "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/316543554_871719627170813_6757776230591023956_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEEaPdLAMVHeAgZvWaWcr4hcmwiQGYsV9NybCJAZixX07YnbmMgt0hw7LtgTGEccegQaQ9Z9dJkSe5wWi6LDjG0&_nc_ohc=JC5s5u6hw4UAX9Fip_R&_nc_oc=AQk1LDg6UBL-cCN6FddL3sAMy91vE9n68ha3KlAEtX8kQ8ZL9lM8ZttEhPx440U0TQx5ehzLsoygn_hwophrmvjc&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDiZGePCHV13WyB8CcLXp1qpBivY6TLCcCy_A65VLxlxQ&oe=64AD93CD"
              }
            />
            <h1 className="title">Bulichu Dos Bichos</h1>
          </div>
          <NavLinks />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <div>
          <div className="footer">
            <div className="text-footer">Siganos para entrar em contato</div>
            <ArrowRightAltSharp
              style={{ margin: 20, color: "yellow" }}
              fontSize="large"
            />
            <button className="styled-btn" onClick={facebook}>
              <Facebook fontSize="large" />
            </button>
            <button className="styled-btn" onClick={instagram}>
              <Instagram fontSize="large" />
            </button>
            <button className="styled-btn">
              <WhatsApp fontSize="large" />
            </button>
          </div>
        </div>
      </Router>
    </div>
  );
}
