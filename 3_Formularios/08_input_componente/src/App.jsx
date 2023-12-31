import Input from "./Form/Input";
import React from "react";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
}

export default App;
