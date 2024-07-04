import React from 'react'
import logo from './logo.png'
import main from './main.png'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <nav className="header">
            <div className="header_logo">
              <img className="header_logo-img" src={logo} alt="logo"></img>
            </div>
            <ul className="header_list">
              <li className="header_list-item">
                <a className="header_list-link" href="#">
                  Hero
                </a>
              </li>
              <li>
                <a className="header_list-link" href="#">
                  Location
                </a>
              </li>
              <li>
                <a className="header_list-link" href="#">
                  Episode
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div>
            <h1 className="main-text">Rick & Morty</h1>
            <img className="main-img" src={main} alt="main"></img>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
