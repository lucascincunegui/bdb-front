import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  InputDiv,
  ProductsPaper,
  ItemBtn,
  ListOptions,
  OrderItemBtn,
  Span,
  FilterPaper,
  ListGrid
} from "./styles";
import { Divider, InputAdornment, TextField } from "@material-ui/core";
import { green } from "../ui/colors";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAndFilter from "../components/List/ListAndFilter";
import { getProducts } from "../helpers/API";

export default function Products() {
  const [busqueda, setBusqueda] = useState(null);
  const [product, setProduct] = useState([]);
  const [smallest, setSmallest] = useState(null);
  const [open, setOpen] = useState(false);

  const loadData = () => {
    console.log('Arthur')
    getProducts().then(setProduct);
  };

  useEffect(loadData, []);

  const sortedProducts = useMemo(() => {

    if (smallest === null) return product.sort((a, b) => a.nombre.localeCompare(b.nombre));

    setOpen(false);
    if (smallest) return product.sort((a, b) => a.valor - b.valor);
    return product.sort((a, b) => b.valor - a.valor);
  }, [product, smallest]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ProductsPaper>
      <FilterPaper>
        <InputDiv>
          <TextField
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            fullWidth
            color="secondary"
            id="Buscar produtos"
            variant="outlined"
            placeholder="Buscar produtos..."
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: green, mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
        </InputDiv>
        <List
          sx={{
            width: "100%",
            maxWidth: 170,
          }}
          component="nav"
        >
          <OrderItemBtn focus="true" onClick={handleClick}>
            <Span>Ordenar por</Span>
            {open ? <ExpandLess /> : <ExpandMore />}
          </OrderItemBtn>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ListOptions component="div" disablePadding>
              <ItemBtn
                style={
                  smallest === false ? { fontWeight: "bold", color: green } : null
                }
                disabled={smallest === false}
                divider
                onClick={() => setSmallest(false)}
              >
                <Span>Maior Preço</Span>
              </ItemBtn>
              <ItemBtn
                style={
                  smallest ? { fontWeight: "bold", color: green } : null
                }
                disabled={smallest}
                divider
                onClick={() => setSmallest(true)}
              >
                <Span>Menor Preço</Span>
              </ItemBtn>
            </ListOptions>
          </Collapse>
        </List>
      </FilterPaper>
      <Divider />
      <ListGrid>
        <ListAndFilter items={sortedProducts} filter={busqueda} itemsPerPage={10} />
      </ListGrid>
    </ProductsPaper>
  )
}
