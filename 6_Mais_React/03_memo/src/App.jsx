import React from 'react'
import Header from './Header'

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setCount(count + 1)}>Contagem: {count}</button>
    </div>
  )
}

export default App
