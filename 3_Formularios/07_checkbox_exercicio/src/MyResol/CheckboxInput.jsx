import React from 'react'

const CheckboxInput = ({ value, cores, setCores }) => {

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <label>
        <input
          type="checkbox"
          value={value}
          checked={handleChecked(value)}
          onChange={handleChange}
        />
        {capitalizeFirstLetter(value)}
      </label>
  )
}

export default CheckboxInput
