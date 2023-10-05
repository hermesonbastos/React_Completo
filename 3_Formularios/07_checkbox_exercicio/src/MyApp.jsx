// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.
// const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

import React from "react";
import CheckboxInput from "./MyResol/CheckboxInput";

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  return (
    <form>
      {coresArray.map(cor => (
        <CheckboxInput value={cor} cores={cores} setCores={setCores}/>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;