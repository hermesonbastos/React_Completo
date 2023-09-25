import React from "react";

function App() {
  // 01 - um estado para cada campo do formulário
  // const [nome, setNome] = React.useState("");
  // const [email, setEmail] = React.useState("");

  // 02 - um objeto para todos os campos
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault(); // previnir o fetch automático do evento de submit do formulário
    // sem isso a página recarrega tentando enviar o conteúdo do formulário
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 01 */}
      {/* <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /> */}

      {/* 02 */}
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={form.nome} onChange={handleChange} />
      {form.nome}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
}

export default App;
