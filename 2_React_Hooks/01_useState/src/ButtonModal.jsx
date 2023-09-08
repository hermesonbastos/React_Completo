import React from 'react'

const ButtonModal = ({ setModal }) => {

  // utilizando uma arrow function como callback ela consegue ter como
  // primeiro parêmetro o estado original, mesmo sem ter acesso direto
  // dentro do componente
  // resumindo: callBack consegue acessar o valor anterior somente com a
  // função de atualização
  function handleClick() {
    setModal((ativo) => !ativo)
  }

  // se tentarmos acessar o estado atual diretamente, não aconteceria nada
  // pois o estado não foi importado para dentro do componente, apenas a função
  // que o atualiza
  // function handleClick() {
  //   setModal(!ativo)
  // }

  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal
