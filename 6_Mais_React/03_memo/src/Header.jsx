import React from 'react'

const Header = () => {

  console.log('Renderizou');

  return (
    <div>
      <h1>Aqui é o Header</h1>
    </div>
  )
}

export default React.memo(Header);
