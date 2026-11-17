import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import { useState } from 'react'

function App() {

  const [mostrarProyectos, setMostrarProyectos] = useState(false)

  return (
    <>
      <div className="portada">
        <Header />
        <SobreMi />

      </div>

      {mostrarProyectos && <Proyectos />}


    </>

  )
}


export default App
