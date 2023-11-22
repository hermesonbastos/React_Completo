import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  /* background: ${({ cor }) => cor}; */
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Comprar = styled.button`
  background: ${({ativo}) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ativo}) => (ativo ? 'white' : 'black')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <Comprar ativo={ativo} onClick={handleClick}>Compre Aqui</Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Meu título</Titulo>
          <Paragrafo>Meu texto é esse</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Meu título</Titulo>
          <Paragrafo>Meu texto é esse</Paragrafo>
          <Preco cor="#53d956">R$ 2000</Preco>
        </Produto>
      </ProdutosContainer>
    </>
  );
};

export default App;
