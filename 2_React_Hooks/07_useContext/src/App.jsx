import React from 'react'
import UserContext from './UserContext'
import Produto from './Produto'
import { GlobalStorage } from './GlobalContext'


function App() {

  console.log(UserContext)

  return (
    // exemplo 1 (utilizando o provider)
    // <UserContext.Provider value={{ name: 'Hermeson' }}>
    //   <Produto />
    // </UserContext.Provider>

    // exemplo 2 (exportanto e importando o provider já pronto)
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
