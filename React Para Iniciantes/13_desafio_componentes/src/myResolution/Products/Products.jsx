import React from 'react'
import CardProduct from './CardProduct';

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const Products = () => {
  return (
    <div>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      {produtos.map(({ nome, propriedades }) => <CardProduct key={nome} nome={nome} propriedades={propriedades} />)}
    </div>
  )
}

export default Products
