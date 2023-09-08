import React from 'react'
import ReactDOM from 'react-dom/client'

// Altere entre os modulos do conteúdo './<modulo>.jsx'
// 1. IntroducaoAoState
// 2. CompartilhamentoDeEstado
// 3. StrictMode
import App from './StrictMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
