import React from 'react'

function operacaoLenta() {
  let c = 0;
  for(let i = 0; i < 100000000; i++){
    c = i + i / 10;
  }
  return c;
}

function App() {
  const [count, setCount] = React.useState(0)
  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem('produto');
  //   console.log('Aconteceu o memo')
  //   return localItem;
  // }, []);
  // o useMemo é útil quando temos que realizar operações JS mais lentas,
  // como cálculos complexos, ele recebe uma callback cujo o retorno será
  // armazenado, e recebe um array de dependências de atualização, como no
  // use Effect. Sem dependências ele só roda uma vez junto com a renderização
  // do componentes

  const t1 = performance.now();
  // const valor = operacaoLenta(); // executa sempre que o componente atualizar
  const valor = React.useMemo(() => operacaoLenta(), []); // executa só quando o
  // componente é criado e guarda o valor na memória para as próximas atualizações
  console.log(performance.now() - t1)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default App
