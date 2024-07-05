import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/navBar'
import Home from './component/home'
import Heroes from './component/ui/heroes'
import Locations from './component/ui/locations'
import Episodies from './component/ui/episodies'
import HeroCard from './component/page/heroes/heroCard'
import EpisodeCard from './component/page/episode/episodeCard'
import LocationCard from './component/page/locations/locationCard'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters">
            <Route index element={<Heroes />} />
            <Route path=":dataId" element={<HeroCard />} />
          </Route>
          <Route path="/location">
            <Route index element={<Locations />} />
            <Route path=":dataId" element={<LocationCard />} />
          </Route>
          <Route path="/episode">
            <Route index element={<Episodies />} />
            <Route path=":dataId" element={<EpisodeCard />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
