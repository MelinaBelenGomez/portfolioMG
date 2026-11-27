import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {

  const [seccionActiva, setSeccionActiva] = useState('sobreMi')

  return (
    <>
      <div className="portada">
        <Header cambiarSeccion={setSeccionActiva} />

        <div className={seccionActiva === 'sobreMi' ? '' : 'oculta'}>
          <SobreMi cambiarSeccion={setSeccionActiva}/>
        </div>

        <div className={seccionActiva === 'proyectos' ? '' : 'oculta'}>
          <Proyectos />
        </div>

        <div className={seccionActiva === 'contacto' ? '' : 'oculta'}>
          <Contacto />
        </div>

      </div>




    </>

  )
}


export default App
