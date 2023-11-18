import React, { useEffect, useMemo, useState } from "react";
import { Divider, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAndFilter from "../components/List/ListAndFilter";
import { getProducts } from "../helpers/API";
import { ListItemButton } from "@mui/material";

export default function Products() {
  const [busqueda, setBusqueda] = useState(null);
  const [product, setProduct] = useState([]);
  const [smallest, setSmallest] = useState(null);
  const [open, setOpen] = useState(false);

  const loadData = () => {
    console.log("Arthur");
    getProducts().then(setProduct);
  };

  useEffect(loadData, []);

  const sortedProducts = useMemo(() => {
    if (smallest === null)
      return product.sort((a, b) => a.nombre.localeCompare(b.nombre));

    setOpen(false);
    if (smallest) return product.sort((a, b) => a.valor - b.valor);
    return product.sort((a, b) => b.valor - a.valor);
  }, [product, smallest]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="products-wrapper">
      <div className="div-filter">
        <div className="div-input">
          <TextField
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            fullWidth
            color="secondary"
            id="Buscar produtos"
            variant="outlined"
            placeholder="Buscar produtos..."
            autoComplete="off"
            InputProps={{
              style: { padding: 1 },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: " #003c22", mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <List
          sx={{
            width: "100%",
            maxWidth: 170,
          }}
          component="nav"
        >
          <ListItemButton
            style={{ borderRadius: 4, borderRight: 5 }}
            focus="true"
            onClick={handleClick}
          >
            <span style={{ padding: 10 }}>Ordenar por</span>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              style={{
                position: "absolute",
                backgroundColor: "white",
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                borderRadius: 4,
                borderLeft: 1,
                borderLeftStyle: "solid",
                borderLeftColor: "#003c2250",
              }}
              component="div"
              disablePadding
            >
              <ListItemButton
                style={
                  smallest === false
                    ? { fontWeight: "bold", color: " #003c22" }
                    : null
                }
                disabled={smallest === false}
                divider
                onClick={() => setSmallest(false)}
              >
                <span style={{ padding: 10 }}>Maior Preço</span>
              </ListItemButton>
              <ListItemButton
                style={
                  smallest ? { fontWeight: "bold", color: " #003c22" } : null
                }
                disabled={smallest}
                divider
                onClick={() => setSmallest(true)}
              >
                <span style={{ padding: 10 }}>Menor Preço</span>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
      <Divider />
      <div className="div-grid">
        <ListAndFilter
          items={sortedProducts}
          filter={busqueda}
          itemsPerPage={12}
        />
      </div>
    </div>
  );
}
