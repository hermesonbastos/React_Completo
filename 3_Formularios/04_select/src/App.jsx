import React from 'react';

function App() {
  const [select, setSelect] = React.useState('');

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option disabled value=""></option>
        {/* o disabled indica que por mais que um campo esteja selecionado
        ele não tem valor para o formulário */}
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>

      {select}
    </form>
  )
}

export default App
