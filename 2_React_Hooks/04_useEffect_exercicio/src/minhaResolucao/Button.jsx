import React from 'react'

const Button = ({ name, setPref }) => {
  return (
    <button onClick={() => setPref(name)}>
      {name}
    </button>
  )
}

export default Button
