import React, { useEffect, useState } from "react";
import {
  InputDiv,
  ProductsPaper,
  BtnsDiv,
  StyledBtn2,
  FilterPaper,
  ListGrid,
} from "./styles";
import Lista from "../components/list";
import axios from "axios";
import { ProgressCircular } from "../components/styles";
import { Divider, InputAdornment, TextField } from "@material-ui/core";
import { green } from "../ui/colors";
import SearchIcon from "@mui/icons-material/Search";

export default function Products() {
  const [busqueda, setBusqueda] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState();
  const [selectedMajor, setSelectedMajor] = useState(true);
  const [selectedMinor, setSelectedMinor] = useState(true);

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

    setSelectedMajor(false);
    setSelectedMinor(true);

    const priceFilter = products.sort((a, b) => b.valor - a.valor);
    setProducts(priceFilter);
  };

  //ORDENA DE MENOR A MAYOR PREÇO
  const minorToMajor = () => {
    Loader();

    setSelectedMinor(false);
    setSelectedMajor(true);

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
        <BtnsDiv>
          <span style={{ fontWeight: 500, marginRight: 10 }}>Ordenar por</span>
          {selectedMinor ? (
            <>
              <StyledBtn2
                size="small"
                disabled={disabled}
                onClick={minorToMajor}
              >
                Menor preço
              </StyledBtn2>
            </>
          ) : null}
          {selectedMajor ? (
            <>
              <StyledBtn2
                size="small"
                disabled={disabled}
                onClick={majorToMinor}
              >
                Maior preço
              </StyledBtn2>
            </>
          ) : null}
        </BtnsDiv>
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
