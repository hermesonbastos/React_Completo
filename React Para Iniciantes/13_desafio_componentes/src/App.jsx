// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado

// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// const produtos = [
//   { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
//   { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
// ];
//----------------------------------------------------------------------------

// ------------------- Minha Resolução -------------------
// não respeitei a metodologia sugerida, apesar de funcional
// arquivos a mais criados estão na pasta "myResolution"

// function App() {

//   const [tab, setTab] = useState('Home');

//   return (
//     <>
//       <header>
//         <ul>
//           <li>
//             <a onClick={() => setTab('Home')} href="#">Home</a>
//           </li>
//           <li>
//             <a onClick={() => setTab('Products')} href="#">Produtos</a>
//           </li>
//         </ul>
//       </header>
//       {tab === 'Home' ? <Home /> : tab === 'Products' ? <Products /> : null}
//     </>
//   );
// }

// export default App;

// ------------------- Aula -------------------
import React from "react";
import Header from "./resAula/Header";
import Home from "./resAula/Home";
import Produtos from "./resAula/Produtos";

const App = () => {

  const { pathname } = window.location;
  let Pagina;
  
  if(pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return <section>
    <Header />
    <Pagina />
  </section>;
};

export default App;
