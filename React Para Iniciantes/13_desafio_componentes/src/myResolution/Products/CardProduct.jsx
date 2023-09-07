import React from 'react'

const CardProduct = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop) => <li key={prop}>{prop}</li>)}
      </ul>
    </div>
  )
}

export default CardProduct
