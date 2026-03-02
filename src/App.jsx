import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/home'
import { Careers } from './pages/Careers'
import { Tarjet } from './pages/Tarjet'
import { Built } from './pages/Built'
import { Smarfon } from './pages/Smarfon'

export const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Careers/>
    <Tarjet/>
    <Built/>
    <Smarfon/>
    </>
  )
}
