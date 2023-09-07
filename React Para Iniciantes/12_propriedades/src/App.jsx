import React from 'react'
import Form from './Form/Form'


// Exemplo de passagem de propriedades para um componente reutilizável em React
// const Titulo = (props) => {
//   return <h1 style={{ color: props.cor }}>{props.texto}</h1>
// }

// É mais comum atualmente o uso da desestruturação, eliminando a necessidade de acessar o objeto.

const Titulo = ({ texto, cor, children }) => {
  return <h1 style={{ color: cor }}>{ texto }, { children }</h1>
}

function AppTeste() {
  return (
    <div>
      <Titulo cor="red" texto="Meu título 1">Isso é o children</Titulo>
      <Titulo cor="blue" texto="Meu título 2" />
      <Titulo texto="Meu título 3" />
    </div>
  )
}

function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App

