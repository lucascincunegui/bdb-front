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
            <h1 className="header-title">Bulichu Dos Bichos</h1>
          </div>
          <NavLinks />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <div className="footer">
          <div className="footer-text">Siganos para entrar em contato</div>
          <ArrowRightAltSharp
            style={{ margin: 20, color: "yellow" }}
            fontSize="large"
          />
          <div className="footer-links">
            <button className="footer-links-btn" onClick={facebook}>
              <Facebook fontSize="large" />
            </button>
            <button className="footer-links-btn" onClick={instagram}>
              <Instagram fontSize="large" />
            </button>
            <button className="footer-links-btn">
              <WhatsApp fontSize="large" />
            </button>
          </div>
        </div>
      </Router>
    </div>
  );
}
