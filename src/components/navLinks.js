import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
export default function NavLinks() {
  return (
    <div className="navlinks">
      <Link className="link" exact="true" to="/">
        <button
          className="link-btn"
          disableElevation={true}
          variant="contained"
        >
          <HomeIcon style={{ margin: 10 }} />
          <span style={{ margin: 10 }}>Inicio</span>
        </button>
      </Link>
      <Link className="link" exact="true" to="/produtos">
        <button
          className="link-btn"
          disableElevation={true}
          variant="contained"
        >
          <StoreIcon style={{ margin: 10 }} />
          <span style={{ margin: 10 }}>Produtos</span>
        </button>
      </Link>
    </div>
  );
}
