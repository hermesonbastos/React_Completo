import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null; // não deixa o componente renderizar sem os dados

  return <div>
    <ul>
      {global.dados.map((produto) => <li key={produto.id}>Produto: {produto.nome}</li>)}
    </ul>
  </div>;
};

export default Produto;
