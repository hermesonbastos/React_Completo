import React from "react";

export const HitsContext = React.createContext();

export const HitsStorage = ({ children }) => {
  const [hits, setHits] = React.useState(0);
  const [step, setStep] = React.useState(0);

  function addHit() {
    setHits((hits) => hits + 1);
  }

  function nextStep() {
    setStep((step) => step + 1);
  }

  return (
    <HitsContext.Provider value={{ hits, step, addHit, nextStep }}>
      {children}
    </HitsContext.Provider>
  );
};
