import {Routes, Route} from 'react-router-dom'
import HeaderT from './components/HeaderT'
import Home from './pages/Home'
import Astrologia from './pages/Astrologia'
import Kaballah from './pages/Kaballah'
import Tarot from './pages/Tarot'
import bravery from './assets/bravery.png'
import justice from './assets/justice.png'
import './App.css'

function App() {
  return (
    <>
      <HeaderT/>
      <section className="container">
        <img className="pillar pillar-left" src={bravery} alt="" aria-hidden="true" />
        <main className="base">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/astrologia" element={<Astrologia/>}></Route>
            <Route path="/kaballah" element={<Kaballah/>}></Route>
            <Route path="/tarot" element={<Tarot/>}></Route>
          </Routes>
        </main>
        <img className="pillar pillar-right" src={justice} alt="" aria-hidden="true" />
      </section>
    </>
  )
}

export default App
