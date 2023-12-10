import React from 'react'
import './App.css';
import foto from './assets/foto.jpg'
import DogSvg from './DogSvg';

const App = () => {
  const [olho, setOlho] = React.useState(0);

  function handleClick() {
    for(let i = 0; i < 5; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  }

  return (
    <div className='flex flex-col'>
      <DogSvg color="#84e" olho={olho} />
      <p className='fundo' onClick={handleClick}></p>
      <img src={foto} alt="Cachorro" />
    </div>
  )
}

export default App
