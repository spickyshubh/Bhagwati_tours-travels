// import { useState } from 'react'
import { Navbar } from './Home/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Explore } from './Home/Explore/Explore'
import { Packages } from './Home/Packages/Packages'
import { About } from './Home/About/About'
import { Destinations } from './Home/Destinations/Destinations'
import { Footer } from './Footer/Footer'


function App() {
  

  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={
            <>
              <h1>Welcome to Bhagwati Tours & Travels</h1>
              <Destinations />
            </>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/packages' element={<Packages/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    
  )
}

export default App
