import { useState } from 'react'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Cards from './components/Cards'
import Cardpage from './components/Cardpage'
import Page3 from './components/Page3'
import Contact from './components/Contact'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Page2/>
    <Cardpage/>
    <Page3 />
    <Contact/>
    <Info/>
    <Footer/>
    
    </>
  )
}

export default App
