import React from "react";
import Input from "./Form/Input";

function App() {
  const [cep, setCep] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validadeCep(value) {
    if(value.length === 0) {
      setErro("Preencha um valor");
      return false;
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setErro("Preencha um CEP válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBlur({target}) {
    validadeCep(target.value);
  }

  function handleChange({target}) {
    if(erro)  validadeCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(validadeCep(cep)) {
      console.log('enviou')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
