// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

//-------------------------- Minha resolução --------------------------//
// const luana = {
//   cliente: "Luana",
//   idade: 27,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: "Mario",
//   idade: 31,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//     { nome: "Guitarra", preco: "R$ 3500" },
//   ],
//   ativa: false,
// };

// function calcularTotalGasto(compras) {
//     let total = 0;

//     for(let i = 0; i < compras.length; i++){
//       total += Number(compras[i].preco.replace('R$ ', ''));
//     }

//     return total;
// }

// const App = () => {
//   const dados = mario;
//   const totalGasto = calcularTotalGasto(dados.compras);

//   return (
//     <>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação:
//         <span style={{ color: dados.ativa ? "green" : "red" }}>
//           {dados.ativa ? " Ativa" : " Inativa"}
//         </span>
//       </p>
//       <p>Total gasto: R$ {totalGasto}</p>
//       {totalGasto > 10000 ? (<p>Você está gastando muito</p>) : null}
//     </>
//   );
// };

// export default App;

//-------------------------- Resolução em Aula --------------------------//

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};

export default App;
