import Radio from "./Form/Radio";
import React from "react";

function App() {
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");

  return (
    <div>
      <h2>Cores</h2>
      <Radio options={["Vermelho", "Azul"]} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={["Limão", "Laranja", "Uva"]} value={fruta} setValue={setFruta} />
    </div>
  )
}

export default App
