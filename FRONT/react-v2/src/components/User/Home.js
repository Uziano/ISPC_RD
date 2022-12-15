import React from 'react'
import NotasList from '../Notas/NotasList'
import NotasView from '../Notas/NotasView'
import NotasForm from '../Notas/NotasForm'

function Home() {
  return (  
    <>
      <NotasForm />
      {/* <NotasList /> */}
      <NotasView />
    </>
)
}

export default Home