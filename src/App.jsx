import {Routes, Route} from 'react-router-dom'
import HeaderT from './components/HeaderT'
import Home from './pages/Home'
import Astrologia from './pages/Astrologia'
import Kaballah from './pages/Kaballah'
import LiberResh from './pages/LiberResh'
import Tarot from './pages/Tarot'
import leftPillar from './assets/solomon-pillar-obsidian.png'
import rightPillar from './assets/solomon-pillar-alabaster.png'
import './App.css'

function App() {
  return (
    <>
      <HeaderT/>
      <section className="container">
        <img className="pillar pillar-left" src={leftPillar} alt="" aria-hidden="true" />
        <main className="base">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/astrologia" element={<Astrologia/>}></Route>
            <Route path="/kaballah" element={<Kaballah/>}></Route>
            <Route path="/liber-resh" element={<LiberResh/>}></Route>
            <Route path="/tarot" element={<Tarot/>}></Route>
          </Routes>
        </main>
        <img className="pillar pillar-right" src={rightPillar} alt="" aria-hidden="true" />
      </section>
    </>
  )
}

export default App
