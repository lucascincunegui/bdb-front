import React from "react";
import { Link } from "react-router-dom";
import { NavLinksDiv } from "./constants";

export default function NavLinks() {
  return (
    <NavLinksDiv>
      <Link style={{ marginRight: 10 }} exact to="/">
        Home
      </Link>
      <Link style={{ marginRight: 10 }} exact to="/produtos">
        Produtos
      </Link>
    </NavLinksDiv>
  );
}
