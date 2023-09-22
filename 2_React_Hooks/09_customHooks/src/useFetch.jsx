import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null); // estado para dados da requisição
  const [loading, setLoading] = React.useState(null); // estado para loading da requisição
  const [erro, setErro] = React.useState(null); // estado para erro da requição

  // async function request(url, options) {
  //   let response;
  //   let json;
  //   try {
  //     setErro(null)
  //     setLoading(true);
  //     response = await fetch(url, options);
  //     json = await response.json();
  //     setLoading(false);
  //   } catch(erro) {
  //     json = null;
  //     setErro('erro');
  //   } finally {
  //     setData(json);
  //     setLoading(false)
  //     return { response, json }
  //   }

  // }

  // vamor refatorar essa função request() para o useCallback evitar reconstruções
  // desnecessárias dessa mesma função
  const request = React.useCallback(async (url, options) => { // função do hook useFetch para permitir requisições mais
    // práticas para o usuário, recebe um link (url), e as opções, caso o usuário queira
    let response;
    let json;
    try {
      setErro(null) // sem erro
      setLoading(true); // carregando
      response = await fetch(url, options); // response espera para ser o resultado do fetch
      json = await response.json(); // json espera para ser o json da request
      setLoading(false); // não está mais carregando

    } catch(erro) { // se der erro no try
      json = null; // json se torna null
      setErro('erro'); // ocorreu um erro no estado da request

    } finally { // dando erro ou não
      setData(json); // data vai ser o resultado da requisição ou null
      setLoading(false) // não está mais carregando
      return { response, json } // retorno a response e o json
    }
  }, [])


  return { data, loading, erro, request } 
}

export default useFetch;