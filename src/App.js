import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/navBar'
import Home from './component/home'
import Heroes from './component/ui/heroes'
import Locations from './component/ui/locations'
import Episodies from './component/ui/episodies'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Heroes />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/episodies" element={<Episodies />} />
        </Routes>
      </div>
    </>
  )
}

export default App
