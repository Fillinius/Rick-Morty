import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/navBar'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes></Routes>
      </div>
    </>
  )
}

export default App
