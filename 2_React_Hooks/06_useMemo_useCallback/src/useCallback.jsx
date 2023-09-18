import React from "react";

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  }

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, [])

  set1.add(func1); // enquanto o set1 sempre vai ser adicionado uma nova função igual
  set2.add(func2); // o useCallback não adiciona novas funções iguais 

  console.log('Set1: ', set1);
  console.log('Set2: ', set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  // const handleClick = () => {
  //   setContar(contar + 1);
  // }
  // sempre que o componente atualizar, essa
  // função será criada novamente, porém é uma
  // operação super rápida que não justifica o
  // uso do useCallback

  const handleClick = React.useCallback(() => {
    // setContar(contar + 1); // dessa forma o useCallback seria inutilizado pois estamos acessando um estado externo à função
    setContar((c) => setContar(c + 1)); // assim seria o mais correto pois o próprio setContar da acesso ao valor anterior
  }, []);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
};

export default App;
