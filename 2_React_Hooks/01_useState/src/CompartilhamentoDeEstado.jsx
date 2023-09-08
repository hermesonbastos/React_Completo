import React, { useState } from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App2 = () => {
  const [modal, setModal] = useState(false);
  // poderia utilizar um callback que busca um item no localStorage do usuário
  // const [modal, setModal] = useState(() => {
  //   const ativo = window.localStorage.getItem('ativo');
  //   return ativo;
  // });
  
  const [items, setItems] = useState('Teste');

  function handleClick() {
    setItems('Outro');
  }

  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Clique</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal}/>
    </div>
  )
}

export default App2
