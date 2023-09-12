import React from 'react'

const Produto = () => {

  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    } 
    // a função retornada como callback no próprio callback do useEffect
    // só vai ser executada quando seu componente (Produto) sair da tela,
    // nesse caso quando ele sai da tela, evitamos o acúmulo de eventos
    // removendo o que o useEffect tinha adicionado anteriormente
  });

  return (
    <div style={{ height: '200vh' }}>
      Meu produto
    </div>
  )
}

export default Produto
