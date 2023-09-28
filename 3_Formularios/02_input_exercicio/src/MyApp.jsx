// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva


import { useState } from "react"
import Input from "./MyResol/Input"

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  async function handleSubmit(event) {
    console.log(form)
    event.preventDefault();
    await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((res) => console.log(res));
  }

  return (
    <div>
      <form>
        <Input name="Nome" type="text" value={form.nome} estado={form} setEstado={setForm} />
        <Input name="Email" type="email" value={form.email} estado={form} setEstado={setForm}/>
        <Input name="Senha" type="password" value={form.senha} estado={form} setEstado={setForm}/>
        <Input name="Cep" type="text" value={form.cep} estado={form} setEstado={setForm}/>
        <Input name="Rua" type="text" value={form.rua} estado={form} setEstado={setForm}/>
        <Input name="Numero" type="text" value={form.numero} estado={form} setEstado={setForm}/>
        <Input name="Bairro" type="text" value={form.bairro} estado={form} setEstado={setForm}/>
        <Input name="Cidade" type="text" value={form.cidade} estado={form} setEstado={setForm}/>
        <Input name="Estado" type="text" value={form.estado} estado={form} setEstado={setForm}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}

export default App
