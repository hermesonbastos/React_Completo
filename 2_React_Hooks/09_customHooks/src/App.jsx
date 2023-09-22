import React from 'react'
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage"

function App() {
  const [produto, setProduto] = useLocalStorage('produto', 'a');
  const { request, data, loading, erro } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    // dessa forma, não conseguimos ter acesso ao { response, json } pois a função
    // request retorna uma promessa por ser assíncrona, logo precisamos usar then()
    // const { response, json } = request('https://ranekapi.origamid.dev/json/api/produto/');
    // outra forma com then()
    // request('https://ranekapi.origamid.dev/json/api/produto/')
    // .then((obj) => console.log(obj))

    // forma recomendada com uma nova função assíncrona
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/'); // agora podemos eliminar o then
    }
    fetchData();
  }, [request]) // se adicionarmos request() que é um elemento externo na função, acontecerá um
         // loop infinito por atualizações de estados e renderização de componentes com os
         // mesmos estados, isso nos atenta par ao uso do hook useCallback() no nosso hook personalizado;

  if(erro) return <p>{erro}</p>
  if(loading) return <p>Carregando...</p>
  if(data)
  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data.map((produto) => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
        </div>
      ))}
    </div>
  )
  else return null;
}

export default App
