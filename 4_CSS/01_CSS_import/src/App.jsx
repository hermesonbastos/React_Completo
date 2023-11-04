import React from 'react'
import './App.css'
import Title from './Title'

// Problema da importação do CSS:
// - Todos os CSS dos componentes são compilados para um
// único arquivo final, logo pode haver conflito de classes
// e a perda do controle dos estilos em cascata dependendo do tamanho do projeto

// uma boa prática é utilizar de arquiteturas CSS em que,
// cada nome de classes faz jus ao nome do seu componente

const App = () => {
  return (
    <div className='container'>
      <Title />
    </div>
  )
}

export default App
