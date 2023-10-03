import React from "react";

function App() {
  // ex 01
  // const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(["vermelho"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]); // adiciona no vetor se a cor estiver selecionada
    } else {
      setCores(
        cores.filter((cor) => {
          console.log(cor);
          return cor !== target.value; // se ele for desmarcada, iremos retornar um novo array sem o elemento do campo cujo invocou a função handleChange
        }),
      );
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  console.log(cores);

  return (
    <form>
      {/* ex 01 */}
      {/* {termos && <p>Aceitou os termos.</p>}
      <label>
        <input
          type="checkbox"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label> */}
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkColor("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
}

export default App;
