import React from 'react'
import { NavLink, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location)
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to=''>Descricao</NavLink>
        <NavLink to='avaliacao'>Avaliacao</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      {/* podemos definir as rotas aninhadas dentro do próprio componente, é uma das formas */}
      {/* <Routes>
        <Route path='/' element={<ProdutoDescricao />}></Route>
        <Route path='avaliacao' element={<ProdutoAvaliacao />}></Route>
        <Route path='customizado' element={<ProdutoCustomizado />}></Route>
      </Routes> */}
      <Outlet />
      <button onClick={handleClick}>Voltar</button>
    </div>
  )
}

export default Produto
