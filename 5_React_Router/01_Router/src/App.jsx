import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import NaoEncontrado from './NaoEncontrado'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="*" element={<NaoEncontrado />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
