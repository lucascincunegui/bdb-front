import React from "react";
import { NavLinksDiv } from "./styles";
import { LinkBtn, StyledLink } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
export default function NavLinks() {
  return (
    <NavLinksDiv>
      <StyledLink exact="true" to="/">
        <LinkBtn variant="contained">
          <HomeIcon style={{ padding: 3 }} />
          Inicio
        </LinkBtn>
      </StyledLink>
      <StyledLink exact="true" to="/produtos">
        <LinkBtn variant="contained">
          <StoreIcon style={{ padding: 3 }} />
          Produtos
        </LinkBtn>
      </StyledLink>
    </NavLinksDiv>
  );
}
