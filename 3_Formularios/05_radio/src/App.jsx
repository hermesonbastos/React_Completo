import React from "react";

function App() {
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          name="produto"
          value="smartphone"
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          name="produto"
          value="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>

      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          name="cor"
          value="vermelho"
          onChange={({target}) => setCor(target.value)}
        />
        Vermelho
      </label>
      <label>
        <input
          type="radio"
          name="cor"
          value="azul"
          onChange={({target}) => setCor(target.value)}
        />
        Azul
      </label>
    </form>
  );
}

export default App;
