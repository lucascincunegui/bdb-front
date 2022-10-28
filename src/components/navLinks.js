import React from "react";
import { NavLinksDiv } from "./constants";
import { StyledLink } from "./styles";

export default function NavLinks() {
  return (
    <NavLinksDiv>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink exact to="/produtos">
        Produtos
      </StyledLink>
    </NavLinksDiv>
  );
}
