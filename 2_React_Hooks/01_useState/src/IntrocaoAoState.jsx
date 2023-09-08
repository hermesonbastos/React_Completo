import { useState } from "react";

function App() {
  // observe que dessa forma, apesar do valor do estado ativo mudar
  // o componente não se importa em renderizar novamente pois isso
  // iria causar problemas de renderização exaustiva a cada alteração
  // no JavaScript

  // let ativo = false;

  // function handleClick() {
  //   ativo = !ativo;
  //   console.log(ativo)
  // }

  //-----------------------------------------------------------------------------
  // Os hooks nos permitem ter o controle do estado de componentes e do seu
  // ciclo de vida, o que antes só se alcançava com classes no JavaScript

  // observe no console que ativoHook na verdade é um array de tamanho 2
  // o primeiro com o valor inicial e o segundo com uma função para atualizarmos
  // esse valor

  // const ativoHook = useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  // o mais comum é desestruturarmos o array retornado pelo useState
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: "Hermeson", idade: 20 });

  function handleClick() {
    // atualizaValor(!ativoValor);
    setAtivo(!ativo);
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
}

export default App;
