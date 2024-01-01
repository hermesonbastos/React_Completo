import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './HEader'
import Home from './Home'
import Sobre from './Sobre'
import Login from './Login'
import NaoEncontrado from './NaoEncontrado'
import Produto from './Produto'
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/*' element={<NaoEncontrado />}></Route>
        {/* também podemos definir rotas aninhadas no browserRouter dentro da própria tag Route */}
        <Route path='produto/:id/*' element={<Produto />}>
          <Route path='' element={<ProdutoDescricao />} />
          <Route path='avaliacao' element={<ProdutoAvaliacao />} />
          <Route path='customizado' element={<ProdutoCustomizado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
