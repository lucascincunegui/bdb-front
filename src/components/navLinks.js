import React from "react";
import { NavLinksDiv } from "./styles";
import { LinkBtn, StyledLink } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
export default function NavLinks() {
  return (
    <NavLinksDiv>
      <StyledLink exact="true" to="/">
        <LinkBtn disableElevation={true} variant="contained">
          <HomeIcon style={{ margin: 10 }} />
          <span style={{ margin: 10 }}>Inicio</span>
        </LinkBtn>
      </StyledLink>
      <StyledLink exact="true" to="/produtos">
        <LinkBtn disableElevation={true} variant="contained">
          <StoreIcon style={{ margin: 10 }} />
          <span style={{ margin: 10 }}>Produtos</span>
        </LinkBtn>
      </StyledLink>
    </NavLinksDiv>
  );
}
