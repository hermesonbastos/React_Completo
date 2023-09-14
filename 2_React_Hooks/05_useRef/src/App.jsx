import React from 'react'

function App() {

  const video = React.useRef();

  // console.log(video, 'fora'); 
  // 'video' a esse ponto ainda é 
  // undefined, pois ainda não retornou o html e não conseguiu acessar o
  // objeto referido <div>

  React.useEffect(() => {
    // o current pode ser mutável
    video.current = 'Teste';
    // console.log(video.current); // printa 'Teste'
    console.log(video.current);
    // o correto seria usar no callback de um useEffect que exeuta
    // junto com a renderização do componente no DOM, ou em uma callback
    // dentro do HTML do JSX.
  })

  return (
    <video ref={video} />
  )
}

export default App
