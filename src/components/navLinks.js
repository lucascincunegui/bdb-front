import React from "react";
import { NavLinksDiv } from "./styles";
import { LinkBtn, StyledLink } from "./styles";

export default function NavLinks() {
  return (
    <NavLinksDiv>
      <StyledLink exact="true" to="/">
        <LinkBtn variant="contained">Inicio</LinkBtn>
      </StyledLink>
      <StyledLink exact="true" to="/produtos">
        <LinkBtn variant="contained">Produtos</LinkBtn>
      </StyledLink>
    </NavLinksDiv>
  );
}
