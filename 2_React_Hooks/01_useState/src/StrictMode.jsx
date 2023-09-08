import { useState } from "react";

const App = () => {
  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => {
      // não é correto atualizar um estado dentro de outra atualização de estado
      // isso pode gerar um effeito colateral de repetição da funcionalidade por
      // conta da renderização dupla do StrictMode
      // setItems((item) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });

    // o correto seria a função isolada da anterior
    setItems([...items, 'Item ' + (contar + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
