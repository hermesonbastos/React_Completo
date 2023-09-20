import React from "react";
// exemplo 1
// import UserContext from './UserContext'

// exemplo 2
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  // exemplo 1
  // const dados = React.useContext(UserContext)
  // console.log(dados);

  // exemplo 2
  const global = React.useContext(GlobalContext);

  return (
    // exemplo 1
    // <div>
    //   {dados.name}
    // </div>

    // exemplo 2
    <div>
      Produto: {global.contar}{" "}
      <button onClick={() => global.adicionarUm()}>Adicionar um</button>
      <button onClick={() => global.adicionarDois()}>Adicionar dois</button>
    </div>
  );
};

export default Produto;
