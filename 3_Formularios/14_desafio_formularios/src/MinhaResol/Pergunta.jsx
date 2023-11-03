import React from 'react'
import Radio from './Radio'
import { HitsContext } from './hitsContext';

const Pergunta = ({ title, options, answer }) => {
  const [option, setOption] = React.useState("");
  const hits = React.useContext(HitsContext);
  const steps = React.useContext(HitsContext);

  function handleSubmit(event) {
    event.preventDefault();
    if(option === answer) {
      hits.addHit();
    }
    steps.nextStep();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Radio value={option} options={options} setValue={setOption} />
        <button>Próximo</button>
      </form>
    </div>
  )
}

export default Pergunta
