import React from 'react'

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  // o useRef utiliza de um valor que não será alterado mesmo com
  // o refresh da renderização do componente, diferente de se eu tivesse criado
  // uma variável local = 0

  const timeoutRef = React.useRef(); // guarda o setTimeout da renderização passada

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current); // apaga o timeout da renderização passada para evitar
    // redundância das notificações e sempre que clicar no botão a contagem será resetada
    timeoutRef.current = setTimeout(() => { // lembrar de falar sempre com o .current
      setNotificacao(null);
    }, 2000)
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  )
}

export default App
