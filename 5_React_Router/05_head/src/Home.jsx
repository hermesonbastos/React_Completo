import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* dessa forma foi criando o componente Head e usando javascript para alterar as propriedades */}
      {/* <Head title="Home" description="Essa é a descrição da Home" /> */}
      
      {/* na forma abaixo utilizamos a extensãoo React Helmet para alterar atributos do Head de forma direta pelo JSX */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name='description' content='Essa é a descrição da Home' />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </Helmet>
      <h1>Home</h1>
      <p>essa é a home</p>
      <Link to={'produto/notebook'}>Notebook</Link> <Link to={'produto/smartphone'}>Smartphone</Link> 
    </div>
  )
}

export default Home
