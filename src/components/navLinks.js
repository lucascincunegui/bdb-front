import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
export default function NavLinks() {
  return (
    <div className="nav">
      <Link className="nav-link" exact="true" to="/">
        <button className="nav-btn" disableElevation={true} variant="contained">
          <HomeIcon className="nav-icon" />
          <span className="nav-text">Inicio</span>
        </button>
      </Link>
      <Link className="nav-link" exact="true" to="/produtos">
        <button className="nav-btn" disableElevation={true} variant="contained">
          <StoreIcon className="nav-icon" />
          <span className="nav-text">Produtos</span>
        </button>
      </Link>
    </div>
  );
}
