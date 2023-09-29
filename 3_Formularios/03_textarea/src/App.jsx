import React from "react";

function App() {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form>
      <textarea value={textarea} onChange={({ target }) => setTextarea(target.value)} rows={5}></textarea>
      {textarea}
    </form>
  );
}

export default App;
