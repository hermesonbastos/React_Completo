import React from "react"
import Select from "./Form/Select"

function App() {
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select options={['Notebook', 'Tablet']} value={produto} setValue={setProduto} />
    </form>
  )
}

export default App
