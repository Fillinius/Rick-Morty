import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/navBar'
import Home from './component/home'
import NotFound from './component/notFound'
import SignIn from './component/SignIn.tsx'
import Registration from './component/Registation.tsx'
import SignOut from './component/SignOut.tsx'
import AuthProvider from './component/context/AuthProvider.js'
import PrivetRoute from './component/context/PrivetRoute.js'
import NavLayout from './component/layout/NavLayout.js'

const Heroes = lazy(() => import('./component/ui/heroes'))
const Locations = lazy(() => import('./component/ui/locations'))
const Episodies = lazy(() => import('./component/ui/episodies'))
const HeroCard = lazy(() => import('./component/page/heroes/heroCard.jsx'))
const EpisodeCard = lazy(() => import('./component/page/episode/episodeCard'))
const LocationCard = lazy(() =>
  import('./component/page/locations/locationCard')
)

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
              <Route path="/character">
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
