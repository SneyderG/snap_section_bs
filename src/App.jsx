import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Careers } from './pages/Careers'
import { Tarjet } from './pages/Tarjet'
import { Built } from './pages/Built'
import { Smarfon } from './pages/Smarfon'
import { Made } from './pages/Made'
import { About } from './pages/About'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>


    
      </BrowserRouter>
    </>
  )
}
