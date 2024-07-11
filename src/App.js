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
import NotFound from './component/notFound'
import SignIn from './component/SignIn.tsx'
import Registration from './component/Registation.tsx'
import SignOut from './component/SignOut.tsx'
import AuthProvider from './component/context/AuthProvider.js'
import PrivetRoute from './component/context/PrivetRoute.js'
import NavLayout from './component/layout/NavLayout.js'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              element={
                <PrivetRoute>
                  <NavLayout />
                </PrivetRoute>
              }
            >
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
            </Route>
            {/* <Route path="/signIn:type?" element={<SignIn />} /> */}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signIn/registration" element={<Registration />} />
            <Route path="/signOut" element={<SignOut />} />
            <Route path="*" element={<NotFound />} />.
          </Routes>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
