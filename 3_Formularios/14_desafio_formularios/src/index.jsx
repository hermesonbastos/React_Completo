import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//------------------------ Minha resolução ------------------------//
// import { HitsStorage } from "./MinhaResol/hitsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //------------------------ Minha resolução ------------------------//
  // <React.StrictMode>
  //   <HitsStorage>
  //     <App />
  //   </HitsStorage>
  // </React.StrictMode>,

  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
