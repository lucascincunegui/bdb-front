import Lista from ".";

export default function ListAndFilter({ filter, items, itemsPerPage = 8 }) {
  const filteredItems = (terminoBusqueda) => {
    if (!filter) return items;
    return items.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  };

  return (
    <Lista products={filteredItems(filter)} itemsPerPage={itemsPerPage} />
  );
};