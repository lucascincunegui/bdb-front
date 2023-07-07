import React, { useEffect, useState } from "react";
import {
  InputDiv,
  ProductsPaper,
  ItemBtn,
  ListOptions,
  OrderItemBtn,
  Span,
  FilterPaper,
  ListGrid,
} from "./styles";
import Lista from "../components/list";
import axios from "axios";
import { ProgressCircular } from "../components/styles";
import { Divider, InputAdornment, TextField } from "@material-ui/core";
import { green } from "../ui/colors";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Products() {
  const [busqueda, setBusqueda] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState();
  const [selectedMajor, setSelectedMajor] = useState();
  const [selectedMinor, setSelectedMinor] = useState();
  const [open, setOpen] = useState(false);

  const loadData = () => {
    axios.get("http://localhost:4000/Productos").then((result) => {
      const order = result.data.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
      setProduct(order);
      setProducts(order);
    });
  };

  useEffect(loadData, []);

  //FILTRAR PRODUCTOS
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = product.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadosBusqueda);
  };

  //ORDENA DE MAYOR A MENOR PREÇO
  const majorToMinor = () => {
    Loader();

    setSelectedMinor(false);
    setSelectedMajor(true);

    setOpen(false);
    const priceFilter = products.sort((a, b) => b.valor - a.valor);
    setProducts(priceFilter);
  };

  //ORDENA DE MENOR A MAYOR PREÇO
  const minorToMajor = () => {
    Loader();

    setSelectedMajor(false);
    setSelectedMinor(true);

    setOpen(false);
    const priceFilter = products.sort((a, b) => a.valor - b.valor);
    setProducts(priceFilter);
  };

  const Loader = () => {
    setLoading(true);

    window.scrollTo({ top: 0 });

    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
      setLoading(false);
    }, 1000);
  };

  useEffect(Loader, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ProductsPaper>
      <FilterPaper>
        <InputDiv>
          <TextField
            value={busqueda}
            onChange={handleChange}
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
                  selectedMajor ? { fontWeight: "bold", color: green } : null
                }
                disabled={selectedMajor}
                divider
                onClick={majorToMinor}
              >
                <Span>Maior Preço</Span>
              </ItemBtn>
              <ItemBtn
                style={
                  selectedMinor ? { fontWeight: "bold", color: green } : null
                }
                disabled={selectedMinor}
                divider
                onClick={minorToMajor}
              >
                <Span>Menor Preço</Span>
              </ItemBtn>
            </ListOptions>
          </Collapse>
        </List>
      </FilterPaper>
      <Divider />
      <ListGrid>
        {loading ? (
          <ProgressCircular size={60} />
        ) : (
          <Lista products={products} />
        )}
      </ListGrid>
    </ProductsPaper>
  );
}
