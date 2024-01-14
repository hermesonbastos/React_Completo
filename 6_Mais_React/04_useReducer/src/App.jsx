import React from 'react'
import Exemplo from './Exemplo';

function reducer(state, action) {
  switch(action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error('Erro, action inexistente');
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);


  return (
    <div>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  )
}

export default App
