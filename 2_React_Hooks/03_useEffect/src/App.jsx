import React from "react";

function App() {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  // React.useEffect(() => {
  //   console.log("executou");
  // }, []); // se utilizarmos um array vazio o useEffect vai executar apenas uma única vez, quando o componente renderizar

  // const titulo = 'Total '
  // React.useEffect(() => {
  //   document.title = titulo + contar;
  // }, [contar])

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1> <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>{" "}
    </div>
  );
}

export default App;
