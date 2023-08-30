function App() {
  // nunca vamos criar um array diretamente com elementos como na forma abaixo
  // O JSX necessita de uma key única para cada elemento da Array.

  // const produtos = [<li key="e1">Notebook</li>, <li key="e2">Tablet</li>]

  // return (
  //   <>
  //     <p>{produtos}</p>
  //   </>
  // )

  //--------------------------------------------------------------------------------------------

  // É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.

  // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  // return (
  //   <ul>
  //     {filmes.map((filme, index) => (
  //       <li key={filme}>{filme}</li>
  //     ))}
  //   </ul>
  // )

  //--------------------------------------------------------------------------------------------

  // O cenário mais comum é trabalhar com array's de objetos.
  // O código abaixo cria um <li> com o nome e o ano dos filmes que foram lançados a partir de 1998
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1998) // gera um novo array somente com os filmes de 1998 ou após
        .map(({ nome, ano }) => ( // retorna um novo array de <li> com o nome e o ano dos filmes
          <li>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
}

export default App;
