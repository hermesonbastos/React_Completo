function App() {

  const titulo = <h1>Este é um título</h1>

  const random = Math.random();
  const ativo = false;

  const carro = {
    marca: 'Ford',
    rodas: 4,
  }

  function mostrarNome(sobrenome) {
    return ' Hermeson ' + sobrenome;
  }

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  }

  return <>
    {titulo}
    <p>
      {true ? 'Sistemas' : 'Informação'} - {20}
      {mostrarNome('Bastos')}
    </p>
    <p style={estiloP}>{new Date().getFullYear()}</p>
    <p style={estiloP}>{carro.marca}</p>
    <p>{carro.rodas}</p>
    <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 5}</p>
  </>;
}

export default App;
