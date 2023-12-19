import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));


  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <button onClick={handleClick}>Voltar</button>
    </div>
  )
}

export default Produto
