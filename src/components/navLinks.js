import { Button } from "@material-ui/core";
import React from "react";
import { green } from "../ui/colors";
import { NavLinksDiv } from "./constants";
import { StyledLink } from "./styles";

export default function NavLinks() {
  return (
    <NavLinksDiv>
      <StyledLink exact to="/">
        <Button
          style={{
            backgroundColor: "#fed227",
            color: `${green}`,
            fontWeight: 600,
            marginRight: 20,
          }}
          variant="contained"
        >
          Inicio
        </Button>
      </StyledLink>
      <StyledLink exact to="/produtos">
        <Button
          style={{
            backgroundColor: "#fed227",
            color: `${green}`,
            fontWeight: 600,
            marginRight: 20,
          }}
          variant="contained"
        >
          Produtos
        </Button>
      </StyledLink>
    </NavLinksDiv>
  );
}
