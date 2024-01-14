import React from 'react'

function reducer(state, action) {
  switch(action.type) {
    case 'adicionar':
      return [...state, action.content];
    case 'remover':
      return state.filter((item) => item !== action.content);
    default:
      throw new Error('Erro, ação inexistente');
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  return (
    <div>
      <button onClick={() => dispatch({type: 'remover', content: 'Banana'})}>Remover Banana</button>
      <button onClick={() => dispatch({type: 'adicionar', content: 'Limão'})}>Adicionar Limão</button>
      <p>{state}</p>
    </div>
  )
}

export default Exemplo
