import React from "react"
import Checkbox from "./Form/Checkbox"

function App() {
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox options={["JavaScript", "PHP", "Ruby"]} value={linguagens} setValue={setLinguagens}/>
    </form>
  )
}

export default App
