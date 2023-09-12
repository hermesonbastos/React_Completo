// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from "react";
import Button from "./minhaResolucao/Button";

function App() {
  const [pref, setPref] = React.useState(localStorage.getItem("produto"));
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${pref.toLowerCase()}`,
    )
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${pref.toLowerCase()}`,
    )
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [pref]);

  function handleClick(name) {
    localStorage.setItem("produto", name);
    setPref(name);
  }

  return (
    <div>
      <h1>Preferência: {pref}</h1>
      <div style={{ gap: "10px", display: "flex" }}>
        <Button setPref={handleClick} name="Notebook" />
        <Button setPref={handleClick} name="Smartphone" />
      </div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
        </div>
      )}
    </div>
  );
}

export default App;
